'use client'
import React from 'react'
import styles from './styles.module.scss'
import { Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import {
    Button,
    DatePicker,
    Form,
    Input,
    Select,
} from 'antd';
import Image from 'next/image'
const { RangePicker } = DatePicker;

const UserInfo = () => {
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
                    >
                        <Form.Item label="Họ và tên">
                            <Input />
                        </Form.Item>
                        <Form.Item label="Số điện thoại">
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
                        <Form.Item label="Ngày sinh">
                            <DatePicker />
                        </Form.Item>
                        <Form.Item style={{ textAlign: 'center' }}>
                            <Button>Cập nhật</Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default UserInfo
