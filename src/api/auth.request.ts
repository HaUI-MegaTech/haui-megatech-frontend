import axiosClient from "./config"

type FieldType = {
  id?: string,
  firstName?: string
  lastName?: string
  avatar?: string
  email?: string
  phoneNumber?: string
};
// const users = localStorage.getItem('haui-megatech-user-infor') ? JSON.parse(localStorage.getItem('haui-megatech-user-infor')) : {};

class HandleAuth {
  registerAccount = async (data: object) => {
    return axiosClient.post('auth/register', data)
  }
  login = async (data: object) => {
    return axiosClient.post('auth/authenticate', data)
  }
  forgotPassword = async (id: number) => {
    return axiosClient.patch(`users/reset-password/${id}`)
  }
  updateUserInfor = async (user: FieldType, userId: number) => {
    return axiosClient.put(`users/update-info/${userId}`, user)
  }
}

const handleAuth = new HandleAuth()

export default handleAuth
