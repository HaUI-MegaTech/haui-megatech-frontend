'use client'
import { Form, Modal } from 'antd'
import React, { useState } from 'react'
type FieldType = {
  province: string
  provinceCode: string
  district: string
  districtCode: string
  ward: string
  wardCode: string
  detail: string
};
const ModalChangeAddress = ({show, setShow}) => {
  const handleOk = () => {
    setShow(false);
  };
  const handleCancel = () => {
    setShow(false);
  };
  return (
    <div>
      <Modal open={show} onOk={handleOk} onCancel={handleCancel}>
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
      </Modal>
    </div>
  )
}

export default ModalChangeAddress
