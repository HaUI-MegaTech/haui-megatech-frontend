import ProductCardHorizontal from '@/components/product/product.card.horizontal'
import React from 'react'
import styles from './styles.module.scss'

const OrderPage = () => {
    return (
        <div className={styles.container}>
            <ProductCardHorizontal />
        </div>
    )
}

export default OrderPage