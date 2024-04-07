import { HeartOutlined, SearchOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import { Badge, Input } from 'antd';
import Search from 'antd/es/input/Search';
import Image from 'next/image';
import React from 'react'
import styles from '@/styles/header.module.scss'
import logo from '../../public/images/logo.png'

const AppHeader = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <Image src={logo}
                    width={200} height={50} alt="logo"
                    objectFit='cover'
                    sizes='100vw'
                    className={styles.imgLogo}
                />
            </div>
            <div className={styles.search}>
                <div className={styles.title}>Tìm kiếm</div>
                <div className={styles.inputContainer}>
                    <input className={styles.input} placeholder='Nhập tên sản phẩm ...' />
                </div>
                <div className={styles.icon}>
                    <SearchOutlined style={{ fontSize: '20px', color: 'gray' }} />
                </div>
            </div>
            <div className={styles.actions}>
                <div className={styles.cart}>
                    <Badge count={3} style={{ background: '#007aff' }}>
                        <ShoppingCartOutlined style={{ fontSize: '30px' }} />
                    </Badge>
                    <span>Giỏ hàng</span>
                </div>
                <div className={styles.cart}>
                    <Badge count={5} style={{ background: '#007aff' }}>
                        <HeartOutlined style={{ fontSize: '30px' }} />
                    </Badge>
                    <span>Yêu thích</span>

                </div>
                <div>
                    <UserOutlined style={{ fontSize: '30px' }} className={styles.userIcon}/>
                    <span className={styles.titleAccount}>Tài khoản</span>
                </div>
            </div>
        </div>

    )
}

export default AppHeader