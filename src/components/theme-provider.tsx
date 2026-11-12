"use client"

import { createContext, useContext, useEffect, useState, useSyncExternalStore, type ReactNode } from "react"

type Theme = "light" | "dark"

const ThemeContext = createContext<{
  theme: Theme
  toggleTheme: () => void
}>({ theme: "light", toggleTheme: () => {} })

export function useTheme() {
  return useContext(ThemeContext)
}

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback)
  return () => window.removeEventListener("storage", callback)
}

function getSnapshot(): Theme {
  try {
    const stored = localStorage.getItem("theme") as Theme | null
    if (stored === "light" || stored === "dark") return stored
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) return "dark"
  } catch {}
  return "light"
}

function getServerSnapshot(): Theme {
  return "light"
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const currentTheme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
  const [themeOverride, setThemeOverride] = useState<Theme | null>(null)

  const theme = themeOverride ?? currentTheme

  useEffect(() => {
    const root = document.documentElement
    if (theme === "dark") {
      root.classList.add("dark")
    } else {
      root.classList.remove("dark")
    }
  }, [theme])

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light"
    setThemeOverride(next)
    try {
      localStorage.setItem("theme", next)
    } catch {}
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}