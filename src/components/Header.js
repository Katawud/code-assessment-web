import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ onClickSetPageView, total }) => (
  <header>
    <h2>Acme Store</h2>
    <a href="" onClick={(e) => {
      e.preventDefault()
      onClickSetPageView('cart')
    }}>
      <img className="cart-icon" src="assets/cartIcon.svg" alt="View Cart" />
      {parseInt(total) > 0 ? <span>&#160;&#36;{total}</span> : (<p>Your cart is empty</p>)}
    </a>
  </header>
)

Header.propTypes = {
  onClickSetPageView: PropTypes.func,
  total: PropTypes.string
}

export default Header
