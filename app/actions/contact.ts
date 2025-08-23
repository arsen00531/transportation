"use server"

interface TelegramMessage {
  chat_id: string
  text: string
  parse_mode?: string
}

async function sendToTelegram(name: string, phone: string) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN
  const chatIds = process.env.TELEGRAM_CHAT_IDS || process.env.TELEGRAM_CHAT_ID

  if (!botToken || !chatIds) {
    console.warn("Telegram bot token or chat IDs not configured")
    return false
  }

  // Разделяем ID чатов по запятой и убираем пробелы
  const chatIdList = chatIds
    .split(",")
    .map((id) => id.trim())
    .filter((id) => id.length > 0)

  if (chatIdList.length === 0) {
    console.warn("No valid chat IDs found")
    return false
  }

  const message = `🔔 *Новая заявка с сайта*

👤 *Имя:* ${name}
📞 *Телефон:* ${phone}
⏰ *Время:* ${new Date().toLocaleString("ru-RU", {
    timeZone: "Europe/Moscow",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  })}

💼 *Услуга:* Консультация по фулфилменту`

  let successCount = 0
  const totalChats = chatIdList.length

  // Отправляем сообщение во все указанные чаты
  for (const chatId of chatIdList) {
    try {
      const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: "Markdown",
        } as TelegramMessage),
      })

      if (response.ok) {
        successCount++
        console.log(`Message sent successfully to chat ${chatId}`)
      } else {
        const errorData = await response.json()
        console.error(`Failed to send message to chat ${chatId}:`, errorData)
      }
    } catch (error) {
      console.error(`Error sending message to chat ${chatId}:`, error)
    }
  }

  console.log(`Telegram delivery: ${successCount}/${totalChats} chats`)
  return successCount > 0
}

export async function submitContactForm(formData: FormData) {
  // Имитация задержки для демонстрации
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const name = formData.get("name") as string
  const phone = formData.get("phone") as string

  // Валидация данных
  if (!name || !phone) {
    return {
      success: false,
      message: "Пожалуйста, заполните все поля",
    }
  }

  // Отправка в Telegram
  const telegramSent = await sendToTelegram(name, phone)

  // Логирование для отладки
  console.log("Получены контактные данные:", { name, phone })
  console.log("Отправлено в Telegram:", telegramSent)

  // Здесь можно добавить отправку данных в CRM, базу данных или email
  // Например:
  // await saveToCRM({ name, phone })
  // await sendEmail({ name, phone })

  return {
    success: true,
    message: `Спасибо, ${name}! Мы получили вашу заявку и свяжемся с вами в ближайшее время по номеру ${phone}`,
    telegramSent,
  }
}
