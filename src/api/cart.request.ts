import { ItemAddCart } from "@/types/property.types"
import axiosClient from "./config"
const cartUrl = "cart-items"
// let idUser = JSON.parse(localStorage.getItem('haui-megatech-user-infor')).id;
class HandleCart {
  getCart = async () => {
    return axiosClient.get(cartUrl)
  }
  addToCart = async (data: ItemAddCart) => {
    console.log(data.quantity);
    return axiosClient.post(`products/${data.productId}/cart-items`, { quantity:   data.quantity })
  }
  deleteItems = async (data: string) => {
    return axiosClient.delete(`cart-items/${data}`);
  }
  updateItem = async (data) => {
    return axiosClient.put(`products/${data.productId}/cart-items/${data.cartItemId}`, {
      quantity: data.quantity
    });
  }
}

const handleCart = new HandleCart()

export default handleCart
