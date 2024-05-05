import axiosClient from "./config"

const BASE_URL = "https://vn-public-apis.fpo.vn/"
class HandleAddress {
  getAllProvinces = async () => {
    return axiosClient.post(BASE_URL + 'provinces/getAll?limit=-1')
  }
  getAllDistrictsByProvinces = async (code : number) => {
    return axiosClient.post(BASE_URL + `districts/getByProvince?provinceCode=${code}&limit=-1`)
  }
  getAllWardsByDistricts = async (code : number) => {
    return axiosClient.post(BASE_URL + `wards/getByDistrict?districtCode=${code}&limit=-1`)
  }
}

const handleAddress = new HandleAddress()

export default handleAddress
