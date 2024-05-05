'use client'
import React, { useEffect } from 'react'
import styles from './styles.module.scss'
import AppCard from '@/components/app.card'
import TableCPUInfor from '@/components/product/tableCPU.info'
import TableCPUCompare from '@/components/product/compare/tableCPUCompare.info'
import { useProductCompareStore } from '@/store/product.compare.store'
import TableMonitorInfor from '@/components/product/tableMonitor.info'
import TableRAM from '@/components/product/tableRAM.info'
import { Image } from 'antd'
import { CloseCircleOutlined } from '@ant-design/icons'
import handleProducts from '@/api/user.request'
import { ProductDetail } from '@/types/property.types'

const ComparePage = ({ product }: { product: ProductDetail }) => {
  const productsList = useProductCompareStore(state => state.products);
  const removeProductCompare = useProductCompareStore(state => state.removeProductInCompare);
  useEffect(() => {
    useProductCompareStore.persist.rehydrate();
  }, []);
  // const handleGetProductFromOtherWebsites = async () => {
  //   try {
  //     const res = await handleProducts.getProductsFromOtherWebsites(product.name);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.topLeft}>
          <div className={styles.title}>So sánh sản phẩm</div>
          <div className={styles.images}>
            {productsList?.map((item) => {
              return <div key={item.id}>
                <div
                  onClick={() => removeProductCompare(productsList[0])}
                  className={styles.right}><CloseCircleOutlined /></div>
                <Image src={item?.images[0]?.url} alt="" />
              </div>
            })}
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <TableCPUCompare products={productsList} />
        <TableMonitorInfor products={productsList} />
        <TableRAM products={productsList} />
      </div>
    </div>
  )
}

export default ComparePage
