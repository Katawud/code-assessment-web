import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addToCart, setPageView } from '../actions'
import { getVisibleProducts } from '../reducers/products'
import { getTotal } from '../reducers'
import ProductItem from '../components/ProductItem'
import ProductsList from '../components/ProductsList'
import Header from '../components/Header'

const ProductsContainer = ({ products, addToCart, page, setPageView, total }) => {
  return page === 'products' ? (
    <div className="products-container">
      <Header 
        onClickSetPageView={setPageView}
        total={total}
      />
      <ProductsList>
        {products.map(product =>
          <ProductItem
            key={product.id}
            product={product}
            onAddToCartClicked={() => addToCart(product.id)} />
        )}
      </ProductsList>
    </div>
  ) : null
}

ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    productTitle: PropTypes.string.isRequired,
    price: PropTypes.shape({
      value: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired
    }),
    inventory: PropTypes.number.isRequired
  })).isRequired,
  addToCart: PropTypes.func.isRequired,
  page: PropTypes.string.isRequired,
  setPageView: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  products: getVisibleProducts(state.products),
  total: getTotal(state)
})

export default connect(
  mapStateToProps,
  { addToCart, setPageView }
)(ProductsContainer)
