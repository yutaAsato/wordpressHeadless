import React from "react"
import { graphql, Link } from "gatsby"

//emotions
import { Global, css, ThemeProvider, useTheme } from "@emotion/react"
import styled from "@emotion/styled"

import Layout from "../components/layout"
// import Image from "../components/image"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import SEO from "../components/seo"

//=====================================================

const Blogs = ({ data }) => {
  return (
    <Layout>
      <SEO title="Blogs" />
      <ul style={{ listStyle: "none" }}>
        {data.allWpPost.edges.map(post => (
          <li style={{ padding: "20px 0", borderBottom: "1px solid #CCC" }}>
            <Link
              to={`/post/${post.node.slug}`}
              css={props => ({
                display: "flex",
                color: props.text,
                textDecoration: "none",
              })}
            >
              <GatsbyImage
                imgStyle={{ paddingRight: "10px" }}
                image={
                  post.node.featuredImage.node.localFile.childImageSharp
                    .gatsbyImageData
                }
              />
              <div style={{ width: "75%" }}>
                <h3
                  style={{ marginBottom: 0 }}
                  dangerouslySetInnerHTML={{ __html: post.node.title }}
                />
                <p style={{ margin: 0, color: "grey" }}>
                  Written by {post.node.author.node.name} {post.node.date}
                </p>
                <div dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default Blogs

//=================================================

export const query = graphql`
  query {
    allWpPost {
      edges {
        node {
          title
          content
          excerpt
          slug
          author {
            node {
              name
            }
          }
          date(fromNow: true)
          featuredImage {
            node {
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    width: 200
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
              slug
            }
          }
        }
      }
    }
  }
`
