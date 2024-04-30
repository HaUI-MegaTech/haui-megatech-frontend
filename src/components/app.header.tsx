import { HeartOutlined, SearchOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import { Badge, Input } from 'antd';
import Image from 'next/image';
import React, { useEffect } from 'react'
import styles from '@/styles/header.module.scss'
import logo from '../../public/images/logo.png'
import Link from 'next/link';
import { useProductCompareStore } from '@/store/product.compare.store';

const AppHeader = () => {
  const productsCompare = useProductCompareStore(state => state.products);
  useEffect(() => {
    useProductCompareStore.persist.rehydrate()
  }, [])
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link href="/">
          <Image src={logo}
            width={200} height={50} alt="logo"
            objectFit='cover'
            sizes='100vw'
            className={styles.imgLogo}
          />
        </Link>
      </div>
      <div className={styles.search}>
        <div className={styles.title}>Tìm kiếm</div>
        <div className={styles.inputContainer}>
          <input className={styles.input} placeholder='Nhập tên sản phẩm ...' />
        </div>
        <div className={styles.icon}>
          <Link href="/search">
            <SearchOutlined style={{ fontSize: '20px', color: 'gray' }} />
          </Link>
        </div>
      </div>
      <div className={styles.actions}>
        <div className={styles.cart}>
          <Link href="/cart">
            <Badge count={3} style={{ background: '#007aff' }}>
              <ShoppingCartOutlined style={{ fontSize: '30px' }} />
            </Badge>
            <span>Giỏ hàng</span>
          </Link>
        </div>
        <div className={styles.cart}>
          <Link href="/compare">
            <Badge count={productsCompare?.length} style={{ background: '#007aff' }}>
              <HeartOutlined style={{ fontSize: '30px' }} />
            </Badge>
            <span>So sánh</span>
          </Link>
        </div>
        <div>
          <Link href='/user'>
            <UserOutlined style={{ fontSize: '30px' }} className={styles.userIcon} />
          </Link>
          <span className={styles.titleAccount}>Tài khoản</span>
        </div>
      </div>
    </div>

  )
}

export default AppHeader
