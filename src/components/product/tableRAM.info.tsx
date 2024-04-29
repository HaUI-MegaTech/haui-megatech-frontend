import { ProductDetail } from '@/types/property.types';
import { Table } from 'antd';
import Link from 'next/link';
import React from 'react'

const TableRAM = ({ products }: { products: ProductDetail[] }) => {
  return (
    <>
      {products &&
        <Table
          columns={
            [
              {
                title: <span style={{ fontSize: '18px' }}>Bộ nhớ RAM, ổ cứng</span>,
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
              name: 'RAM',
              laptop_1: products[0]?.memoryCapacity,
              laptop_2: products[1]?.memoryCapacity,
              laptop_3: products[2]?.memoryCapacity,
            },
            {
              key: '2',
              name: 'Loại RAM',
              laptop_1: products[0]?.memoryType,
              laptop_2: products[1]?.memoryType,
              laptop_3: products[2]?.memoryType,
            },
            {
              key: '3',
              name: 'Tốc độ bus RAM',
              laptop_1: products[0]?.memoryBus,
              laptop_2: products[1]?.memoryBus,
              laptop_3: products[2]?.memoryBus,
            },
            {
              key: '4',
              name: 'Hỗ trợ RAM tối đa',
              laptop_1: products[0]?.maxMemoryCapacity,
              laptop_2: products[1]?.maxMemoryCapacity,
              laptop_3: products[2]?.maxMemoryCapacity,
            },
            {
              key: '5',
              name: 'Ổ cứng',
              laptop_1: products[0]?.storage,
              laptop_2: products[1]?.storage,
              laptop_3: products[2]?.storage,
            },
          ]}
          pagination={false}
          style={{ overflowX: 'auto' }}
        />
      }
    </>
  )
}

export default TableRAM
