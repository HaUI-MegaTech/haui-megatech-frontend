'use client'
import handleFeedback from '@/api/feedback.request'
import ReviewCard from '@/components/product/review.card'
import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'

const ReviewHistory = () => {
  const [listReview, setListReview] = useState([]);
  const handleGetReviews = async () => {
    try {
      const user = localStorage.getItem('haui-megatech-user-infor') && JSON.parse(localStorage.getItem('haui-megatech-user-infor'));
      const userId = user.id;
      const res = await handleFeedback.getFeedbackByUserId(userId);
      if (res) {
        console.log(res);
        setListReview(res.data)
      }
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    handleGetReviews();
  }, [])
  return (
    <div className={styles.container}>
      <h1>Lịch sử đánh giá của bạn</h1>
      <div>
        {
          listReview?.map?.(item => <ReviewCard feedback={item}/>)
        }
      </div>
    </div>
  )
}

export default ReviewHistory
