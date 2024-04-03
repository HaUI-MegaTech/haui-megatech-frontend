import { Col, Row } from 'antd'
import React from 'react';
import styles from '@/styles/footer.module.scss'
import { MailTwoTone } from '@ant-design/icons';
import Image from 'next/image';

const AppFooter = () => {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.col}>
                    <Image src='/images/FPT_Software_logo.png' alt='' width={150} height={50} />
                </div>
                <div className={styles.col}>
                    <b>Danh sách thương hiệu</b>
                    <div>Laptop Asus</div>
                    <div>Laptop Dell</div>
                    <div>Laptop Asus</div>
                    <div>Laptop Asus</div>
                    <div>Laptop Asus</div>
                </div>
                <div className={styles.col}>
                    <b>Danh sách thương hiệu</b>
                    <div>Laptop Asus</div>
                    <div>Laptop Dell</div>
                    <div>Laptop Asus</div>
                    <div>Laptop Asus</div>
                    <div>Laptop Asus</div>
                </div>
                <div className={styles.col}>
                    <b>Đăng ký nhận tin khuyến mãi</b>
                    <div className={styles.containerMail}>
                            <input type='text' placeholder='Nhập email...' />
                        <div className={styles.icon}>
                            <MailTwoTone />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.develop}>Developed By <b style={{ color: '#007aff' }}>Team 06 - HaUI</b> | &copy; 2024 megatech-haui.com</div>
        </div>
    )
}

export default AppFooter