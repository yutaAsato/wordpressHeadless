import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import SEO from "../components/seo"

function BlogPostTemplate({ data }) {
  return (
    <Layout>
      <SEO title={data.wpPost.title} description={data.wpPost.excerpt} />
      <h1>{data.wpPost.title}</h1>
      <p>
        Written by {data.wpPost.author.node.name} {data.wpPost.date}
      </p>
      <GatsbyImage
        image={
          data.wpPost.featuredImage.node.localFile.childImageSharp
            .gatsbyImageData
        }
        // alt={
        //   data.wpPost.featuredImage
        //     ? data.wpPost.featuredImage.node.author.node.name
        //     : null
        // }
      />
      <div dangerouslySetInnerHTML={{ __html: data.wpPost.content }} />
    </Layout>
  )
}

export default BlogPostTemplate

export const query = graphql`
  query($id: String) {
    wpPost(id: { eq: $id }) {
      title
      content
      date(fromNow: true)
      slug
      author {
        node {
          name
        }
      }
      excerpt
      featuredImage {
        node {
          localFile {
            childImageSharp {
              gatsbyImageData(
                width: 400
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
