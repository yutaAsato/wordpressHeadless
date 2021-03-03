// Toggle.js
import React from "react"
import { func, string } from "prop-types"
import { Global, css, ThemeProvider, useTheme } from "@emotion/react"
import styled from "@emotion/styled"
// Import a couple of SVG files we'll use in the design: https://www.flaticon.com
import MoonIcon from "../../images/moon.svg"
import SunIcon from "../../images/sun.svg"
import { lightTheme } from "../../utils/emotionTheme"

//styled
import { ToggleContainer } from "../../utils/emotionLib"

//=============================================================

function Toggle({ theme, toggleTheme }) {
  console.log(theme)

  const isLight = theme === "light"
  return (
    <ToggleContainer onClick={toggleTheme} lightTheme={isLight}>
      <SunIcon />
      <MoonIcon />
    </ToggleContainer>
  )
}

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}

export default Toggle
