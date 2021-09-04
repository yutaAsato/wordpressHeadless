/** @jsx jsx */

//emotions
import { jsx, Global, css, ThemeProvider, useTheme } from "@emotion/react"
import styled from "@emotion/styled"

import { graphql, StaticQuery, Link, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

//framer-motion
import { animate, motion } from "framer-motion"

//framerAnimations
import { stagger } from "../utils/framerAnimations"

//components
import Toggle from "./toggle/Toggle"

//styled
import { CustomLink, Logo, ToggleContainer } from "../utils/emotionLib"

//=============================================

const Header = ({ theme, toggleTheme }) => {
  //useStaticQuery
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      wp {
        generalSettings {
          title
          description
        }
      }
      allWpMenu(filter: { name: { eq: "HEADER NAV" } }) {
        nodes {
          id
          name
          menuItems {
            nodes {
              id
              label
              url
            }
          }
        }
      }
    }
  `)

  //-----------------------------------------

  return (
    <header
      css={props => ({
        maxHeight: "120px",
        width: "100%",
      })}
    >
      <motion.div
        initial="initial"
        animate="animate"
        style={{
          margin: `0 auto`,
          maxWidth: `1800px`,
          padding: `1.45rem 1.0875rem`,
          display: "grid",
          gridTemplateColumns: "2fr 2fr 1fr",
        }}
      >
        <motion.div>
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.9, ease: "easeInOut" }}
            style={{
              margin: 0,
              marginBottom: 0,
              fontSize: "1.1rem",
            }}
          >
            <Logo
              to="/"
              style={{
                textDecoration: `none`,
              }}
            >
              {data.wp.generalSettings.title}
            </Logo>
          </motion.h1>
          <motion.h3
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.9, ease: "easeInOut" }}
            style={{
              fontSize: "0.6rem",
              margin: "5px 0 5px 0",
            }}
          >
            {data.wp.generalSettings.description.toUpperCase()}
          </motion.h3>
        </motion.div>

        <div css={{ justifySelf: "end" }}>
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3.9, ease: "easeInOut" }}
            style={{
              listStyle: "none",
              display: "flex",
              margin: 0,
            }}
          >
            <motion.li style={{ margin: "0 10px" }}>
              <CustomLink to={`/blogs`}>Blogs</CustomLink>
            </motion.li>
            {data.allWpMenu.nodes[0].menuItems.nodes.map(item => (
              <motion.li key={item.id} style={{ margin: "0 10px" }}>
                <CustomLink to={`${item.url}`}>{item.label}</CustomLink>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <div css={{ justifySelf: "end" }}>
          <Toggle theme={theme} toggleTheme={toggleTheme} />
        </div>
      </motion.div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
