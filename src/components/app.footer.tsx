import { Col, Row } from 'antd'
import React, { useEffect, useState } from 'react';
import styles from '@/styles/footer.module.scss'
import { MailTwoTone } from '@ant-design/icons';
import Image from 'next/image';
import logo from '../../public/images/logo.png'
import Link from 'next/link';
import handleProducts from '@/api/user.request';
import { ListBrand } from '@/types/property.types';

const AppFooter = () => {
  const [listBrand, setListBrand] = useState<ListBrand[]>([]);
  const handleGetListBrands = async () => {
    try {
      let res: any = await handleProducts.getListBrands();
      if (res) {
        setListBrand(res.data);
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    handleGetListBrands();
  }, [])

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.col}>
          <Image src={logo} alt='' width={250} height={200} style={{ objectFit: 'cover', margin: '0 auto' }} />
        </div>
        <div className={styles.col}>
          <b>Danh sách thương hiệu</b>
          {listBrand?.map((item) =>
            <Link key={item.id} href={`/search?brand=${item.id}`}><div>Laptop {item.name}</div></Link>
          )}
        </div>
        <div className={styles.col}>
          <b>Danh sách thương hiệu</b>
          {listBrand?.map((item) =>
            <Link key={item.id} href={`/search?brand=${item.id}`}><div>Laptop {item.name}</div></Link>
          )}
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
