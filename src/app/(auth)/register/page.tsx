'use client'
import React from 'react'
import styles from './styles.module.scss'
import { Form, type FormProps, Input } from 'antd';
import Image from 'next/image';
import imageLogin from '../../../../public/images/login-register.jpg';
import handleAuth from '@/api/auth.request';
import { useRouter } from 'next/navigation';

type FieldType = {
  username?: string;
  firstName?: string;
  lastName?: string;
  password?: string;
  confirmPassword?: string;
  email: string
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const RegisterPage = () => {
  const router = useRouter();
  const onFinish: FormProps<FieldType>["onFinish"] = async (values: object) => {
    console.log(values)
    try {
      let res = await handleAuth.registerAccount(values);
      if (res && res.token) {
        localStorage.setItem('token', res.token);
        router.push('/');
      }
    } catch (err) {
      console.log(err);
    };
  };
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
            label="Họ"
            name="firstName"
            rules={[{ required: true, message: 'Nhập họ!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Tên"
            name="lastName"
            rules={[{ required: true, message: 'Nhập tên!' }]}
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
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Nhập email!' }]}
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
            name="confirmPassword"
            rules={[
              { required: true, message: 'Nhập lại mật khẩu!' },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('Xác nhận mật khẩu không đúng!'));
                },
              }),]}
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
