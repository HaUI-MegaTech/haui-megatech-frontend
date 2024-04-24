import axiosClient from "./config"

const BASE_URL = "http://localhost:8080/api/v1/auth/"
class HandleAuth {
  registerAccount = async (data: object) => {
    return axiosClient.post(BASE_URL + 'register', data)
  }
  login = async (data: object) => {
    return axiosClient.post(BASE_URL + 'authenticate', data)
  }
  forgotPassword = async (url: string) => {
    return axiosClient.post(BASE_URL + url)
  }
}

const handleAuth = new HandleAuth()

export default handleAuth
