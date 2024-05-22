import { OrderBody } from "@/types/property.types"
import axiosClient from "./config"

class HandleOrder {
  placeOrder = async (data: OrderBody) => {
    return axiosClient.post('order', data);
  }
}

const handleOrder = new HandleOrder()

export default handleOrder
