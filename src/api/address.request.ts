import axiosClient from "./config"

class HandleAddress {
  getAllProvinces = async () => {
    return axiosClient.get('provinces')
  }
  getAllDistrictsByProvinces = async (code : string) => {
    return axiosClient.get(`provinces/${parseInt(code)}/districts`)
  }
  getAllWardsByDistricts = async (codeProvince : string, codeDistrict : string) => {
    return axiosClient.get(`provinces/${parseInt(codeProvince)}/districts/${parseInt(codeDistrict)}/wards`)
  }
}

const handleAddress = new HandleAddress()

export default handleAddress
