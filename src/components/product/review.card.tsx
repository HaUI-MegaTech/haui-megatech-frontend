import React from 'react'
import styles from '@/styles/review.card.module.scss'
import Image from 'next/image'
import { Rate, Tag } from 'antd'
import { CheckCircleOutlined } from '@ant-design/icons'

const ReviewCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.userContainer}>
        <Image className={styles.userAvatar} width={50} height={50} src="https://variety.com/wp-content/uploads/2021/04/Avatar.jpg?w=800" alt="" />
        <div className={styles.fullName}>
          Lương Lương Minh Anh
          <p className={styles.timeJoin}>Đã tham gia 5 năm</p>
        </div>
      </div>
      <div className={styles.reviewContainer}>
        <div className={styles.rate}>
          <Rate defaultValue={5} className={styles.rateDetail} />
          <span>  Cực kỳ hài lòng</span>
          <div>
            <Tag icon={<CheckCircleOutlined />} color='success'>Đã mua hàng</Tag>
          </div>
        </div>
        <div className={styles.reviewDescription}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, veniam temporibus adipisci soluta a voluptas harum dolor delectus odit ab nisi consectetur deserunt animi vitae rerum repellendus, ipsa commodi voluptatibus.
        </div>
        <div className={styles.productImages}>
          <Image className={styles.imageProd} width={100} height={100} src="https://variety.com/wp-content/uploads/2021/04/Avatar.jpg?w=800" alt="" />
          <Image className={styles.imageProd} width={100} height={100} src="https://variety.com/wp-content/uploads/2021/04/Avatar.jpg?w=800" alt="" />
          <Image className={styles.imageProd} width={100} height={100} src="https://variety.com/wp-content/uploads/2021/04/Avatar.jpg?w=800" alt="" />
          <Image className={styles.imageProd} width={100} height={100} src="https://variety.com/wp-content/uploads/2021/04/Avatar.jpg?w=800" alt="" />
          <Image className={styles.imageProd} width={100} height={100} src="https://variety.com/wp-content/uploads/2021/04/Avatar.jpg?w=800" alt="" />
        </div>
        <div className={styles.timeRate}>
          <i>Đánh giá vào 2 năm trước</i>
        </div>
      </div>
    </div>
  )
}

export default ReviewCard
