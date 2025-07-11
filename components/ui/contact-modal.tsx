"use client"

import type React from "react"

import { useState } from "react"
import { Phone, User, Send, Loader2 } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { submitContactForm } from "@/app/actions/contact"
import { toast } from "sonner"

interface ContactModalProps {
  children: React.ReactNode
  title?: string
  description?: string
}

// Обновите функцию `formatPhoneNumber` следующим образом:
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
  let formatted = "+7"
  if (cleanNumbers.length > 1) {
    formatted += ` ${cleanNumbers.slice(1, 4)}` // Удалены скобки

    if (cleanNumbers.length > 4) {
      formatted += ` ${cleanNumbers.slice(4, 7)}`
      if (cleanNumbers.length > 7) {
        formatted += `-${cleanNumbers.slice(7, 9)}`
        if (cleanNumbers.length > 9) {
          formatted += `-${cleanNumbers.slice(9, 11)}`
        }
      }
    }
  }

  return formatted.trim() // Обрезаем пробелы в конце
}

export function ContactModal({
  children,
  title = "Получить консультацию",
  description = "Оставьте свои контактные данные и мы свяжемся с вами в течение 15 минут",
}: ContactModalProps) {
  const [open, setOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({})

  // Валидация формы
  const validateForm = () => {
    const newErrors: { name?: string; phone?: string } = {}

    if (!name.trim() || name.trim().length < 2) {
      newErrors.name = "Имя должно содержать минимум 2 символа"
    }

    // Обновленная валидация для нового формата
    const phoneDigits = phone.replace(/\D/g, "")
    if (!phoneDigits || phoneDigits.length !== 11) {
      newErrors.phone = "Введите корректный номер телефона (11 цифр)"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Обработчик изменения номера телефона
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value)
    setPhone(formatted)
    if (errors.phone) {
      setErrors({ ...errors, phone: undefined })
    }
  }

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
    if (errors.name) {
      setErrors({ ...errors, name: undefined })
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      const formData = new FormData()
      formData.append("name", name)
      formData.append("phone", phone.replace(/\D/g, "")) // Отправляем только цифры на сервер

      const result = await submitContactForm(formData)

      if (result.success) {
        toast.success("Заявка отправлена!", {
          description: result.message,
        })
        setName("")
        setPhone("")
        setErrors({})
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

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium">
              <User className="h-4 w-4" />
              Ваше имя
            </label>
            <Input
              placeholder="Введите ваше имя"
              value={name}
              onChange={handleNameChange}
              className="focus:border-yellow-400 focus:ring-yellow-400"
            />
            {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
          </div>

          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium">
              <Phone className="h-4 w-4" />
              Номер телефона
            </label>
            <Input
              placeholder="+7 XXX XXX-XX-XX" // Обновленный плейсхолдер
              value={phone}
              onChange={handlePhoneChange}
              onFocus={(e) => {
                // Если поле пустое, автоматически ставим +7
                if (!e.target.value) {
                  setPhone("+7")
                }
              }}
              className="focus:border-yellow-400 focus:ring-yellow-400 font-mono"
              maxLength={16} // Максимальная длина для +7 XXX XXX-XX-XX (11 цифр + 5 пробелов/дефисов)
            />
            {errors.phone && <p className="text-sm text-red-500">{errors.phone}</p>}
          </div>

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

        <div className="text-xs text-gray-500 text-center mt-4">
          Нажимая "Отправить", вы соглашаетесь с обработкой персональных данных
        </div>
      </DialogContent>
    </Dialog>
  )
}
