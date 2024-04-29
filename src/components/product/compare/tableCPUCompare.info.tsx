import { ProductDetail } from '@/types/property.types';
import { Table } from 'antd';
import Link from 'next/link';
import React from 'react'

const TableCPUCompare = ({ products }: { products: ProductDetail[] }) => {
  return (
    <>
      {products &&
        <Table
          columns={
            [
              {
                title: <span style={{ fontSize: '18px' }}>Bộ xử lý</span>,
                dataIndex: 'name',
                key: 'name',
                render: (text:any) => <a style={{ fontWeight: 500 }}>{text}</a>,
                width: '250px'
            
              },
              {
                title: <Link href={`/product/${products[0]?.id}`}>{products[0]?.name}</Link>,
                dataIndex: 'laptop_1',
                key: 'laptop_1',
              },
              {
                title: <Link href={`/product/${products[1]?.id}`}>{products[1]?.name}</Link>,
                dataIndex: 'laptop_2',
                key: 'laptop_2',
              },
              {
                title: <Link href={`/product/${products[2]?.id}`}>{products[2]?.name}</Link>,
                dataIndex: 'laptop_3',
                key: 'laptop_3',
              },
            ]
          }
          dataSource={[
            {
              key: '1',
              name: 'Công nghệ CPU',
              laptop_1: products[0]?.processor,
              laptop_2: products[1]?.processor,
              laptop_3: products[2]?.processor,
            },
            {
              key: '2',
              name: 'Số nhân',
              laptop_1: products[0]?.cores,
              laptop_2: products[1]?.cores,
              laptop_3: products[2]?.cores,
            },
            {
              key: '3',
              name: 'Số luồng',
              laptop_1: products[0]?.threads,
              laptop_2: products[1]?.threads,
              laptop_3: products[2]?.threads,
            },
            {
              key: '4',
              name: 'Tốc độ CPU',
              laptop_1: products[0]?.frequency,
              laptop_2: products[1]?.frequency,
              laptop_3: products[2]?.frequency,
            },
            {
              key: '5',
              name: 'Tốc độ tối đa',
              laptop_1: products[0]?.boostFrequency,
              laptop_2: products[1]?.boostFrequency,
              laptop_3: products[2]?.boostFrequency,
            },
          ]}
          pagination={false}
          style={{ overflowX: 'auto' }}
        />
      }
    </>
  )
}

export default TableCPUCompare
