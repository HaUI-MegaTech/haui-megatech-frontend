'use client'
import AppCard from '@/components/app.card'
import React, { useEffect, useState } from 'react'
import styles from '@/styles/products.module.scss'
import { Menu, MenuProps } from 'antd'
import { Baloo_2 } from 'next/font/google'
import { useSearchParams } from 'next/navigation'
const baloo = Baloo_2({
	weight: ['400', '600'],
	subsets: ["vietnamese"],
})
interface Product {
	bannerImg: string,
	battery: string,
	card: string,
	discountPercent: string,
	display: string,
	id: number,
	name: string,
	newPrice: number,
	oldPrice: number,
	processor: string,
	ram: number,
	storage: string,
	weight: number,
}
interface ListProductProps {
  listProduct: Product[],
	title: string
}
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

const ListProduct : React.FC<ListProductProps> = ({ listProduct, title }) => {
	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<span className={styles.title}>{title}</span>
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
				{
					listProduct?.map((item) => {
						return (
							<AppCard key={item.id} product={item} />
						)
					})
				}
			</div>
		</div>
	)
}

export default ListProduct
