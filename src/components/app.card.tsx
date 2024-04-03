'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import styles from '@/styles/card.module.scss'

const AppCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWS5WosKs79XqVWqqKINh3jLiS_qLy49PIlg&usqp=CAU"
          alt="image"
          width={0}
          height={0}
          objectFit='contain'
          sizes='100vw'
          style={{ width: '100%', height: 'auto' }} />
      </div>
      <div className='product-info'>
        <div className={styles.title}>
          [New 100%] Laptop Lenovo LOQ 15IAX9 83GS000FVN - Intel Core i5-12450HX | RTX 2
        </div>
        <div className='product-promotion'>
          <table className={styles.table}>
            <tbody>
              <tr>
                <td width={50}>CPU</td>
                <td>i5 - 1240P</td>
              </tr>
              <tr>
                <td>RAM</td>
                <td>AMD R7-6800H</td>
              </tr>
              <tr>
                <td>Ổ cứng</td>
                <td>SSD 512GB NVMe</td>
              </tr>
              <tr>
                <td>Card</td>
                <td>Intel Iris Xe Graphics</td>
              </tr>
              <tr>
                <td>M.hình</td>
                <td>14" 2.2K</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.price}>
          <div className={styles.top}>
            <del className={styles.oldPrice}>25.000.000đ</del>
            <span className={styles.sale}>-29%</span>
          </div>
          <div className={styles.bottom}>
            <span className={styles.priceMain}>19.000.000đ</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppCard