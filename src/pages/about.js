import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout/layout"
import Seo from "../components/seo/seo"
import "./about.scss"

const About = () => {
  const {
    markdownRemark: { html },
  } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { title: { eq: "Presentation" } }) {
        html
      }
    }
  `)
  return (
    <Layout>
      <Seo title="Qui sommes nous" />
      <div
        className="presentation"
        dangerouslySetInnerHTML={{ __html: html }}
      ></div>
    </Layout>
  )
}

export default About
