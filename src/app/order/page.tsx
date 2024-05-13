'use client'
import React, { useEffect } from 'react'
import { Input } from 'antd'
import { EnvironmentTwoTone } from '@ant-design/icons'
import ProductCardHorizontal from '@/components/product/product.card.horizontal'
import styles from './styles.module.scss'
import Link from 'next/link'
import { useProductViewedStore } from '@/store/product.viewed.store'

const OrderPage = () => {
  useEffect(() => {
    useProductViewedStore.persist.rehydrate();
    document.title = 'Đặt hàng'
  }, [])
  const productsInCart = useProductViewedStore(state => state.productsViewed);
  return (
    <>
      {/* address */}
      <div className={styles.addressContainer}>
        <div className={styles.border}></div>
        <div>
          <span className={styles.addressName}>
            <EnvironmentTwoTone />
            Địa chỉ nhận hàng
          </span>
          <div className={styles.address}>
            <div>
              <b>Lương Lương Minh Anh <br /> (+84) 5562763287</b>
            </div>
            <div>Ký Túc Xá Đh Công Nghiệp Hà Nội Cs 1, Ngõ 296 đường cầu diễn, Phường Minh Khai, Quận Bắc Từ Liêm, Hà Nội</div>
            <div className={styles.changeAddress}>Thay đổi</div>
          </div>
        </div>
        <div className={styles.border}></div>
      </div>
      {/* list order */}
      {/* <div className={styles.container}> */}
      <div className={styles.cards}>
        {productsInCart?.map((item) => <ProductCardHorizontal key={item.id} product={item} />)}
      </div>
      {/* </div> */}

      <div className={styles.ship}>
        <div className={styles.message}>
          <div className={styles.titleMessage}>Lời nhắn:</div>
          <input placeholder='Lời nhắn cho người bán' />
        </div>
        <div className={styles.brand}>
          <div>Đơn vị vận chuyển: </div>
          <div>
            <b style={{ color: '#007aff' }}>Nhanh</b><br />
            <i>Nhận hàng vào thứ 7</i>
          </div>
          <div style={{ color: '#007aff' }}>12.800đ</div>
        </div>
      </div>

      <div className={styles.pay}>
        <div className={styles.way}>
          <div className={styles.wayTitle}>Phương thức thanh toán</div>
          <div className={styles.wayMain}>
            <div>Thanh toán khi nhận hàng</div>
            <div className={styles.changeAddress}>Thay đổi</div>
          </div>
        </div>
        <div className={styles.totalContainer}>
          <div>Tổng tiền hàng: 123.000đ</div>
          <div>Phí vận chuyển: 12.800đ</div>
          <div>Tổng thanh toán: <span className={styles.total}>123.000đ</span></div>
        </div>
        <div className={styles.btnOrder}>
          <button><Link href="/order-success">Đặt hàng</Link></button>
        </div>
      </div>
    </>
  )
}

export default OrderPage
