import { ProductDetail } from '@/types/property.types';
import { Table } from 'antd';
import Link from 'next/link';
import React from 'react'

const tableMonitorInfor = ({ products }: { products: ProductDetail[] }) => {
  return (
    <>
      {products &&
        <Table
          columns={
            [
              {
                title: <span style={{ fontSize: '18px' }}>Màn hình</span>,
                dataIndex: 'name',
                key: 'name',
                render: (text: any) => <a style={{ fontWeight: 500 }}>{text}</a>,
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
              name: 'Màn hình',
              laptop_1: products[0]?.displaySize,
              laptop_2: products[1]?.displaySize,
              laptop_3: products[2]?.displaySize,
            },
            {
              key: '2',
              name: 'Độ phân giải',
              laptop_1: products[0]?.resolution,
              laptop_2: products[1]?.resolution,
              laptop_3: products[2]?.resolution,
            },
            {
              key: '3',
              name: 'Độ phủ màu',
              laptop_1: products[0]?.colorGamut,
              laptop_2: products[1]?.colorGamut,
              laptop_3: products[2]?.colorGamut,
            },
            {
              key: '4',
              name: 'Tần số quét',
              laptop_1: products[0]?.refreshRate,
              laptop_2: products[1]?.refreshRate,
              laptop_3: products[2]?.refreshRate,
            },
          ]}
          pagination={false}
          style={{ overflowX: 'auto' }}
        />
      }
    </>
  )
}

export default tableMonitorInfor
