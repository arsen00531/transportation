"use server"

export async function submitContactForm(formData: FormData) {
  // Имитация задержки для демонстрации
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const name = formData.get("name") as string
  const phone = formData.get("phone") as string

  // Здесь можно добавить отправку данных в CRM, базу данных или email
  console.log("Получены контактные данные:", { name, phone })

  // Имитация успешной отправки
  return {
    success: true,
    message: `Спасибо, ${name}! Мы свяжемся с вами в ближайшее время по номеру ${phone}`,
  }
}
