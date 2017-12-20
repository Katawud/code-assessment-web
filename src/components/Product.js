import React from 'react'
import PropTypes from 'prop-types'

const Product = (props) => {
  const {
    price, 
    inventory, 
    productTitle, 
    id, 
    quantity,
  } = props.product

  return (<div className="product-details">
    
    <img src={`assets/product_${id}.png`} alt={productTitle} />
    <div className="details">
      <div>
        <span className="title">{productTitle}</span>
        <span className="price">&#36;{price.value}</span>
      </div>

      <div className="inventory">{inventory ? `${inventory} remaining` : null}</div>

      {props.onAddToCartClicked &&
        <button
          className="button"
          onClick={props.onAddToCartClicked}
          disabled={inventory > 0 ? '' : 'disabled'}>
          {inventory > 0 ? 'Add to cart' : 'Sold Out'}
        </button>
      }
      
      {props.onRemoveFromCartClick &&
        <span onClick={props.onRemoveFromCartClick} className="remove">remove</span>
      }
    </div>

    {props.onRemoveQtyClick &&
      <div className="buttons-container">
        <button
          className="button minus"
          onClick={props.onRemoveQtyClick}
          disabled={quantity > 1 ? '' : 'disabled'}>
          -
        </button>
        <input className="qty-input" type="text" value={quantity} disabled />
        <button
          className="button plus"
          onClick={props.onAddQtyClick}
          disabled={inventory > 0 ? '' : 'disabled'}>
          +
        </button>
      </div>
    }
  
  </div>)
}

Product.propTypes = {
 product: PropTypes.shape({
    productTitle: PropTypes.string.isRequired,
    price: PropTypes.shape({
      value: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired
    }),
    inventory: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired
  }).isRequired,
  onAddToCartClicked: PropTypes.func,
  onRemoveFromCartClick: PropTypes.func,
  onAddQtyClick: PropTypes.func,
  onRemoveQtyClick: PropTypes.func
}

export default Product
