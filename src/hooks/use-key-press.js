import { useEffect } from "react"

export default function useKeyPress(key, handler) {
  useEffect(() => {
    function listener(event) {
      if (event.key === key && !event.metaKey) {
        handler(event)
      }
    }

    window.addEventListener("keydown", listener)
    return () => {
      window.removeEventListener("keydown", listener)
    }
  }, [key, handler])
}
