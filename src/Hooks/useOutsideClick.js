import { useEffect } from "react"

export default function useOutsideClick(ref, execptionId, cb) {
  useEffect(() => {
    function handlekOutsideClick(event) {
      if (
        ref.current &&
        !ref.current.contains(event.target) &&
        event.target.id != execptionId
      ) {
        cb()
      }
    }
    document.addEventListener("mousedown", handlekOutsideClick)

    return () => {
      document.removeEventListener("mousedown", handlekOutsideClick)
    }
  }, [ref, execptionId, cb])
}
