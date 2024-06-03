'use client'
import React, { useEffect, useMemo, useState } from 'react'
import styles from './styles.module.scss'
import ProductCardHorizontal from '@/components/product/product.card.horizontal'
import handleProducts from '@/api/user.request'
import { Table } from 'antd'
interface ListOrder {
  key: number,
  paymentMethod: string,
  orderStatus?: string,
  total: number
}
const columns = [
  {
    title: 'Mã đơn hàng',
    dataIndex: 'key',
    key: 'key',
  },
  {
    title: 'Phương thức thanh toán',
    dataIndex: 'paymentMethod',
    key: 'paymentMethod',
  },
  {
    title: 'Trạng thái đơn hàng',
    dataIndex: 'orderStatus',
    key: 'orderStatus',
    render: (text) => {
      return text === 'PAID' ? <span>Đã thanh toán</span> : <span>Chưa thanh toán</span>
    }
  },
  {
    title: 'Tổng tiền',
    dataIndex: 'total',
    key: 'total',
    render: (text) => {
      console.log(text);
      return <span style={{ fontWeight: '500', color: '#007aff' }}>{(new Intl.NumberFormat('vi-VN').format(text))} đ</span>
    }
  },
];
const OrderHistory = () => {
  const [listOrder, setListOrder] = useState([])
  const [listDetailOrder, setListDetailOrder] = useState([]);
  const handleGetListOrder = async () => {
    const res = await handleProducts.getListOrder();
    if (res) {
      console.log(res);
      const filter = res.data?.map((item: ListOrder) => {
        return {
          key: item.id,
          paymentMethod: item.paymentMethod,
          orderStatus: item.orderStatus,
          total: item.total
        }
      })
      setListOrder(filter);
    }
  }

  useEffect(() => {
    document.title = 'Lịch sử đặt hàng'
    handleGetListOrder();
  }, [])
  return (
    <div className={styles.container}>
      <div>Lịch sử đơn hàng</div>
      <div className={styles.products}>
        <Table dataSource={listOrder} columns={columns} />
      </div>
    </div>
  )
}

export default OrderHistory
