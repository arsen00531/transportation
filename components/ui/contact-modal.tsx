"use client"

import type React from "react"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Phone, User, Send, Loader2 } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { submitContactForm } from "@/app/actions/contact"
import { toast } from "sonner"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Имя должно содержать минимум 2 символа",
  }),
  phone: z
    .string()
    .min(18, {
      message: "Введите корректный номер телефона",
    })
    .regex(/^\+7 $$\d{3}$$ \d{3}-\d{2}-\d{2}$/, {
      message: "Номер телефона должен быть в формате +7 (999) 123-45-67",
    }),
})

interface ContactModalProps {
  children: React.ReactNode
  title?: string
  description?: string
}

// Функция для форматирования номера телефона
function formatPhoneNumber(value: string): string {
  // Удаляем все символы кроме цифр
  const numbers = value.replace(/\D/g, "")

  // Если пустая строка, возвращаем пустую строку
  if (!numbers) return ""

  // Если начинается с 8, заменяем на 7
  let cleanNumbers = numbers
  if (numbers.startsWith("8")) {
    cleanNumbers = "7" + numbers.slice(1)
  }

  // Если не начинается с 7, добавляем 7 в начало
  if (!cleanNumbers.startsWith("7")) {
    cleanNumbers = "7" + cleanNumbers
  }

  // Ограничиваем до 11 цифр (7 + 10 цифр номера)
  cleanNumbers = cleanNumbers.slice(0, 11)

  // Форматируем номер
  if (cleanNumbers.length >= 1) {
    let formatted = "+7"

    if (cleanNumbers.length > 1) {
      const areaCode = cleanNumbers.slice(1, 4)
      formatted += ` (${areaCode}`

      if (cleanNumbers.length >= 4) {
        formatted += ")"

        if (cleanNumbers.length > 4) {
          const firstPart = cleanNumbers.slice(4, 7)
          formatted += ` ${firstPart}`

          if (cleanNumbers.length > 7) {
            const secondPart = cleanNumbers.slice(7, 9)
            formatted += `-${secondPart}`

            if (cleanNumbers.length > 9) {
              const thirdPart = cleanNumbers.slice(9, 11)
              formatted += `-${thirdPart}`
            }
          }
        }
      }
    }

    return formatted
  }

  return "+7"
}

export function ContactModal({
  children,
  title = "Получить консультацию",
  description = "Оставьте свои контактные данные и мы свяжемся с вами в течение 15 минут",
}: ContactModalProps) {
  const [open, setOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
    },
  })

  // Обработчик изменения номера телефона
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>, onChange: (value: string) => void) => {
    const formatted = formatPhoneNumber(e.target.value)
    onChange(formatted)
  }

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    try {
      const formData = new FormData()
      formData.append("name", values.name)
      formData.append("phone", values.phone)

      const result = await submitContactForm(formData)

      if (result.success) {
        toast.success("Заявка отправлена!", {
          description: result.message,
        })
        form.reset()
        setOpen(false)
      }
    } catch (error) {
      toast.error("Ошибка отправки", {
        description: "Попробуйте еще раз или свяжитесь с нами по телефону",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <Phone className="h-5 w-5 text-yellow-400" />
            {title}
          </DialogTitle>
          <DialogDescription className="text-gray-600">{description}</DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    Ваше имя
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Введите ваше имя"
                      {...field}
                      className="focus:border-yellow-400 focus:ring-yellow-400"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    Номер телефона
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="+7 (999) 123-45-67"
                      {...field}
                      onChange={(e) => handlePhoneChange(e, field.onChange)}
                      onFocus={(e) => {
                        // Если поле пустое, автоматически ставим +7
                        if (!e.target.value) {
                          field.onChange("+7")
                        }
                      }}
                      className="focus:border-yellow-400 focus:ring-yellow-400 font-mono"
                      maxLength={18}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setOpen(false)}
                className="flex-1"
                disabled={isSubmitting}
              >
                Отмена
              </Button>
              <Button
                type="submit"
                className="flex-1 bg-yellow-400 text-gray-900 hover:bg-yellow-500"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Отправка...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Отправить
                  </>
                )}
              </Button>
            </div>
          </form>
        </Form>

        <div className="text-xs text-gray-500 text-center mt-4">
          Нажимая "Отправить", вы соглашаетесь с обработкой персональных данных
        </div>
      </DialogContent>
    </Dialog>
  )
}
