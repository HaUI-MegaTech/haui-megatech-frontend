'use client'
import React from 'react'
import styles from './styles.module.scss'
import { Form, type FormProps, Input } from 'antd';
import Image from 'next/image';
import imageLogin from '../../../../public/images/login-register.jpg';
import handleAuth from '@/api/auth.request';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

type FieldType = {
  username?: string;
  password?: string;
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const LoginPage = () => {
  const router = useRouter();
  const onFinish: FormProps<FieldType>["onFinish"] = async (values: object) => {
    console.log('Success:', values);
    try {
      let res = await handleAuth.login(values);
      if (res) {
        console.log('ok')
        localStorage.setItem('token', res.accessToken);
        localStorage.setItem('haui-megatech-user-infor', JSON.stringify(res.loggedInUser));
        router.push('/')
      }
    } catch (err) {
      console.log(err);
    };
  };

  const handleForgetPassword = async () => {
    try {
      const res = await handleAuth.forgotPassword(1033);
      if (res) console.log(res);
    } catch (err) {
      console.log(err);
    }
  }
  
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <div className={styles.title}>Đăng nhập</div>
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

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <button className={styles.button}>Đăng nhập</button>
          </Form.Item>
        </Form>
        <div className={styles.bottom}>
          <div
            onClick={() => handleForgetPassword()}
            className={styles.forget}>Quên mật khẩu</div>
          <div className={styles.forget}><Link href='/register'>Chưa có tài khoản?</Link></div>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image src={imageLogin} alt='' className={styles.image} />
      </div>
    </div>
  )
}

export default LoginPage
