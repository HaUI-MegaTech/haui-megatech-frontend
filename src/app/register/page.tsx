'use client'
import React from 'react'
import styles from './styles.module.scss'
import { Form, type FormProps, Input } from 'antd';
import Image from 'next/image';
import imageLogin from '../../../public/images/login-register.jpg';
import handleAuth from '@/api/auth.request';

type FieldType = {
  username?: string;
  firstName?: string;
  lastName?: string;
  password?: string;
  re_password?: string;
};
const onFinish: FormProps<FieldType>["onFinish"] = async (values: object) => {
  console.log('Success:', values);
  try {
    let res = await handleAuth.registerAccount(values);
    if (res) console.log(res);
  } catch (err) {
    console.log(err);
  };
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const RegisterPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <div className={styles.title}>Đăng ký tài khoản</div>
        <Form
          name="basic"
          labelCol={{ span: 10 }}
          wrapperCol={{ span: 14 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          
          <Form.Item<FieldType>
            label="First name"
            name="firstName"
            rules={[{ required: true, message: 'Nhập email!' }]}
          >
            <Input />
          </Form.Item>
          
          <Form.Item<FieldType>
            label="Last name"
            name="lastName"
            rules={[{ required: true, message: 'Nhập email!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item<FieldType>
            label="Tên đăng nhập"
            name="username"
            rules={[{ required: true, message: 'Nhập tên đăng nhập!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Mật khẩu"
            name="password"
            rules={[{ required: true, message: 'Nhập mật khẩu!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item<FieldType>
            label="Nhập lại mật khẩu"
            name="re_password"
            rules={[{ required: true, message: 'Nhập lại mật khẩu!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <button className={styles.button}>Đăng ký</button>
          </Form.Item>
        </Form>
      </div>
      <div className={styles.imageContainer}>
        <Image src={imageLogin} alt='' className={styles.image} />
      </div>
    </div>
  )
}

export default RegisterPage
