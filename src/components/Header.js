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
      {total ? total : (<p>Your cart is empty</p>)}
    </a>
  </header>
)

Header.propTypes = {
  onClickSetPageView: PropTypes.func,
  total: PropTypes.string
}

export default Header
