'use client'
import React from 'react'
import styles from './styles.module.scss'
import {
  Button,
  DatePicker,
  Form,
  FormProps,
  Input,
  Select,
  Upload,
} from 'antd';
import Image from 'next/image'
import handleAuth from '@/api/auth.request';
type FieldType = {
  firstName: string
  lastName: string
  avatar: string
  email: string
  phoneNumber: string
};
const UserInfo = () => {
  document.title = 'Thông tin người dùng'
  const onFinish: FormProps<FieldType>["onFinish"] = async (values: FieldType) => {
    console.log('Success:', values);
    try {
      let res = await handleAuth.updateUserInfor(values);
      if (res) {
        console.log(res);
      }
    } catch (err) {
      console.log(err);
    };
  };
  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.leftTop}>
          <div>
            <Image className={styles.avatar} width={50} height={50} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaBOsBWLrWjZqh1wdvYYD0ooORXZGrEG9gqhiuLh3f6A&s" alt="" />
          </div>
          <div className={styles.leftTopRight}>
            Tài khoản của <br />
            <span className={styles.fullName}>Lương Minh Anh</span>
          </div>
        </div>
        <div className={styles.leftBottom}>
          <ul>
            <li>Thông tin tài khoản</li>
            <li>Quản lý đơn hàng</li>
            <li>Sổ địa chỉ</li>
            <li>Đánh giá sản phẩm</li>
            <li>Sản phẩm bạn đã xem</li>
            <li>Sản phẩm yêu thích</li>
          </ul>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.title}>Cập nhật thông tin cá nhân</div>
        <div className={styles.rightContent}>
          <div className={styles.basicInfo}>
            <div>
              <Image className={styles.imageUser} width={100} height={100} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaBOsBWLrWjZqh1wdvYYD0ooORXZGrEG9gqhiuLh3f6A&s" alt="" />
            </div>
            <div className={styles.name}>Lương Minh Anh</div>
          </div>
          <div className={styles.form}>
            <Form
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 14 }}
              layout="horizontal"
              style={{ width: '100%', margin: '0 auto' }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item<FieldType>
                label="Họ"
                name="firstName"
              >
                <Input />
              </Form.Item>
              <Form.Item<FieldType>
                label="Tên"
                name="lastName"
              >
                <Input />
              </Form.Item>
              <Form.Item label="Quốc gia">
                <Select>
                  <Select.Option value="demo">Demo</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item label="Thành phố">
                <Select>
                  <Select.Option value="demo">Demo</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item label="Quận/huyện">
                <Select>
                  <Select.Option value="demo">Demo</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item label="Địa chỉ">
                <Input />
              </Form.Item>
              <Form.Item<FieldType>
                label="Điện thoại"
                name="phoneNumber"
              >
                <Input />
              </Form.Item>
              <Form.Item<FieldType>
                label="Email"
                name="email"
              >
                <Input />
              </Form.Item>
              <Form.Item<FieldType>
                label="Ảnh đại diện"
                name="avatar"
              >
                <Input />
              </Form.Item>
              <Form.Item style={{ textAlign: 'center' }}>
                <button>Cập nhật</button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserInfo
