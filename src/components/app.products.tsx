'use client'
import AppCard from '@/components/app.card'
import React, { useEffect, useState } from 'react'
import styles from '@/styles/products.module.scss'
import { Menu, MenuProps } from 'antd'
import { Baloo_2 } from 'next/font/google'
import { Brand, ListBrand, ListProductProps } from '@/types/property.types'
import handleProducts from '@/api/user.request'
import Link from 'next/link'
const baloo = Baloo_2({
	weight: ['400', '600'],
	subsets: ["vietnamese"],
})

const ListProduct : React.FC<ListProductProps> = ({ listProduct, title }) => {
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
							<Link href={`/search?brand=${item.id}`}><span className={styles.menuItem}> {item.name}</span ></Link>
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
