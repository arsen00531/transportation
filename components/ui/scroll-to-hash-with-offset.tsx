"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function ScrollToHashWithOffset() {
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header")
      // Получаем фактическую высоту хедера. Если хедер не найден, используем 0.
      const headerHeight = header ? header.getBoundingClientRect().height : 0
      const hash = window.location.hash

      console.log("ScrollToHashWithOffset: Current hash:", hash)
      console.log("ScrollToHashWithOffset: Header height:", headerHeight)

      if (hash) {
        const id = hash.substring(1) // Удаляем '#'
        const element = document.getElementById(id)
        if (element) {
          const elementRect = element.getBoundingClientRect()
          const absoluteElementTop = elementRect.top + window.scrollY

          // Вычисляем целевую позицию прокрутки:
          // абсолютная позиция элемента - высота хедера.
          // Убрал дополнительный отступ -10.
          const targetScrollPosition = absoluteElementTop - headerHeight

          console.log("ScrollToHashWithOffset: Element ID:", id)
          console.log("ScrollToHashWithOffset: Element top (relative to viewport):", elementRect.top)
          console.log("ScrollToHashWithOffset: Current scrollY:", window.scrollY)
          console.log("ScrollToHashWithOffset: Absolute element top:", absoluteElementTop)
          console.log("ScrollToHashWithOffset: Target scroll position:", targetScrollPosition)

          window.scrollTo({
            top: targetScrollPosition,
            behavior: "smooth",
          })
        }
      } else {
        // Если хеша нет, прокручиваем в самый верх страницы
        window.scrollTo({ top: 0, behavior: "smooth" })
      }
    }

    // Слушаем изменения хеша в URL
    window.addEventListener("hashchange", handleScroll)

    // Также вызываем при первоначальной загрузке или изменении пути, если хеш присутствует.
    // Увеличиваем таймаут, чтобы дать больше времени на отрисовку.
    const timeoutId = setTimeout(() => {
      handleScroll()
    }, 300) // Увеличено до 300 мс

    return () => {
      window.removeEventListener("hashchange", handleScroll)
      clearTimeout(timeoutId) // Очищаем таймаут при размонтировании компонента
    }
  }, [pathname]) // Зависим от pathname, чтобы перезапускать при изменении URL

  return null
}
