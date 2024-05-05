import axiosClient from "./config"

const BASE_URL = "web-staging.ghtklab.com/api/v1/public/address/list"
class HandleAddress {
  getAllProvinces = async () => {
    return axiosClient.post(BASE_URL)
  }
  getAllDistrictsByProvinces = async (code : number) => {
    return axiosClient.post(BASE_URL + `?parentId=${code}&type=3`)
  }
  getAllWardsByDistricts = async (code : number) => {
    return axiosClient.post(BASE_URL + `parentId=${code}&type=1`)
  }
  
}

const handleAddress = new HandleAddress()

export default handleAddress
