import axiosClient from "./config"

class HandleAddress {
  getAllProvinces = async () => {
    return axiosClient.get('provinces')
  }
  getAllDistrictsByProvinces = async (code : number) => {
    return axiosClient.get(`provinces/${code}/districts`)
  }
  getAllWardsByDistricts = async (codeProvince : number, codeDistrict : number) => {
    return axiosClient.get(`provinces/${codeProvince}/districts/${codeDistrict}/wards`)
  }
}

const handleAddress = new HandleAddress()

export default handleAddress
