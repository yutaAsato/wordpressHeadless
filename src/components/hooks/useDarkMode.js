import React from "react"

//useDarkMode
function useDarkMode() {
  const [theme, setTheme] = React.useState("light")

  //toggleTheme
  const toggleTheme = () => {
    if (theme === "light") {
      window.localStorage.setItem("theme", "dark")
      setTheme("dark")
    } else {
      window.localStorage.setItem("theme", "light")
      setTheme("light")
    }
  }

  React.useEffect(() => {
    const localTheme = window.localStorage.getItem("theme")
    localTheme && setTheme(localTheme)
  }, [])

  return [theme, toggleTheme]
}

export { useDarkMode }
