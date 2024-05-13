'use client'
import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { ProductCompare } from '@/types/property.types'
import AppCard from '@/components/app.card'
import { useSearchParams } from 'next/navigation'
import ProductCardCompare from '@/components/product/product.card.compare'
import handleProducts from '@/api/user.request'

const CompareProductWithOtherWebs = () => {
  const searchParams = useSearchParams();
  const productId: string | any = searchParams.get('id');
  const [product, setProduct] = useState<ProductCompare>();
  const handleGetProduct = async () => {
    try {
      const res = await handleProducts.getProductById(productId);
      if (res) {
        console.log(res);
        const res2 = await handleProducts.getProductsFromOtherWebsites(res.item?.name);
        if (res2) {
          setProduct(res2.items);
        }
      }
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    handleGetProduct();
    document.title = 'So sánh giá'
  }, [])
  return (
    <div className={styles.container}>
      <div className={styles.title}>So sánh giá</div>
      <div className={styles.content}>
        {product?.map((item: ProductCompare) => {
          if (item.title && item.price)
          return <ProductCardCompare key={item.title} product={item} />
        })}
      </div>
    </div>
  )
}

export default CompareProductWithOtherWebs
