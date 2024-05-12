import { ItemAddCart } from "@/types/property.types"
import axiosClient from "./config"

class HandleCart {
  getCart = async () => {
    return axiosClient.get()
  }
  addToCart = async (data: ItemAddCart) => {
    return axiosClient.post(data)
  }
  deleteItems = async (data: string) => {
    return axiosClient.delete("/" + data);
  }
  updateItem = async (data) => {
    return axiosClient.put(`/${data.cartItemId}`, {
      productId: data.productId,
      quantity: data.quantity
    });
  }
}

const handleCart = new HandleCart()

export default handleCart
