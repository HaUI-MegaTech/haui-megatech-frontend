import axiosClient from "./config"

const BASE_URL = "http://localhost:8080/api/v1/"
class HandleProducts {
  getProducts = async () => {
    return axiosClient.get(BASE_URL + 'products/active')
  }
  getProductById = async (id : string) => {
    return axiosClient.get(BASE_URL + `products/${id}`)
  }
  getListBrands = async () => {
    return axiosClient.get(BASE_URL + 'brands/active')
  }
  getProductsByBrandId = async (query: string) => {
    return axiosClient.get(BASE_URL + `products/active/${query}`)
  }
}

const handleProducts = new HandleProducts()

export default handleProducts
