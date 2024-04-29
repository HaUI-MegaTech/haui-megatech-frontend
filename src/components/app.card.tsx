// 'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import styles from '@/styles/card.module.scss'
import { Product } from '@/types/property.types'
import Link from 'next/link'

const AppCard = ({ product }: { product: Product }) => {
  return (
    <Link href={`/product/${product.id}`}>
      <div className={styles.container}>
        <div className={styles.image}>
          <Image
            src={product.mainImg ? product.mainImg : ""}
            alt="image"
            width={0}
            height={0}
            objectFit='contain'
            sizes='100vw'
            style={{ width: '100%', height: 'auto' }} />
        </div>
        <div className='product-info'>
          <div className={styles.title}>
            {product.name}
          </div>
          <div className='product-promotion'>
            <table className={styles.table}>
              <tbody>
                <tr>
                  <td width={50}>CPU</td>
                  <td>{product.processor}</td>
                </tr>
                <tr>
                  <td>RAM</td>
                  <td>{product.ram}</td>
                </tr>
                <tr>
                  <td>Bộ nhớ</td>
                  <td>{product.storage}</td>
                </tr>
                <tr>
                  <td>Card</td>
                  <td>{product.card}</td>
                </tr>
                <tr>
                  <td>M.hình</td>
                  <td>{product.display}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={styles.price}>
            <div className={styles.top}>
              <del className={styles.oldPrice}>{(new Intl.NumberFormat('vi-VN').format(product.oldPrice))}đ</del>
              <span className={styles.sale}>-{product.discountPercent}%</span>
            </div>
            <div className={styles.bottom}>
              <span className={styles.priceMain}>{(new Intl.NumberFormat('vi-VN').format(product.newPrice))}đ</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default AppCard
