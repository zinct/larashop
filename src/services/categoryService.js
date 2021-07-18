import httpService from "./httpService";

const apiEndPoint = '/categories';

function getCategory() {
  return httpService.get(apiEndPoint);
}

const categoryService = {
  getCategory,
}

export default categoryService;