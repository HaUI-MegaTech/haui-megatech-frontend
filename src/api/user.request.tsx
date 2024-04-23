import axiosClient from "./config"

const BASE_URL = "http://localhost:8080/api/v1/"
class HandleProducts {
  getProducts = async () => {
    return axiosClient.get(BASE_URL + 'products')
  }
}

const handleProducts = new HandleProducts()

export default handleProducts
