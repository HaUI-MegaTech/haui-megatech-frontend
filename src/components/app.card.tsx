'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import styles from '@/styles/card.module.scss'
interface Product {
	bannerImg: string,
	battery: string,
	card: string,
	discountPercent: string,
	display: string,
	id: number,
	name: string,
	newPrice: number,
	oldPrice: number,
	processor: string,
	ram: number,
	storage: string,
	weight: number,
}

const AppCard = ({ product }: { product: Product }) => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image
          src={product.bannerImg}
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
                <td>Ổ cứng</td>
                <td>{product.processor}</td>
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
            <del className={styles.oldPrice}>{product.oldPrice}đ</del>
            <span className={styles.sale}>-{product.discountPercent}%</span>
          </div>
          <div className={styles.bottom}>
            <span className={styles.priceMain}>{product.newPrice}đ</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppCard
