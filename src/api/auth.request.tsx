import axiosClient from "./config"

const BASE_URL = process.env.BACKEND_URL;
type FieldType = {
  id: string,
  firstName: string
  lastName: string
  avatar: string
  email: string
  phoneNumber: string
};
class HandleAuth {
  registerAccount = async (data: object) => {
    return axiosClient.post(BASE_URL + 'auth/register', data)
  }
  login = async (data: object) => {
    return axiosClient.post(BASE_URL + 'auth/authenticate', data)
  }
  forgotPassword = async (id: number) => {
    return axiosClient.patch(BASE_URL + `users/reset-password/${id}`)
  }
  updateUserInfor = async (user: FieldType) => {
    return axiosClient.put(BASE_URL + `users/update-info/1033`, user)
  }
}

const handleAuth = new HandleAuth()

export default handleAuth
