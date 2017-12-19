import React from 'react'
import PropTypes from 'prop-types'

const Product = ({ price, inventory, title, id, quantity, onAddToCartClicked, onRemoveFromCartClick, onAddQtyClick, onRemoveQtyClick }) => {

  return (<div className="product-details">
    <img src={`assets/product_${id}.png`} alt={title} />
    <div className="details">
      <div>
        <span className="title">{title}</span>
        <span className="price">&#36;{price}</span>
      </div>

      <div className="inventory">{inventory ? `${inventory} remaining` : null}</div>

      {onAddToCartClicked &&
        <button
          className="button"
          onClick={onAddToCartClicked}
          disabled={inventory > 0 ? '' : 'disabled'}>
          {inventory > 0 ? 'Add to cart' : 'Sold Out'}
        </button>
      }
      
      {onRemoveFromCartClick &&
        <span onClick={onRemoveFromCartClick} className="remove">remove</span>
      }
    </div>

    {onRemoveQtyClick &&
      <div className="buttons-container">
        <button
          className="button minus"
          onClick={onRemoveQtyClick}
          disabled={quantity > 1 ? '' : 'disabled'}>
          -
        </button>
        <input className="qty-input" type="text" value={quantity} disabled />
        <button
          className="button plus"
          onClick={onAddQtyClick}
          disabled={inventory > 0 ? '' : 'disabled'}>
          +
        </button>
      </div>
    }
  </div>)
}

Product.propTypes = {
  price: PropTypes.number,
  inventory: PropTypes.number,
  title: PropTypes.string,
  id: PropTypes.number.isRequired,
  quantity: PropTypes.number,
  onAddToCartClicked: PropTypes.func,
  onRemoveFromCartClick: PropTypes.func,
  onAddQtyClick: PropTypes.func,
  onRemoveQtyClick: PropTypes.func
}

export default Product
