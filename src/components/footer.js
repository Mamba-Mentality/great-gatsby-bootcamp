import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import footerStyle from "./footer.module.scss"

const Footer = () => {
  const data = useStaticQuery(graphql`
      query MyQuery2 {
          site {
              siteMetadata {
                  author
              }
          }
      }
  `)
  return (
    <footer className={footerStyle.footer}>
      <p>Created by {data.site.siteMetadata.author}, ©2020</p>
    </footer>
  )
}

export default Footer