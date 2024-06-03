import React from 'react'
import styles from '../../styles/product.card.compare.module.scss'
import { Image } from 'antd'
import { ProductCompare } from '@/types/property.types'
import Link from 'next/link'

const ProductCardCompare = ({ product }: { product: ProductCompare }) => {
  return (
    <div className={styles.container}>
      <div className={styles.image}><Image src={product.productImageUrl ?? 'https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTExL3JtNTUxLTExLW1hY2Jvb2stMTFhLnBuZw.png'} alt="image" /></div>
      <div className={styles.name}>{product.productName}</div>
      <div className={styles.price}>
        {product.price ? `${product.price} đ` : 'Liên hệ'}
      </div>
      <div className={styles.go}>
        <button><Link style={{ textDecoration: 'none', color: 'black' }} href={product.productUrl}>Đến trang</Link></button>
      </div>
    </div>
  )
}

export default ProductCardCompare
