import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import SEO from "../components/seo"

function PageTemplate({ data }) {
  console.log(data)

  return (
    <Layout>
      <SEO title={data.wpPage.title} description={data.wpPage.excerpt} />
      <h1>{data.wpPage.title}</h1>

      <div dangerouslySetInnerHTML={{ __html: data.wpPage.content }} />
    </Layout>
  )
}

export default PageTemplate

export const query = graphql`
  query($id: String) {
    wpPage(id: { eq: $id }) {
      title
      content
      date(fromNow: true)
      slug
      author {
        node {
          name
        }
      }
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
          author {
            node {
              name
            }
          }
        }
      }
    }
  }
`
