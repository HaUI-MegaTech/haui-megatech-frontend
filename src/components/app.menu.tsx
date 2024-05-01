import React, { useEffect, useState } from 'react'
import { BarsOutlined, PhoneOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Menu, Space } from 'antd';
import styles from '@/styles/menu.module.scss'
import { Baloo_2 } from 'next/font/google';
import handleProducts from '@/api/user.request';
import { Brand, ListBrand } from '@/types/property.types';
import Link from 'next/link';

const baloo = Baloo_2({
	weight: ['400', '500', '600', '700'],
	subsets: ["vietnamese"],
})

const MenuCategories = () => {
	const [listBrand, setListBrand] = useState<ListBrand[]>([]);
	const handleGetListBrands = async () => {
		try {
			let res: any = await handleProducts.getListBrands();
			if (res) {
				let arr = res.items;
				const brands = arr.map((item: Brand) => {
					return ({
						key: item.id,
						label: (
							<Link style={{textDecoration: 'none'}} href={`/search?brand=${item.id}`}><span style={{ padding: '20px 0' }}>{item.name}</span ></Link>
						)
					})
				})
				setListBrand(brands);
			}
		} catch (err) {
			console.log(err);
		}
	}

	useEffect(() => {
		handleGetListBrands();
	}, [])

	const items: MenuProps['items'] = listBrand.slice(0, 5);

	return (
		<div className={styles.container}>
			<div>
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
					mode="horizontal"
					items={items}
				/>
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
