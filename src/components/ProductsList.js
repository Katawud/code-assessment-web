import React from 'react'
import PropTypes from 'prop-types'

const ProductsList = ({ children }) => (
  <div className="product-list-container">
    <div>{children}</div>
  </div>
)

ProductsList.propTypes = {
  children: PropTypes.node
}

export default ProductsList
