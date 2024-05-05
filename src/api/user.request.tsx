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
  getProductsByBrandId = async (id:string, query: string) => {
    return axiosClient.get(BASE_URL + `brands/${id}/products/active${query}`)
  }
  getProductsSearch = async (query: string) => {
    return axiosClient.get(BASE_URL + `products/active?${query}`)
  }
  getProductsFromOtherWebsites = async (query: string) => {
    return axiosClient.get(`http://localhost:8080/search?keyword=${query}`)
  }
}

const handleProducts = new HandleProducts()

export default handleProducts
