'use client'
import React from 'react'
import styles from './styles.module.scss'
import { Form, type FormProps, Input } from 'antd';
import Image from 'next/image';
import imageLogin from '../../../public/images/login-register.jpg';

type FieldType = {
    username?: string;
    email?: string;
    password?: string;
    re_password?: string;
    remember?: string;
};
const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

const RegisterPage = () => {
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
            </div>
            <div className={styles.imageContainer}>
                <Image src={imageLogin} alt='' className={styles.image}/>
            </div>
        </div>
    )
}

export default RegisterPage