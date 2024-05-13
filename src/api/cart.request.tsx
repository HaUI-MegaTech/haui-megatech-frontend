import { ItemAddCart } from "@/types/property.types"
import axiosClient from "./config"
import axios from "axios";
const cartUrl = "cart-items"
let idUser = JSON.parse(localStorage.getItem('haui-megatech-user-infor')).id;
class HandleCart {
  getCart = async () => {
    return axiosClient.get(cartUrl)
  }
  addToCart = async (data: ItemAddCart) => {
    return axiosClient.post("cart-items", data)
  }
  deleteItems = async (data: string) => {
    return axiosClient.delete(`cart-items/${data}`);
  }
  updateItem = async (data) => {
    return axiosClient.put(`cart-items/${data.cartItemId}`, {
      productId: data.productId,
      quantity: data.quantity
    });
  }
}

const handleCart = new HandleCart()

export default handleCart
