'use client'
import React, { useEffect } from 'react'
import styles from './styles.module.scss'
import Image from 'next/image'
import errorImage from '../../../public/images/error.gif'
import ListProduct from '@/components/app.products'

const OrderSuccess = () => {
  useEffect(() => {
    document.title = 'Lỗi đặt hàng'
  }, [])
  return (
    <>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image src={errorImage} alt="" className={styles.image} />
        </div>
        <div className={styles.description}>
          <div className={styles.title}>Đã có lỗi xảy ra!</div>
          <div className={styles.note}>Vui lòng thao tác lại hoặc liên hệ nhân viên để được hỗ trợ</div>
          <div className={styles.buttons}>
            <button>Xem thêm</button>
            <button>Giỏ hàng</button>
          </div>
        </div>
      </div>
      <div>
        <ListProduct />
      </div>
    </>
  )
}

export default OrderSuccess
