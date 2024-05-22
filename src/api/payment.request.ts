import axiosClient from "./config"

class HandlePayment {
  createPayment = async (data) => {
    return axiosClient.post(`create-payment?ids=${data}`);
  }
  callbackPayment = async () => {
    return axiosClient.get('callback-payment');
  }
}

const handlePayment = new HandlePayment()

export default handlePayment
