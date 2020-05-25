import React from "react"
import PropTypes from "prop-types"
import "./product.scss"

const Product = props => {
  const {
    price,
    quantity,
    createdAt,
    description,
    isMainPublication,
    image: {
      fixed: { src },
    },
  } = props
  return (
    <div
      style={{
        backgroundImage: `url(${src})`,
        backgroundSize: "cover",
      }}
      className={`product-post ${isMainPublication ? "main-article" : ""} `}
    >
      <div className="product-details">
        <h2>{description}</h2>
        <div className="product-infos">
          <div className="product-wrapper">
            <div className="price">{price}€</div>
            <div className="quantity">Stock: {quantity}kg</div>
          </div>
          <div className="product-date">
            <span className="material-icons">access_time</span>
            <span>{createdAt}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

Product.propTypes = {
  price: PropTypes.number,
  quantity: PropTypes.number,
  createdAt: PropTypes.string,
  id: PropTypes.string,
  description: PropTypes.string,
  isMainPublication: PropTypes.bool,
}

Product.defaultProps = {
  siteTitle: ``,
  price: 0,
  quantity: 0,
  createdAt: ``,
  id: ``,
  description: ``,
}

export default Product
