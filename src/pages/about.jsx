import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"

const About = () => {
  const {
    markdownRemark: { html },
  } = useStaticQuery(graphql`
    query {
      markdownRemark {
        html
      }
    }
  `)
  return (
    <Layout>
      <Seo title="Qui suis je"></Seo>
      <div
        className="presentation"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Layout>
  )
}

export default About
