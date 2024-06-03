'use client'
import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { Button, Image, InputNumber, Table } from 'antd';
import Link from 'next/link';
import type { TableColumnsType } from 'antd';
import { useProductViewedStore } from '@/store/product.viewed.store';
import ListProduct from '@/components/app.products';
import handleCart from '@/api/cart.request';
import { ItemCart } from '@/types/property.types';
import { useCartStore } from '@/store/cart.store';
import handlePayment from '@/api/payment.request';
import { useRouter } from 'next/navigation';

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
  const router = useRouter();

  const onSelectChange = (newSelectedRowKeys: number[], selectedRows: ItemCart[]) => {
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
    document.title = 'Giỏ hàng'
  }, [])

  const [cartItems, setCartItems] = useState();
  const handleGetCartItems = async () => {
    try {
      const res: any = await handleCart.getCart();
      if (res) {
        const updatedCartItems = res.data.map((item: ItemCart) => ({
          ...item,
          key: item.id, // Thêm trường "key" với giá trị là index
        }));
        setCartItems(updatedCartItems);
      }
    } catch (err) {
      console.log(err);
    }
  }
  const setQuantityProductInCart: () => Promise<void> = useCartStore(state => state.setQuantityInCart);

  const handleUpdateCartItem = async (e: any, item: ItemCart) => {
    try {
      console.log(e, item);
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
    console.log({data});
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
      return item.id
    })
    let data = dataOrder.join(',')
    console.log(data);
    // localStorage.setItem('haui-megatech-order-list', JSON.stringify(dataOrder));
    try {
      const res: any = await handlePayment.createPayment(data);
      if (res && res.meta.success === true) {
        router.push(res.url);
      }
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
