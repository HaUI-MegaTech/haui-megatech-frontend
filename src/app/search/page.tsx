'use client'
import { Button, Checkbox, Col, Divider, Form, InputNumber, Pagination, Rate, Row, Spin, Tabs } from 'antd'
import React from 'react';
import styles from './styles.module.scss'
import { ReloadOutlined } from '@ant-design/icons';
import AppCard from '@/components/app.card';
const SearchPage = () => {
  const items = [
    {
      key: '&sort=-sold',
      label: 'Phổ biến',
    },
    {
      key: '&sort=-updatedAt',
      label: 'Mới nhất',
    },
    {
      key: '&sort=price',
      label: 'Giá thấp đến cao',
    },
    {
      key: '&sort=-price',
      label: 'Giá cao đến thấp',
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.left}>
          <Form
          // onValuesChange={(changedValues, values) => onChangeForm(changedValues, values)}
          >
            <div className={styles.titleMenu}>
              Bộ lọc tìm kiếm
              {/* <Button
                                type="ghost"
                            >
                                <ReloadOutlined />
                            </Button> */}
            </div>
            <Form.Item
              name="category"
            >
              <Checkbox.Group>
                <Row>
                  <Col span={24}>
                    <Checkbox>banh da</Checkbox>
                  </Col>
                  <Col span={24}>
                    <Checkbox>banh da</Checkbox>
                  </Col>
                  <Col span={24}>
                    <Checkbox>banh da</Checkbox>
                  </Col>
                </Row>
              </Checkbox.Group>
            </Form.Item>
            <Divider />
            <Form.Item>
              <p className={styles.priceTitle}>Khoảng giá</p>
              <div className={styles.price}>
                <Form.Item name={["range", "from"]}>
                  <InputNumber placeholder='đ từ' width={100} />
                </Form.Item>
                -
                <Form.Item name={["range", "to"]} className={styles.toPrice}>
                  <InputNumber placeholder='đ đến' />
                </Form.Item>
              </div>
            </Form.Item>
            <Button type="primary" block>Áp dụng</Button>
            <Divider />
            <p>Đánh giá</p>
            <div className='review' style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
              <Rate value={5} /> 5 sao
            </div>
            <div className='review' style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
              <Rate value={4} /> 4 sao
            </div>
            <div className='review' style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
              <Rate value={3} /> 3 sao
            </div>
            <div className='review' style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
              <Rate value={2} /> 2 sao
            </div>
            <div className='review' style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
              <Rate value={1} /> 1 sao
            </div>
          </Form>
        </div>
        <div className={styles.right}>
          <Spin spinning={false} tip="...Loading">
            <div className={styles.bookDisplay}>
              <Tabs defaultActiveKey="1" items={items} />
              <div className={styles.listBook}>
                <AppCard />
                <AppCard />
                <AppCard />
                <AppCard />
                <AppCard />
                <AppCard />
                <AppCard />
                <AppCard />
                <AppCard />
                <AppCard />
                <AppCard />
                <AppCard />
                <AppCard />
                <AppCard />
                <AppCard />
                <AppCard />
              </div>
              <div className={styles.pagination}>
                <Pagination total={50} current={1} pageSize={15} />
              </div>
            </div>
          </Spin>
        </div>
      </div>
    </div>
  )
}

export default SearchPage
