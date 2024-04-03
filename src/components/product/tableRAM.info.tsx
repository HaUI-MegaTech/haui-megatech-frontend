import { Space, Table, TableProps, Tag } from 'antd';
import React from 'react'
interface DataType {
    key: string;
    name: string;
    age: string;
}
const columns: TableProps<DataType>['columns'] = [
    {
        title: <span style={{ fontSize: '18px' }}>Bộ nhớ RAM, ổ cứng</span>,
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
        name: 'RAM',
        age: '8 GB'
    },
    {
        key: '2',
        name: 'Loại RAM',
        age: 'DDR4 2 khe (1 khe 8 GB onboard + 1 khe trống)'
    },
    {
        key: '3',
        name: 'Tốc độ bus RAM',
        age: '3200 MHz'
    },
    {
        key: '3',
        name: 'Hỗ trợ RAM tối đa',
        age: '24 GB'
    },
    {
        key: '3',
        name: 'Ổ cứng',
        age: '512 GB SSD NVMe PCIe 4.0 (Có thể tháo ra, lắp thanh khác tối đa 1 TB)'
    },
];
const TableRAMInfor = () => {

    return (
        <Table columns={columns} dataSource={data} pagination={false} />
    )
}

export default TableRAMInfor