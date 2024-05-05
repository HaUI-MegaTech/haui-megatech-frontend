'use client'
import React from 'react'
import styles from '@/styles/product.card.horizontal.module.scss'
import Image from 'next/image'
import { Rate } from 'antd'
import { ProductDetail } from '@/types/property.types';

const ProductCardHorizontal = ({ product }: { product: ProductDetail }) => {
  return (
    <div className={styles.card}>
      <div>
        <Image
          width={100}
          height={100}
          style={{objectFit: 'contain'}}
          src={product?.mainImageUrl ? product?.mainImageUrl : product?.mainImg} alt="" />
      </div>
      <div className={styles.name}>
        <h1>{product.name}</h1>
        <Rate count={5} className={styles.rate}/>
      </div>
      <div><b>Giá:</b> <span style={{ color: '#007aff' }}>{(new Intl.NumberFormat('vi-VN').format(product.newPrice))} đ</span></div>
      <div>
        <b >Số lượng:</b> <span style={{ color: '#007aff' }}>5</span>
      </div>
      <div>
        <b>Thành tiền:</b> <span style={{ color: '#007aff' }}>{(new Intl.NumberFormat('vi-VN').format(product.newPrice * 5))} đ</span>
      </div>
    </div>
  )
}

export default ProductCardHorizontal
