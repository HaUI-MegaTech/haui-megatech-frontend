'use client'
import React, { useEffect } from 'react'
import styles from './styles.module.scss'
import ProductCardHorizontal from '@/components/product/product.card.horizontal'

const OrderHistory = () => {
  useEffect(() => {
    document.title = 'Lịch sử đặt hàng'
  })
  return (
    <div className={styles.container}>
      <div>Lịch sử đơn hàng</div>
      <div className={styles.products}>
        {/* <ProductCardHorizontal />
        <ProductCardHorizontal />
        <ProductCardHorizontal />
        <ProductCardHorizontal />
        <ProductCardHorizontal /> */}
      </div>
    </div>
  )
}

export default OrderHistory
