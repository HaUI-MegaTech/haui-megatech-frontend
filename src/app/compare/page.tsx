'use client'
import React from 'react'
import styles from './styles.module.scss'
import AppCard from '@/components/app.card'
import TableCPUInfor from '@/components/product/tableCPU.info'
import TableCPUCompare from '@/components/product/compare/tableCPUCompare.info'

const ComparePage = () => {
  return (
    <div className={styles.container}>
        <div className={styles.top}>
            <div className={styles.topLeft}>
                <div className={styles.title}>So sánh sản phẩm</div>
                <div>Laptop Dell 7020 &<br/> Laptop Asus gaming &<br/> Laptop Asus gaming</div>
            </div>
            <div className={styles.topRight}>
                <AppCard/>
                <AppCard/>
                <AppCard/>
            </div>
        </div>
        <div className={styles.bottom}>
            <TableCPUCompare />
            <TableCPUCompare />
            <TableCPUCompare />
            <TableCPUCompare />
            <TableCPUCompare />
        </div>
    </div>
  )
}

export default ComparePage