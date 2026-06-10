import { useRef } from 'react'

export function useTilt() {
  const ref = useRef(null)

  const onMouseMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    el.style.transform =
      `perspective(900px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) scale(1.02)`
    el.style.transition = 'transform 0.08s ease'
    el.style.boxShadow = `
      ${-x * 16}px ${-y * 16}px 40px rgba(5,150,105,0.12),
      var(--shadow-lg)
    `
  }

  const onMouseLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.transform =
      'perspective(900px) rotateY(0deg) rotateX(0deg) scale(1)'
    el.style.transition = 'transform 0.45s cubic-bezier(0.23,1,0.32,1)'
    el.style.boxShadow = 'var(--shadow-md)'
  }

  return { ref, onMouseMove, onMouseLeave }
}
