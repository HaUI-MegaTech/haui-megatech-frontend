'use client'
import React from 'react'
import styles from '@/styles/product.card.horizontal.module.scss'
import Image from 'next/image'
import { Rate } from 'antd'

const ProductCardHorizontal = () => {
    return (
        <div className={styles.card}>
            <div>
                <Image
                    width={100}
                    height={100}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWS5WosKs79XqVWqqKINh3jLiS_qLy49PIlg&usqp=CAU" alt="" />
            </div>
            <div className={styles.name}>
                <h1>[New 100%] Laptop Lenovo LOQ 15IAX9 83GS000FVN - Intel Core i5-12450HX | RTX 2</h1>
                <Rate count={5} />
            </div>
            <div><b>Giá:</b> <span style={{ color: '#007aff' }}>12.000.000đ</span></div>
            <div>
                <b >Số lượng:</b> <span style={{ color: '#007aff' }}>5</span>
            </div>
            <div>
                <b>Thành tiền:</b> <span style={{ color: '#007aff' }}>60.000.000đ</span>
            </div>
        </div>
    )
}

export default ProductCardHorizontal