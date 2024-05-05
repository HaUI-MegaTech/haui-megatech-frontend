import axiosClient from "./config"

const BASE_URL = "http://localhost:8080/api/v1/"
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
    return axiosClient.get(BASE_URL + `brands/${id}/products/active`)
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
