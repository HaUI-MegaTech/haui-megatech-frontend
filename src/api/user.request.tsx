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
  getActiveProducts = async (query: string) => {
    if (query) return axiosClient.get(`products/active?${query}`)
    else return axiosClient.get(`brands/${id}/products/active`);
  }
  getProductsSearch = async (query: string) => {
    return axiosClient.get(`products/active?${query}`)
  }
  getProductsFromOtherWebsites = async (query: string) => {
    return axiosClient.get(`outer-search?compare=${query}`)
  }
}

const handleProducts = new HandleProducts()

export default handleProducts
