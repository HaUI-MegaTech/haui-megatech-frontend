import React from 'react'
import { AppstoreOutlined, BarsOutlined, DownOutlined, MailOutlined, PhoneOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Menu, Space } from 'antd';
import styles from '@/styles/menu.module.scss'
import { Baloo_2 } from 'next/font/google';

const baloo = Baloo_2({
    weight: ['400', '500', '600', '700'],
    subsets: ["vietnamese"],
})

const items: MenuProps['items'] = [
    {
        label: (
            <span style={{ padding: '20px 0' }}>Macbook</span>
        ),
        key: '1',
    },
    {
        label: (
            <span>Asus</span>
        ),
        key: '2',
        children: [
            {
                label: (
                    <span>Asus Series</span>
                ),
                key: '11',
            },
            {
                label: (
                    <span>Asus Gaming</span>
                ),
                key: '12',
            },
            {
                label: (
                    <span>Asus Văn phòng</span>
                ),
                key: '13',
            },
        ]
    },
    {
        label: (
            <span>Dell</span>
        ),
        key: '3',
    },
    {
        label: (
            <span>Acer</span>
        ),
        key: '4',
    },
    {
        label: (
            <span>Think book</span>
        ),
        key: '5',
        children: [
            {
                label: (
                    <span>Asus Series</span>
                ),
                key: '51',
            },
            {
                label: (
                    <span>Asus Gaming</span>
                ),
                key: '52',
            },
            {
                label: (
                    <span>Asus Văn phòng</span>
                ),
                key: '53',
            },
        ]
    },
];

const MenuCategories = () => {
    return (
        <div className={styles.container}>
            <div className='dropDown'>
                <Dropdown menu={{ items }}>
                    <a
                    //onClick={(e) => e.preventDefault()}
                    >
                        <Space
                            style={{
                                background: '#007aff',
                                color: 'white',
                                padding: '10px 20px',
                                fontWeight: '500',
                                borderRadius: '10px'
                            }}
                        >
                            <BarsOutlined />
                            DANH MỤC SẢN PHẨM
                        </Space>
                    </a>
                </Dropdown>
            </div>
            <div className={styles.main}>
                <Menu
                    className={baloo.className}
                    style={{ fontSize: '17px', gap: '18px' }}
                    // onClick={onClick} 
                    // selectedKeys={[current]} 
                    mode="horizontal" items={items} />
            </div>
            <div className={styles.phone}>
                <PhoneOutlined style={{ fontSize: '30px' }} />
                <div className={styles.content}>
                    <span className={styles.number}>1900 - 888</span>
                    <span className={styles.text}>Hỗ trợ 24/7</span>
                </div>

            </div>
        </div>
    )
}

export default MenuCategories