const cart = [];

function add(item) {
  localStorage.setItem('cart', JSON.stringify(cart));
  cart.push(item);
}

function get() {
  // const result = localStorage.getItem('cart');
  // return JSON.parse(result);
  return cart;
}

const cartService = {
  add,
  get,
}

export default cartService;