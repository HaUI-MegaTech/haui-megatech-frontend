import axiosClient from "./config"

class HandlePayment {
  createPayment = async (data: string) => {
    return axiosClient.get(`create-payment?ids=${data}&addressId=28`);
  }
  callbackPayment = async () => {
    return axiosClient.get('callback-payment');
  }
}

const handlePayment = new HandlePayment()

export default handlePayment
