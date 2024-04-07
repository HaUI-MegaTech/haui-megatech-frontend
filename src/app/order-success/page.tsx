import React from 'react'
import styles from './styles.module.scss'
import Image from 'next/image'
import orderImage from '../../../public/images/ordersuccess.jpg'
import ListProduct from '@/components/app.products'

const OrderSuccess = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.imageContainer}>
                    <Image src={orderImage} alt="" className={styles.image} />
                </div>
                <div className={styles.description}>
                    <div className={styles.title}>Bạn đã đặt hàng thành công!</div>
                    <div className={styles.note}>Chúng tôi sẽ giao hàng sớm nhất có thể. Vui lòng chú ý điện thoại của mình</div>
                    <div className={styles.buttons}>
                        <button>Xem thêm</button>
                        <button>Giỏ hàng</button>
                    </div>
                </div>
            </div>
            <div>
                <ListProduct/>
            </div>
        </>
    )
}

export default OrderSuccess
