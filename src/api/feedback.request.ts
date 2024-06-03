import axiosClient from "./config"

class HandleFeedback {
  getFeedbackByProductId = async (id: number) => {
    return axiosClient.get(`products/${id}/feedbacks`)
  }
  getFeedbackByUserId = async (id: number) => {
    return axiosClient.get(`users/${id}/feedbacks`)
  }
  postFeedBack = async (id: number) => {
    return axiosClient.get(`products/${id}/feedback`)
  }
  putFeedback = async (productId: number, feedbackId: number) => {
    return axiosClient.get(`products/${productId}/feedbacks/${feedbackId}`)
  }
} 

const handleFeedback = new HandleFeedback()

export default handleFeedback
