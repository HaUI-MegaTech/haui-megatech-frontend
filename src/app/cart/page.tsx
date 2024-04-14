'use client'
import React from 'react'
import styles from './styles.module.scss'
import { Button, Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';
import Link from 'next/link';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

const Cart = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Giỏ hàng</div>
      <div className={styles.subTitle}>Bạn có 2 sản phẩm trong giỏ hàng</div>
      <div>
        <Table
          columns={columns}
          dataSource={data}
          style={{ overflowX: 'auto' }}
          pagination={false}
        />
      </div>
      <div className={styles.btnOrder}>
        <button><Link href="/order">Mua hàng</Link></button>
      </div>
    </div>
  )
}

export default Cart
