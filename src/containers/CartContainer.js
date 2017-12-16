import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { checkout, setPageView } from '../actions'
import { getTotal, getCartProducts } from '../reducers'
import Cart from '../components/Cart'

const CartContainer = ({ products, total, checkout, page, setPageView }) => {
  return page === 'cart' ? (
    <Cart
      products={products}
      total={total}
      onCheckoutClicked={() => checkout(products)} 
      onClickSetPageView={() => setPageView('products')}
    />
  ) : null
}

CartContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired
  })).isRequired,
  total: PropTypes.string,
  checkout: PropTypes.func.isRequired,
  page: PropTypes.string.isRequired,
  setPageView: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  products: getCartProducts(state),
  total: getTotal(state)
})

export default connect(
  mapStateToProps,
  { checkout, setPageView }
)(CartContainer)
