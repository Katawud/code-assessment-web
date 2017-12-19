import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'

const Cart  = ({ products, total, onCheckoutClicked, onClickSetPageView, onRemoveFromCartClick, onAddQtyClick, onRemoveQtyClick}) => {
  const hasProducts = products.length > 0
  const nodes = hasProducts ? (
    products.map(product =>
      <Product
        title={product.title}
        price={product.price}
        quantity={product.quantity}
        key={product.id}
        id={product.id}
        inventory={product.inventory}
        onRemoveFromCartClick={() => onRemoveFromCartClick(product.id)}
        onAddQtyClick={() => onAddQtyClick(product.id)}
        onRemoveQtyClick={() => onRemoveQtyClick(product.id)}
      />
    )
  ) : (
    <div className="cart-empty">
      <img src="assets/cartIcon.svg" alt="close" />
      <p>Please add some products <br /> to your cart.</p>
    </div>
  )

  return (
    <div className="cart">
      <span onClick={onClickSetPageView} className="close-btn-x">
        <img src="assets/closeBtn.svg" alt="close" />
      </span>
      <h3>Your cart</h3>
      <div>{nodes}</div>
      {hasProducts &&
        <div>
          <div className="total"><span>Total:</span> &#36;{total}</div>
          <button className="button" onClick={onCheckoutClicked}
            disabled={hasProducts ? '' : 'disabled'}>
            Checkout
          </button>
        </div>
      }
    </div>
  )
}

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func,
  onClickSetPageView: PropTypes.func,
  onRemoveFromCartClick: PropTypes.func,
  onAddQtyClick: PropTypes.func,
  onRemoveQtyClick: PropTypes.func
}

export default Cart
