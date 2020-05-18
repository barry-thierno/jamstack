import React from "react"
import { useStaticQuery } from "gatsby"
import Layout from "../components/layout/layout"
import Seo from "../components/seo/seo"

import "./index.scss"
import Product from "../components/product/product"

const IndexPage = () => {
  const {
    allContentfulProduct: { edges: products },
  } = useStaticQuery(graphql`
    query MyQuery {
      allContentfulProduct {
        edges {
          node {
            price
            title
            quantity
            createdAt(formatString: "DD MMMM YYYY", locale: "fr")
            id
            description
            image {
              fixed(width: 400, height: 400) {
                width
                height
                src
              }
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Seo title="Home" />
      <div className="home-container">
        <section className="products">
          {products.map(({ node }, index) => (
            <Product {...node} isMainPublication={index === 0} />
          ))}
        </section>
      </div>
    </Layout>
  )
}

export default IndexPage
