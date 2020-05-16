import React from "react"
import { Link } from "gatsby"
import "./product.scss"

const Product = props => {
  const {
    price,
    title,
    quantity,
    createdAt,
    id,
    description,
    isMainPublication,
    // image: {
    //   fixed: { src },
    // },
  } = props
  return (
    <Link
      style={{
        backgroundImage: `url(${"src"})`,
        backgroundSize: "cover",
      }}
      className={`publication-post ${isMainPublication ? "main-article" : ""} `}
      to={`/post/${id}`}
    >
      {/* <div
        className={`post-type post-type${
          publicationType === PublicationType.TRIBUNE
            ? "--tribune"
            : "--publication"
        }`}
      >
        {publicationType}
      </div> */}
      <div className="publication-details">
        <h2>{title}</h2>
        <div className="publication-infos">
          <div className="publication-category">{description}</div>
          <div className="publication-date">
            <span className="material-icons">access_time</span>
            <span>{createdAt}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Product
