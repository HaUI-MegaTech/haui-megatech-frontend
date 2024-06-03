/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import handleProducts from '@/api/user.request';
import ListProduct from '@/components/app.products';
import ReviewCard from '@/components/product/review.card';
import { Feedback, Image, ProductDetail } from '@/types/property.types';
import React, { useEffect, useState } from 'react'
import ProductImages from '@/components/product/image.gallery'
import styles from "../styles.module.scss"
import { InputNumber, Progress, Rate, Tag, notification } from 'antd'
import { CheckCircleTwoTone, DollarTwoTone, PlusCircleOutlined, RollbackOutlined } from '@ant-design/icons'
import TableCPUInfor from '@/components/product/tableCPU.info'
import { useProductCompareStore } from '@/store/product.compare.store';
import { useProductViewedStore } from '@/store/product.viewed.store';
import handleCart from '@/api/cart.request';
import Link from 'next/link';
import { useCartStore } from '@/store/cart.store';
import handleFeedback from '@/api/feedback.request';

const ProductDetailPage = ({ params }: { params: { id: string } }) => {
  const [productInfo, setProductInfo] = useState<ProductDetail>();
  const [feedback, setFeedback] = useState<Feedback[]>();
  const [arrImg, setArrImg] = useState<Image[]>();
  const [quantityAddToCart, setQuantityAddToCart] = useState<number>(1);
  const productsViewed = useProductViewedStore(state => state.productsViewed);
  const handleGetDetailProduct = async () => {
    try {
      let res = await handleProducts.getProductById(params.id);
      if (res) {
        let data = res.data;
        if (data.id) {
          await handleGetFeedback(data.id)
        }
        setProductInfo(data);
        setArrImg(data.images);
      }
    } catch (err) {
      console.log(err);
    }
  }
  const handleGetFeedback = async (id: number) => {
    try {
      let res = await handleFeedback.getFeedbackByProductId(id);
      if (res) {
        setFeedback(res.data);
      }
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    handleGetDetailProduct();
    useCartStore.persist.rehydrate();
    document.title = 'Chi tiết sản phẩm'
  }, [])

  const addProductCompare = useProductCompareStore(state => state.addProductToCompare);
  const productList = useProductCompareStore(state => state.products);
  const [listCompare, setListCompare] = useState<ProductDetail[]>();
  const setQuantityProductInCart: () => Promise<void> = useCartStore(state => state.setQuantityInCart);
  const handleAddToCompareList = () => {
    if (productInfo) {
      addProductCompare(productInfo);
    }
  }
  const openNotification = (message: string) => {
    notification.open({
      message: 'Thông báo',
      description: `${message}`,
    });
  };
  const handleAddToCart = async () => {
    try {
      const res = await handleCart.addToCart({
        productId: productInfo?.id,
        quantity: quantityAddToCart
      })
      if (res) {
        openNotification('Thêm sản phẩm vào giỏ hàng thành công')
        setQuantityProductInCart();
      }
    } catch (err) {
      console.log(err);
    }
  }
  const onChangeQuantityAddToCart = (e: number) => {
    setQuantityAddToCart(e)
  }
  useEffect(() => {
    useProductCompareStore.persist.rehydrate()
    useProductViewedStore.persist.rehydrate()
  }, [])
  return (
    <div>
      <div className={styles.inforTop}>
        <div className={styles.image}>
          {arrImg && <ProductImages images={arrImg} />}
        </div>
        <div className={styles.content}>
          <div className={styles.contentTop}>
            <span>Hãng: <span className={styles.brand}><Link style={{ textDecoration: 'none' }} href={`/search?brand=${productInfo?.brand.id}`}>{productInfo?.brand.name}</Link></span></span>
            <h1>{productInfo?.name}</h1>
            <div>
              <Rate disabled value={Number(productInfo?.averageRating.toFixed(1))} /> ({productInfo?.feedbacksCount}) | Đã bán: {productInfo?.totalSold}
            </div>
            <div className={styles.price}>
              <span>{(new Intl.NumberFormat('vi-VN').format(productInfo?.currentPrice))}đ</span>
            </div>

            <p>Tình trạng: <Tag color="green">còn hàng</Tag></p>

            <div className={styles.quantity}>
              Số lượng:
              <InputNumber min={1} max={10} defaultValue={1}
                onChange={(e) => onChangeQuantityAddToCart(e)}
              />
            </div>

            <div className={styles.buttons}>
              <div>
                <button onClick={handleAddToCart} className={styles.add}>Thêm vào giỏ hàng</button>
              </div>
              <div>
                <button className={styles.buy}>Mua Ngay</button>
              </div>
            </div>
            <div
              onClick={handleAddToCompareList}
              className={styles.compare}>
              Thêm vào danh sách so sánh
              <PlusCircleOutlined twoToneColor="green" />
            </div>
            <div className={styles.compare}>
              <Link style={{ textDecoration: 'none', color: 'black' }} href={`/compare-with-others?id=${productInfo?.id}`}>So sánh giá với sản phẩm trên website khác</Link>
              <PlusCircleOutlined twoToneColor="green" />
            </div>
          </div>
          <div className={styles.contentBottom}>
            <div className={styles.titleInfo}>An tâm mua sắm</div>
            <ul>
              <li><CheckCircleTwoTone /> Được mở hộp kiểm tra khi nhận hàng</li>
              <li><RollbackOutlined /> Được hoàn tiền 111% nếu hàng giả</li>
              <li><DollarTwoTone /> Đổi trả miễn phí trong 7 ngày nếu sản phẩm lỗi</li>
            </ul>
          </div>
          <div className={styles.contentBottom}>
            <div className={styles.titleInfo}>Mô tả chi tiết sản phẩm</div>
            <div className={styles.description} dangerouslySetInnerHTML={{ __html: productInfo?.article }}>
              {/* {productInfo?.article} */}
            </div>
          </div>
          <div className={styles.contentBottom}>
            <div className={styles.titleInfo}>Thông số kỹ thuật</div>
            <TableCPUInfor />
          </div>
        </div>
      </div>
      <div className={styles.review}>
        <div className={styles.titleReview}>
          Khách hàng đánh giá
        </div>
        <div className={styles.overviewContainer}>
          <p>Tổng quan</p>
          <div className={styles.rateTotal}>
            {productInfo?.averageRating.toFixed(1)} <Rate className={styles.rateDetail} allowHalf value={Number(productInfo?.averageRating)} />
            <p className={styles.numberOfReviews}>({productInfo?.feedbacksCount} đánh giá)</p>
          </div>
          <table className={styles.tableOverview}>
            <tbody>
              <tr>
                <td><Rate className={styles.rateDetail} defaultValue={5} /></td>
                <td className={styles.progressCol}><Progress percent={50} showInfo={false} /></td>
                <td>(336)</td>
              </tr>
              <tr>
                <td><Rate className={styles.rateDetail} defaultValue={5} /></td>
                <td><Progress percent={50} showInfo={false} /></td>
                <td>(336)</td>
              </tr>
              <tr>
                <td><Rate className={styles.rateDetail} defaultValue={5} /></td>
                <td><Progress percent={50} showInfo={false} /></td>
                <td>(336)</td>
              </tr>
              <tr>
                <td><Rate className={styles.rateDetail} defaultValue={5} /></td>
                <td><Progress percent={50} showInfo={false} /></td>
                <td>(336)</td>
              </tr>
              <tr>
                <td><Rate className={styles.rateDetail} defaultValue={5} /></td>
                <td><Progress percent={50} showInfo={false} /></td>
                <td>(336)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          {
            feedback?.map((item) => {
              return <ReviewCard key={item.id} feedback={item} />
            })
          }
        </div>
      </div>
      <div className={styles.relateProduct}>
        <ListProduct listProduct={productsViewed} title="SẢN PHẨM ĐÃ XEM" />
      </div>
    </div >
  )
}

export default ProductDetailPage
