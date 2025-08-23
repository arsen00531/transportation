import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { name, phone } = await request.json()

    const botToken = process.env.TELEGRAM_BOT_TOKEN
    const chatIds = process.env.TELEGRAM_CHAT_IDS || process.env.TELEGRAM_CHAT_ID

    if (!botToken || !chatIds) {
      return NextResponse.json({ error: "Telegram configuration missing" }, { status: 500 })
    }

    if (!name || !phone) {
      return NextResponse.json({ error: "Name and phone are required" }, { status: 400 })
    }

    // Разделяем ID чатов по запятой и убираем пробелы
    const chatIdList = chatIds
      .split(",")
      .map((id) => id.trim())
      .filter((id) => id.length > 0)

    if (chatIdList.length === 0) {
      return NextResponse.json({ error: "No valid chat IDs found" }, { status: 500 })
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
    const results = []

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
          }),
        })

        if (response.ok) {
          const result = await response.json()
          successCount++
          results.push({ chatId, success: true, result })
        } else {
          const errorData = await response.json()
          results.push({ chatId, success: false, error: errorData })
          console.error(`Failed to send message to chat ${chatId}:`, errorData)
        }
      } catch (error) {
        results.push({ chatId, success: false, error: error.message })
        console.error(`Error sending message to chat ${chatId}:`, error)
      }
    }

    return NextResponse.json({
      success: successCount > 0,
      totalChats: chatIdList.length,
      successCount,
      results,
    })
  } catch (error) {
    console.error("Error in Telegram API route:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
