import shop from '../api/shop'
import * as types from '../constants/ActionTypes'

const receiveProducts = products => ({
  type: types.RECEIVE_PRODUCTS,
  products: products
})

export const getAllProducts = () => dispatch => {
  shop.getProducts(products => {
    dispatch(receiveProducts(products))
  })
}

const addToCartUnsafe = productId => ({
  type: types.ADD_TO_CART,
  productId
})

const removeItemFromCart = (product, inventory) => ({
  type: types.REMOVE_ITEM,
  inventory: inventory,
  productId: product.id
})

const removeCartItem = productId => ({
  type: types.REMOVE_QTY,
  productId
})

export const removeQty = productId => (dispatch, getState) => {
  if (getState().cart.quantityById[productId] > 0) {
    dispatch(removeCartItem(productId))
  }
}

export const removeItem = productId => (dispatch, getState) => {
  const product = getState().products.byId[productId]
  const inventory = getState().cart.quantityById[productId];

  if (product) {
    dispatch(removeItemFromCart(product, inventory))
  }
}

export const addToCart = productId => (dispatch, getState) => {
  if (getState().products.byId[productId].inventory > 0) {
    dispatch(addToCartUnsafe(productId))
  }
}

const pageView = view => ({
  type: types.PAGE_VIEW,
  view
})

export const setPageView = page => (dispatch) => {
  dispatch(pageView(page))
}

export const checkout = products => (dispatch, getState) => {
  const { cart } = getState()

  dispatch({
    type: types.CHECKOUT_REQUEST
  })
  shop.buyProducts(products, () => {
    dispatch({
      type: types.CHECKOUT_SUCCESS,
      cart
    })
    // Replace the line above with line below to rollback on failure:
    // dispatch({ type: types.CHECKOUT_FAILURE, cart })
  })
}
