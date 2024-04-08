import { Table, TableProps } from 'antd';
import React from 'react'
interface DataType {
  key: string;
  name: string;
  age: string;
}
const columns: TableProps<DataType>['columns'] = [
  {
    title: <span style={{ fontSize: '18px' }}>Bộ xử lý</span>,
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a style={{ fontWeight: 500 }}>{text}</a>,
    width: '250px'

  },
  {
    title: '',
    dataIndex: 'age',
    key: 'age',
  },
];
const data: DataType[] = [
  {
    key: '1',
    name: 'Công nghệ CPU',
    age: 'Intel Core i5 Raptor Lake - 1335U'
  },
  {
    key: '2',
    name: 'Số nhân',
    age: '10'
  },
  {
    key: '3',
    name: 'Số luồng',
    age: '12'
  },
  {
    key: '3',
    name: 'Tốc độ CPU',
    age: '1.30 GHz'
  },
  {
    key: '3',
    name: 'Tốc độ tối đa',
    age: 'Turbo Boost 4.6 GHz'
  },
];
const TableCPUInfor = () => {

  return (
    <Table columns={columns} dataSource={data} pagination={false} />
  )
}

export default TableCPUInfor
