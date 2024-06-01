import axiosClient from "./config"

class HandleProducts {
  getProducts = async () => {
    return axiosClient.get('products/active')
  }
  getProductById = async (id: string) => {
    return axiosClient.get(`products/${id}`)
  }
  getListBrands = async () => {
    return axiosClient.get('brands/active')
  }
  getActiveProducts = async (query: string, request: object) => {
    if (query) {
      console.log('request', request, query);
      return axiosClient.get(`products/active?${query}`, {
        params: request
      })
    }
  }
  getProductsSearch = async (query: string) => {
    return axiosClient.get(`products/active?${query}`)
  }
  getProductsFromOtherWebsites = async (query: string) => {
    return axiosClient.get(`outer-search?compare=${query}`)
  }
  addNewAddress = async (userId: number) => {
    return axiosClient.post(`users/${userId}/addresses`)
  }
  getListAddress = async (userId: number) => {
    return axiosClient.get(`users/${userId}/addresses`)
  }
  updateUserAddress = async (userId: number, addressId: number) => {
    return axiosClient.put(`users/${userId}/addresses/${addressId}`)
  }
  deleteUserAddress = async (userId: number, addressId: number) => {
    return axiosClient.delete(`users/${userId}/addresses/${addressId}`)
  }
}

const handleProducts = new HandleProducts()

export default handleProducts
