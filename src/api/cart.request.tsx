import { ItemAddCart } from "@/types/property.types"
import axiosClient from "./config"

const BASE_URL = process.env.BACKEND_URL + 'cart-items'

class HandleCart {
  getCart = async () => {
    return axiosClient.get(BASE_URL)
  }
  addToCart = async (data: ItemAddCart) => {
    return axiosClient.post(BASE_URL, data)
  }
  deleteItems = async (data: string) => {
    return axiosClient.delete(BASE_URL + "/" + data);
  }
  updateItem = async (data) => {
    return axiosClient.put(BASE_URL + `/${data.cartItemId}`, {
      productId: data.productId,
      quantity: data.quantity
    });
  }
}

const handleCart = new HandleCart()

export default handleCart
