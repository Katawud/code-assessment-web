import React from 'react'
import PropTypes from 'prop-types'

const Product = ({ price, inventory, title, id, onAddToCartClicked }) => (
  <div className="product-details">
    <img src={`assets/product_${id}.png`} alt="title" />
    <div className="details">
      <div>
        <span className="title">{title}</span>
        <span className="price">&#36;{price}</span>
      </div>
      <div className="inventory">{inventory ? `${inventory} remaining` : null}</div>
      <button
        className="button"
        onClick={onAddToCartClicked}
        disabled={inventory > 0 ? '' : 'disabled'}>
        {inventory > 0 ? 'Add to cart' : 'Sold Out'}
      </button>
    </div>
  </div>
)

Product.propTypes = {
  price: PropTypes.number,
  inventory: PropTypes.number,
  title: PropTypes.string,
  id: PropTypes.number.isRequired,
  onAddToCartClicked: PropTypes.func.isRequired
}

export default Product
