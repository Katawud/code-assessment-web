const TIMEOUT = 100

export default {
  getProducts: () => fetch('http://tech.work.co/shopping-cart/products.json').then(response => response.json()),
  buyProducts: (payload, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT)
}
