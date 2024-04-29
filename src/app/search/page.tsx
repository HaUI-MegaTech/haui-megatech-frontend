'use client'
import { Button, Checkbox, Col, Divider, Form, InputNumber, Pagination, Rate, Row, Spin, Tabs } from 'antd'
import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss'
import AppCard from '@/components/app.card';
import { Product } from '@/types/property.types';
import handleProducts from '@/api/user.request';
import { useSearchParams } from 'next/navigation';

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
  const [listProduct1, setListProduct1] = useState<Product[]>([]);
  const [query, setQuery] = useState<string>();
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(16);
  const [totalItem, setTotalItem] = useState(10);
  const searchParams = useSearchParams();
  const brandId: string | any = searchParams.get('brand');
  const handleGetProducts = async () => {
    try {
      const searchQuery = `${brandId}?pageIndex=${pageIndex}&pageSize=${pageSize}`;
      const res = await handleProducts.getProductsByBrandId(searchQuery);
      if (res) {
        setListProduct1(res.items);
        setTotalItem(res.totalItems);
      }
    } catch (err) {
      console.log(err);
    }
  }
  const changePageIndex = (pageIndex: number) => {
    setPageIndex(+pageIndex-1)
  }
  useEffect(() => {
    handleGetProducts();
  }, [searchParams, pageIndex, pageSize])
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.left}>
          <Form
          // onValuesChange={(changedValues, values) => onChangeForm(changedValues, values)}
          >
            <div className={styles.titleMenu}>
              Bộ lọc tìm kiếm
            </div>
            <Form.Item
              name="category"
            >
              <Checkbox.Group>
                <Row>
                  <Col span={24}>
                    <Checkbox value={1}>Acer</Checkbox>
                  </Col>
                  <Col span={24}>
                    <Checkbox value={2}>Dell</Checkbox>
                  </Col>
                  <Col span={24}>
                    <Checkbox value={3}>Macbook</Checkbox>
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
                {
                  listProduct1?.map((item) => {
                    return (
                      <AppCard key={item.id} product={item} />
                    )
                  })
                }
              </div>
              <div className={styles.pagination}>
                <Pagination
                  onChange={changePageIndex}
                  total={totalItem} current={+pageIndex + 1} pageSize={pageSize} />
              </div>
            </div>
          </Spin>
        </div>
      </div>
    </div>
  )
}

export default SearchPage
