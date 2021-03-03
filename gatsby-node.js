/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")
const createFilePath = require("gatsby-source-filesystem")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const BlogPostTemplate = path.resolve("./src/templates/BlogPosts.js")
  const PageTemplate = path.resolve("./src/templates/Pages.js")

  return graphql(`
    query MyQuery {
      allWpPost {
        edges {
          node {
            title
            content
            slug
            id
            date(fromNow: true)
            featuredImage {
              node {
                localFile {
                  childrenImageSharp {
                    fluid {
                      srcWebp
                    }
                  }
                }
              }
            }
          }
        }
      }
      allWpPage {
        edges {
          node {
            title
            content
            slug
            id
            date(fromNow: true)
            featuredImage {
              node {
                localFile {
                  childrenImageSharp {
                    fluid {
                      srcWebp
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    const BlogPost = result.data.allWpPost.edges
    BlogPost.forEach(post => {
      createPage({
        path: `/post/${post.node.slug}`,
        component: BlogPostTemplate,
        context: {
          id: post.node.id,
        },
      })
    })

    const Pages = result.data.allWpPage.edges
    Pages.forEach(page => {
      createPage({
        path: `${page.node.slug}`,
        component: PageTemplate,
        context: {
          id: page.node.id,
        },
      })
    })
  })
}
