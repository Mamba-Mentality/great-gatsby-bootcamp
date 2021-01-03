import React from "react"
import { graphql } from "gatsby"
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from '@contentful/rich-text-types';
import { renderRichText } from "gatsby-source-contentful/rich-text";
import Layout from "../components/layout"

// export const query = graphql`
//   query ($slug: String!) {
//     markdownRemark (fields: {slug: { eq: $slug } }) {
//       frontmatter {
//         title
//         date
//       }
//       html
//     }
//   }
// `

export const query = graphql`
  query ($slug: String!) {
      contentfulBlogPost(slug: {eq: $slug}){
          title
          publishedDate(formatString: "MMMM Do, YYYY")
          body {
              raw
              references {
                  contentful_id
                  fixed(width: 1200) {
                      width
                      height
                      src
                      srcSet
                  }
              }
          }
      }
  }
`



const BlogTemp = (props) => {
  const richTextOptions = {
      renderNode: {
          [BLOCKS.EMBEDDED_ASSET]: (node) => {
              return (
                  <>
                      {JSON.stringify(node, null, 2)}
                  </>
              )
          }
      }
  }
  return (
    <Layout>
      {/*<h1>{props.data.markdownRemark.frontmatter.title}</h1>*/}
      {/*<p>{props.data.markdownRemark.frontmatter.date}</p>*/}
      {/*<div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}>*/}
      {/*</div>*/}
      {/*{documentToReactComponents(props.data.contentfulBlogPost.body)}*/}

      <h1>{props.data.contentfulBlogPost.title}</h1>
      <p>{props.data.contentfulBlogPost.publishedDate}</p>
      {renderRichText(props.data.contentfulBlogPost.body, richTextOptions)}
    </Layout>
  )
}

export default BlogTemp