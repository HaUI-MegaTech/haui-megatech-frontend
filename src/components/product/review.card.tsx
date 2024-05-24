import React from 'react'
import styles from '@/styles/review.card.module.scss'
import Image from 'next/image'
import { Rate, Tag } from 'antd'
import { CheckCircleOutlined } from '@ant-design/icons'
import { Feedback } from '@/types/property.types'
type Props = {
  feedback: Feedback
}
const ReviewCard = ({ feedback }: Props) => {
  const showTypeFeedBack = () => {
    switch (feedback?.rating) {
      case 5:
        return <span>  Cực kỳ hài lòng</span>
      case 4:
        return <span>  Hài lòng</span>
      case 3:
        return <span>  Bình thường</span>
      case 2:
        return <span>  Không hài lòng</span>
      case 1:
        return <span>  Cực kỳ không hài lòng</span>
      default:
        return <span>  Không có dữ liệu</span>
    }
  }
  return (
    <div className={styles.container}>
      <div className={styles.userContainer}>
        <Image className={styles.userAvatar} width={50} height={50} src="https://variety.com/wp-content/uploads/2021/04/Avatar.jpg?w=800" alt="" />
        <div className={styles.fullName}>
          {feedback?.alias}
          <p className={styles.timeJoin}>Đã tham gia 5 năm</p>
        </div>
      </div>
      <div className={styles.reviewContainer}>
        <div className={styles.rate}>
          <Rate disabled
            value={Number(feedback?.rating.toFixed(1))}
            className={styles.rateDetail} />
          {showTypeFeedBack()}
          <div>
            <Tag icon={<CheckCircleOutlined />} color='success'>Đã mua hàng</Tag>
          </div>
        </div>
        <div className={styles.reviewDescription}>
          {feedback?.content}
        </div>
        <div className={styles.timeRate}>
          <i>Đánh giá vào 2 năm trước</i>
        </div>
      </div>
    </div>
  )
}

export default ReviewCard
