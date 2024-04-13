'use client'
import Banner from '@/components/app.slider';
import ListProduct from '@/components/app.products';
import { useEffect, useState } from 'react';

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

export default function Home() {
  const [listProduct1, setListProduct1] = useState<Product[]>([]);
  const [listProduct2, setListProduct2] = useState<Product[]>([]);
  const [listProduct3, setListProduct3] = useState<Product[]>([]);
  const [listProduct4, setListProduct4] = useState<Product[]>([]);
  const [listProduct5, setListProduct5] = useState<Product[]>([]);
	const fetchData1 = async () => {
		const res = await fetch("http://localhost:8080/api/v1/products?pageIndex=1");
		const data = await res.json();
		console.log(data.items);
		setListProduct1(data.items);
	}
  const fetchData2 = async () => {
		const res = await fetch("http://localhost:8080/api/v1/products?pageIndex=2");
		const data = await res.json();
		console.log(data.items);
		setListProduct2(data.items);
	}
  const fetchData3 = async () => {
		const res = await fetch("http://localhost:8080/api/v1/products?pageIndex=3");
		const data = await res.json();
		console.log(data.items);
		setListProduct3(data.items);
	}
  const fetchData4 = async () => {
		const res = await fetch("http://localhost:8080/api/v1/products?pageIndex=4");
		const data = await res.json();
		console.log(data.items);
		setListProduct4(data.items);
	}
  const fetchData5 = async () => {
		const res = await fetch("http://localhost:8080/api/v1/products?pageIndex=5");
		const data = await res.json();
		console.log(data.items);
		setListProduct5(data.items);
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
