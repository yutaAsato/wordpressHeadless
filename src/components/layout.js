import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./layout.css"

//emotions
import { Global, css, ThemeProvider, useTheme } from "@emotion/react"
import styled from "@emotion/styled"

import { lightTheme, darkTheme } from "../utils/emotionTheme"
import { GlobalWrapper } from "../utils/emotionLib"

//components
import Toggle from "./toggle/Toggle"

//hooks
import { useDarkMode } from "./hooks/useDarkMode"

//===============================================

//Layout
const Layout = ({ children }) => {
  //useDarkMode
  const [theme, toggleTheme] = useDarkMode()

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalWrapper>
        <Header theme={theme} toggleTheme={toggleTheme} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 1800,
            padding: `0 1.0875rem 1.45rem`,
          }}
        >
          <main>{children}</main>
          {/* <footer
            style={{
              position: "absolute",
              marginTop: `2rem`,
              marginBottom: 0,
            }}
          >
            FOOTER
          </footer> */}
        </div>
      </GlobalWrapper>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
