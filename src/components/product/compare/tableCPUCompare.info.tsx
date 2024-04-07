import { Table, TableProps } from 'antd';
import React from 'react'
interface DataType {
    key: string;
    name: string;
    laptop_1: string;
    laptop_2: string;
    laptop_3: string;
}
const columns: TableProps<DataType>['columns'] = [
    {
        title: <span style={{fontSize: '18px'}}>Bộ xử lý</span>,
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a style={{ fontWeight: 500 }}>{text}</a>,
        width: '250px'

    },
    {
        title: 'Laptop 1',
        dataIndex: 'laptop_1',
        key: 'laptop_1',
    },
    {
        title: 'Laptop 2',
        dataIndex: 'laptop_2',
        key: 'laptop_2',
    },
    {
        title: 'Laptop 3',
        dataIndex: 'laptop_3',
        key: 'laptop_3',
    },
];
const data: DataType[] = [
    {
        key: '1',
        name: 'Công nghệ CPU',
        laptop_1: 'Intel Core i5 Raptor Lake - 1335U',
        laptop_2: 'Intel Core i5 Raptor Lake - 1335U',
        laptop_3: 'Intel Core i5 Raptor Lake - 1335U',
    },
    {
        key: '2',
        name: 'Số nhân',
        laptop_1: '10',
        laptop_2: '10',
        laptop_3: '10',
    },
    {
        key: '3',
        name: 'Số luồng',
        laptop_1: '12',
        laptop_2: '12',
        laptop_3: '12',
    },
    {
        key: '3',
        name: 'Tốc độ CPU',
        laptop_1: '1.30 GHz',
        laptop_2: '1.30 GHz',
        laptop_3: '1.30 GHz',
    },
    {
        key: '3',
        name: 'Tốc độ tối đa',
        laptop_1: 'Turbo Boost 4.6 GHz',
        laptop_2: 'Turbo Boost 4.6 GHz',
        laptop_3: 'Turbo Boost 4.6 GHz',
    },
];
const TableCPUCompare = () => {

    return (
        <Table columns={columns} dataSource={data} pagination={false} style={{overflowX: 'auto'}}/>
    )
}

export default TableCPUCompare