import { useState, useEffect } from 'react'

export function useTypewriter(words, typingSpeed = 80, deletingSpeed = 45, pauseMs = 2000) {
  const [display, setDisplay] = useState('')
  const [wordIdx, setWordIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[wordIdx % words.length]
    const id = setTimeout(() => {
      if (!deleting) {
        const next = word.slice(0, display.length + 1)
        setDisplay(next)
        if (next === word) setTimeout(() => setDeleting(true), pauseMs)
      } else {
        const next = word.slice(0, display.length - 1)
        setDisplay(next)
        if (next === '') {
          setDeleting(false)
          setWordIdx(i => i + 1)
        }
      }
    }, deleting ? deletingSpeed : typingSpeed)
    return () => clearTimeout(id)
  }, [display, deleting, wordIdx, words, typingSpeed, deletingSpeed, pauseMs])

  return display
}
