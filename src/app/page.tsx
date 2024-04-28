'use client'
import Banner from '@/components/app.slider';
import ListProduct from '@/components/app.products';
import { useEffect, useState } from 'react';
import handleProducts from '@/api/user.request';
import { Product } from '@/types/property.types';

export default function Home() {
  const [listProduct1, setListProduct1] = useState<Product[]>([]);
  const [listProduct2, setListProduct2] = useState<Product[]>([]);
  const [listProduct3, setListProduct3] = useState<Product[]>([]);
  const [listProduct4, setListProduct4] = useState<Product[]>([]);
  const [listProduct5, setListProduct5] = useState<Product[]>([]);
	const fetchData1 = async () => {
		try {
			let res = await handleProducts.getProductsByBrandId("1");
			if (res && res.items) setListProduct1(res.items);
		} catch (err) {
			console.log(err);
		}
	}
  const fetchData2 = async () => {
		try {
			let res = await handleProducts.getProductsByBrandId("2");
			if (res && res.items) setListProduct2(res.items);
		} catch (err) {
			console.log(err);
		}
	}
  const fetchData3 = async () => {
		try {
			let res = await handleProducts.getProductsByBrandId("3");
			if (res && res.items) setListProduct3(res.items);
		} catch (err) {
			console.log(err);
		}
	}
  const fetchData4 = async () => {
		try {
			let res = await handleProducts.getProductsByBrandId("4");
			if (res && res.items) setListProduct4(res.items);
		} catch (err) {
			console.log(err);
		}
	}
  const fetchData5 = async () => {
		try {
			let res = await handleProducts.getProductsByBrandId("5");
			if (res && res.items) setListProduct5(res.items);
		} catch (err) {
			console.log(err);
		}
	}
	useEffect(() => {
		fetchData1();
		fetchData2();
		fetchData3();
		fetchData4();
		fetchData5();
	}, [])
  return (
    <div>
      <Banner />
      <ListProduct listProduct={listProduct1} title="SẢN PHẨM NỔI BẬT"/>
      <ListProduct listProduct={listProduct2} title="SẢN PHẨM MUA NHIỀU" />
      <ListProduct listProduct={listProduct3} title="SẢN PHẨM SALE MẠNH"/>
      <ListProduct listProduct={listProduct4} title="SẢN PHẨM GIÁ HỜI"/>
      <ListProduct listProduct={listProduct5} title="SẢN PHẨM KÈM QUÀ TẶNG"/>
    </div>
  )
}
