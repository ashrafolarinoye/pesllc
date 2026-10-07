import { useCallback, useEffect, useState } from 'react'

const KEY = 'pes-theme'

/** Reads the theme already applied to <html> by the inline boot script. */
const read = () =>
  typeof document !== 'undefined' &&
  document.documentElement.getAttribute('data-theme') === 'dark'
    ? 'dark'
    : 'light'

/**
 * Light/dark theme with localStorage persistence. Light is the default; dark is
 * opt-in and then remembered.
 *
 * The initial value comes from the attribute set by the inline boot script in
 * index.html, so there is no flash of the wrong theme. To default to the OS
 * preference instead, add a `prefers-color-scheme` branch to that script.
 */
export function useTheme() {
  const [theme, setTheme] = useState(read)

  useEffect(() => {
    setTheme(read())
  }, [])

  const toggle = useCallback(() => {
    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark'
      const root = document.documentElement
      root.setAttribute('data-theme', next)
      root.style.colorScheme = next
      const meta = document.querySelector('meta[name="theme-color"]')
      if (meta) meta.setAttribute('content', next === 'dark' ? '#07080a' : '#ffffff')
      try {
        localStorage.setItem(KEY, next)
      } catch {
        /* private mode — fall back to session-only */
      }
      return next
    })
  }, [])

  return [theme, toggle]
}
