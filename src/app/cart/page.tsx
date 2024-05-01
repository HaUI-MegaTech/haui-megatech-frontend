'use client'
import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { Image, Input, InputNumber, Table } from 'antd';
import Link from 'next/link';
import type { TableColumnsType } from 'antd';
import { useProductViewedStore } from '@/store/product.viewed.store';
import ListProduct from '@/components/app.products';


interface DataType {
  id: number,
  key: number;
  name: string;
  mainImg: string,
  newPrice: number;
}

const columns: TableColumnsType<DataType> = [
  {
    title: 'Ảnh',
    dataIndex: 'mainImg',
    width: '15%',
    render: (text) => <Image width={100} src={text} alt="" />,
  },
  {
    title: 'Tên sản phẩm',
    dataIndex: 'name',
    width: '32%',
    render: (text, record) => <Link href={`/product/${record.id}`}><span style={{ fontWeight: '500', color: '#007aff', cursor: 'pointer', fontSize: '16px' }}>{text}</span></Link>,
  },
  {
    title: 'Giá',
    dataIndex: 'newPrice',
    width: '18%',
    render: (text) => <span style={{ fontWeight: '500', fontSize: '17px' }}>{(new Intl.NumberFormat('vi-VN').format(text))} đ</span>
  },
  {
    title: 'Số lượng',
    dataIndex: 'quantity',
    render: () => <InputNumber />,
  },
  {
    title: 'Thành tiền',
    dataIndex: 'total',
    width: '20%',
  },
];

const Cart = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<number[]>([]);

  const onSelectChange = (newSelectedRowKeys: number[]) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;
  const productsInCart = useProductViewedStore(state => state.productsViewed);

  useEffect(() => {
    useProductViewedStore.persist.rehydrate();
  }, [])

  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>Giỏ hàng</div>
        <div className={styles.subTitle}>
          {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
        </div>
        <div>
          <Table rowSelection={rowSelection} columns={columns} dataSource={productsInCart} />
        </div>
        <div className={styles.btnOrder}>
          <button><Link href="/order">Mua hàng</Link></button>
        </div>
      </div>
      <div className={styles.relateProduct}>
        <ListProduct listProduct={productsInCart} title="CÓ THỂ BẠN CŨNG THÍCH" />
      </div>
    </>
  )
}

export default Cart
