'use client'
import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { Button, Image, Input, InputNumber, Table } from 'antd';
import Link from 'next/link';
import type { TableColumnsType } from 'antd';
import { useProductViewedStore } from '@/store/product.viewed.store';
import ListProduct from '@/components/app.products';
import handleCart from '@/api/cart.request';
import handleOrder from '@/api/order.request';
import { ItemCart, OrderBody } from '@/types/property.types';
import { Noto_Sans_Wancho } from 'next/font/google';
import { useCartStore } from '@/store/cart.store';

const Cart = () => {
  const columns: TableColumnsType<ItemCart> = [
    {
      title: 'Ảnh',
      dataIndex: 'product',
      width: '15%',
      render: (text) => <Image width={100} src={text.mainImageUrl} alt="" />,
    },
    {
      title: 'Tên sản phẩm',
      dataIndex: 'product',
      width: '32%',
      render: (text, record) => <Link href={`/product/${record.id}`}><span style={{ fontWeight: '500', color: '#007aff', cursor: 'pointer', fontSize: '16px' }}>{text.name}</span></Link>,
    },
    {
      title: 'Giá',
      dataIndex: 'product',
      width: '18%',
      render: (text) => <span style={{ fontWeight: '500', fontSize: '17px' }}>{(new Intl.NumberFormat('vi-VN').format(text.currentPrice))} đ</span>
    },
    {
      title: 'Số lượng',
      dataIndex: 'quantity',
      render: (text, record) => <InputNumber min={1} defaultValue={record.quantity} onChange={(e) => handleUpdateCartItem(e, record)} />,
    },
    {
      title: 'Thành tiền',
      dataIndex: 'product',
      width: '20%',
      render: (text, record) => <span style={{ fontWeight: '500', fontSize: '17px' }}>{(new Intl.NumberFormat('vi-VN').format(text.currentPrice * record.quantity))} đ</span>
    },
  ];
  const [selectedRowKeys, setSelectedRowKeys] = useState<number[]>([]);
  const [selectedRows, setSelectedRows] = useState<ItemCart[]>([]);

  const onSelectChange = (newSelectedRowKeys: number[], selectedRows: ItemCart[]) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys, selectedRows);
    setSelectedRowKeys(newSelectedRowKeys);
    setSelectedRows(selectedRows);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;
  const productsInCart = useProductViewedStore(state => state.productsViewed);

  useEffect(() => {
    useProductViewedStore.persist.rehydrate();
    useCartStore.persist.rehydrate();
    handleGetCartItems();
  }, [])

  const [cartItems, setCartItems] = useState();
  const handleGetCartItems = async () => {
    try {
      const res = await handleCart.getCart();
      if (res) {
        const updatedCartItems = res.items.map((item, index) => ({
          ...item,
          key: index, // Thêm trường "key" với giá trị là index
        }));
        setCartItems(updatedCartItems);
      }
    } catch (err) {
      console.log(err);
    }
  }
  const setQuantityProductInCart: () => Promise<void> = useCartStore(state => state.setQuantityInCart);

  const handleUpdateCartItem = async (e, item) => {
    try {
      console.log(e, item.id);
      const res = await handleCart.updateItem({
        cartItemId: item.id,
        productId: item.product.id,
        quantity: e
      },)
      if (res) {
        console.log(res);
        handleGetCartItems();
        setQuantityProductInCart();
      }
    } catch (err) {
      console.log(err);
    }
  }

  const handleDeleteCartItems = async () => {
    const ids = selectedRows.map((item) => item.id);
    let data = ids.join(",");
    console.log("data", data);
    try {
      const res = await handleCart.deleteItems(data);
      if (res) {
        console.log('Xóa thành công');
        setQuantityProductInCart();
        handleGetCartItems();
      }
    } catch (err) {
      console.log(err);
    }
  }

  const handlePlaceOrder = async () => {
    console.log(selectedRows);
    const dataOrder = selectedRows.map((item: ItemCart) => {
      return {
        productId: item.product.id,
        quantity: item.quantity
      }
    })
    const data: OrderBody = {
      token: localStorage.getItem('token'),
      shippingCost: 12000,
      subTotal: 1000,
      tax: 10,
      total: 100,
      paymentMethod: "TIEN_MAT",
      payTime: "2024-05-06T11:24:25.904Z",
      orderTime: "2024-05-06T11:24:25.904Z",
      deliverTime: "2024-05-06T11:24:25.904Z",
      orderWeight: 10,
      address: "Ha Noi",
      status: "NEW",
      orderDetailRequestDTOList: dataOrder
    }
    try {
      const res = await handleOrder.placeOrder(data);
      if (res) console.log(res);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>Giỏ hàng</div>
        <div className={styles.subTitle}>
          {hasSelected ?
            <>
              <Button onClick={handleDeleteCartItems}>Xóa {selectedRowKeys.length} sản phẩm ?</Button>
            </>
            :
            ''
          }
        </div>
        <div>
          <Table
            rowSelection={rowSelection}
            columns={columns}
            dataSource={cartItems}
            pagination={{ defaultPageSize: 5, showSizeChanger: true }}
          />
        </div>
        <div className={styles.btnOrder}>
          <button onClick={handlePlaceOrder}>Mua hàng</button>
        </div>
      </div>
      <div className={styles.relateProduct}>
        <ListProduct listProduct={productsInCart} title="CÓ THỂ BẠN CŨNG THÍCH" />
      </div>
    </>
  )
}

export default Cart
