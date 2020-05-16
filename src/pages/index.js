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
            id
            description
          }
        }
      }
    }
  `)
  console.log(products)

  return (
    <Layout>
      <Layout>
        <Seo title="Home" />
        <div className="home-container">
          {/* <Separator title="Les dernières publications" /> */}
          <section className="last-publications">
            {products.map(({ node }, index) => (
              <Product {...node} isMainPublication={index === 0} />
            ))}
            test
          </section>
        </div>
      </Layout>
    </Layout>
  )
}

export default IndexPage
