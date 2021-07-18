import http from '../services/httpService';

const apiEndPoint = '/products';

function getProduct() {
  return http.get(apiEndPoint);
}

function addProduct(data) {
  return http.post(apiEndPoint, data);
}

function delProduct(productId) {
  return http.del(apiEndPoint + '/' + productId);
}

const productService = {
  getProduct,
  addProduct,
  delProduct,
}

export default productService; 