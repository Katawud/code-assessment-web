import React from 'react'
import { connect } from 'react-redux'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'
import { setPageView } from '../actions'

const App = ({page}) => (
  <div>
    <ProductsContainer page={page} />
    <CartContainer page={page} />
  </div>
)

const mapStateToProps = (state) => ({
  page: state.view.page
})

export default connect(
  mapStateToProps,
  { setPageView }
)(App)

