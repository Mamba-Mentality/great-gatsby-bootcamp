import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery, Link } from "gatsby"

import blogStyles from './blog.module.scss'

const BlogPage = () => {
  const data = useStaticQuery(graphql`
      query MyQuery3 {
          allContentfulBlogPost (
              sort: {
                  fields: publishedDate,
                  order: DESC
              }
          ) {
              edges {
                  node {
                      title
                      slug
                      publishedDate(formatString: "MMMM Do, YYYY")
                  }
              }
          }
      }
  `)

  return (
    <Layout>
      <h1>Blog</h1>
      <h2>Subscribe to our blog for the most up to date content.</h2>
      <div>
        <ol className={blogStyles.posts}>
          {data.allContentfulBlogPost.edges.map((edges, index) => {
            return (
              <li key={index} className={blogStyles.post}>
                <Link to={`/blog/${edges.node.slug}`}>
                  <h2>{edges.node.title}</h2>
                  <p>{edges.node.publishedDate}</p>
                </Link>
              </li>
            )
          })}
        </ol>
      </div>
    </Layout>
  )
}

export default BlogPage