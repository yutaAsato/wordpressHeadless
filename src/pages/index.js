import React from "react"
import { graphql, Link } from "gatsby"

//wordpressBlockStyles
import "@wordpress/block-library/build-style/style.css"

//emotions
import { Global, css, ThemeProvider, useTheme } from "@emotion/react"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import SEO from "../components/seo"

//components
import { HomePage } from "../components/homePage/HomePage"

//=====================================================

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <HomePage />
    </Layout>
  )
}

export default IndexPage
