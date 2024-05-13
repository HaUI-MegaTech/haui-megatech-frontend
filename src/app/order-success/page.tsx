'use client'
import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import Image from 'next/image'
import orderImage from '../../../public/images/ordersuccess.jpg'
import ListProduct from '@/components/app.products'
import Link from 'next/link'
import { Product } from '@/types/property.types'

const OrderSuccess = () => {
  
  const [listProduct1, setListProduct1] = useState<Product[]>([]);
  const fetchData1 = async () => {
    const res = await fetch("http://localhost:8080/api/v1/products/active?pageIndex=1");
    const data = await res.json();
    console.log(data.items);
    setListProduct1(data.items);
  }
  useEffect(() => {
    fetchData1();
    document.title = 'Đặt hàng thành công'
  }, [])
  return (
    <>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image src={orderImage} alt="" className={styles.image} />
        </div>
        <div className={styles.description}>
          <div className={styles.title}>Bạn đã đặt hàng thành công!</div>
          <div className={styles.note}>Chúng tôi sẽ giao hàng sớm nhất có thể. Vui lòng chú ý điện thoại của mình</div>
          <div className={styles.buttons}>
            <button><Link href="/cart">Xem thêm</Link></button>
            <button><Link href="/cart">Giỏ hàng</Link></button>
          </div>
        </div>
      </div>
      <div>
        <ListProduct listProduct={listProduct1} title="SẢN PHẨM NỔI BẬT"/>
      </div>
    </>
  )
}

export default OrderSuccess
