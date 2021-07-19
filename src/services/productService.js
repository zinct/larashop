import http from '../services/httpService';

const apiEndPoint = '/products';

function getProduct() {
  return http.get(apiEndPoint);
}

function addProduct(data) {
  return http.post(apiEndPoint, data);
}

function editProduct(productId, data) {
  return http.put(apiEndPoint + '/' + productId, data);
}

function delProduct(productId) {
  return http.del(apiEndPoint + '/' + productId);
}

const productService = {
  getProduct,
  addProduct,
  editProduct,
  delProduct,
}

export default productService; 