import React from 'react'
import styles from './styles.module.scss'
import ProductCardHorizontal from '@/components/product/product.card.horizontal'

const OrderHistory = () => {
  return (
    <div className={styles.container}>
      <div>Lịch sử đơn hàng</div>
      <div>
        <ProductCardHorizontal />
        <ProductCardHorizontal />
        <ProductCardHorizontal />
        <ProductCardHorizontal />
        <ProductCardHorizontal />
      </div>
    </div>
  )
}

export default OrderHistory
