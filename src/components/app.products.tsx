import AppCard from '@/components/app.card'
import React from 'react'
import styles from '@/styles/products.module.scss'
import { Menu, MenuProps } from 'antd'
import { Baloo_2 } from 'next/font/google'
const baloo = Baloo_2({
	weight: ['400', '600'],
	subsets: ["vietnamese"],
})

const items: MenuProps['items'] = [
	{
		label: (
			<span className={styles.menuItem}>Macbook</span>
		),
		key: '1',
	},
	{
		label: (
			<span className={styles.menuItem}>Asus</span>
		),
		key: '2',
	},
	{
		label: (
			<span className={styles.menuItem}>Dell</span>
		),
		key: '3',
	},
	{
		label: (
			<span className={styles.menuItem}>Acer</span>
		),
		key: '4',
	},
	{
		label: (
			<span className={styles.menuItem}>Xem thêm</span>
		),
		key: '5',
	},
];

const ListProduct = () => {
	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<span className={styles.title}>SẢN PHẨM NỔI BẬT</span>
				<div className={styles.menu}>
					<Menu
						className={baloo.className}
						style={{ fontSize: '17px', gap: '18px' }}
						// onClick={onClick} 
						// selectedKeys={[current]} 
						mode="horizontal"
						items={items} />
				</div>
			</div>
			<div className={styles.listProduct}>
				<AppCard />
				<AppCard />
				<AppCard />
				<AppCard />
				<AppCard />
				<AppCard />
			</div>
		</div>
	)
}

export default ListProduct
