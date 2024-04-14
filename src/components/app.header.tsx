import { HeartOutlined, SearchOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import { Badge, Input } from 'antd';
import Search from 'antd/es/input/Search';
import Image from 'next/image';
import React from 'react'
import styles from '@/styles/header.module.scss'
import logo from '../../public/images/logo.png'
import Link from 'next/link';

const AppHeader = () => {
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
          <Badge count={3} style={{ background: '#007aff' }}>
            <Link href="/cart">
              <ShoppingCartOutlined style={{ fontSize: '30px' }} />
            </Link>
          </Badge>
          <span>Giỏ hàng</span>
        </div>
        <div className={styles.cart}>
          <Badge count={5} style={{ background: '#007aff' }}>
            <Link href="/cart">
              <HeartOutlined style={{ fontSize: '30px' }} />
            </Link>
          </Badge>
          <span>Yêu thích</span>

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
