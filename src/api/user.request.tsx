import axiosClient from "./config"

const BASE_URL = process.env.BACKEND_URL;
console.log(BASE_URL);
class HandleProducts {
  getProducts = async () => {
    return axiosClient.get(BASE_URL + 'products/active')
  }
  getProductById = async (id: string) => {
    return axiosClient.get(BASE_URL + `products/${id}`)
  }
  getListBrands = async () => {
    return axiosClient.get(BASE_URL + 'brands/active')
  }
  getProductsByBrandId = async (id: string, query: string) => {
    if (query) return axiosClient.get(BASE_URL + `brands/${id}/products/active${query}`)
    else return axiosClient.get(BASE_URL + `brands/${id}/products/active`);
  }
  getProductsSearch = async (query: string) => {
    return axiosClient.get(BASE_URL + `products/active?${query}`)
  }
  getProductsFromOtherWebsites = async (query: string) => {
    return axiosClient.get(BASE_URL + `outer-search?compare=${query}`)
  }
}

const handleProducts = new HandleProducts()

export default handleProducts
