'use client'
import React, { useEffect, useRef, useState } from 'react'
import styles from '@/styles/product.card.horizontal.module.scss'
import Image from 'next/image'
import { Input, Rate } from 'antd'
import { EnvironmentTwoTone } from '@ant-design/icons'

const ProductCardHorizontal = () => {
    return (
        <>
            {/* address */}
            <div className={styles.addressContainer}>
                <div className={styles.border}></div>
                <div>
                    <span className={styles.addressName}>
                        <EnvironmentTwoTone />
                        Địa chỉ nhận hàng
                    </span>
                    <div className={styles.address}>
                        <div>
                            <b>Minh Anh <br /> (+84) 5562763287</b>
                        </div>
                        <div>Ký Túc Xá Đh Công Nghiệp Hà Nội Cs 1, Ngõ 296 đường cầu diễn, Phường Minh Khai, Quận Bắc Từ Liêm, Hà Nội</div>
                        <div>Thay đổi</div>
                    </div>
                </div>
                <div className={styles.border}></div>
            </div>
            {/* list order */}
            <div className={styles.container}>
                <div className={styles.cards}>
                    <div className={styles.card}>
                        <div>
                            <Image
                                width={100}
                                height={100}
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWS5WosKs79XqVWqqKINh3jLiS_qLy49PIlg&usqp=CAU" alt="" />
                        </div>
                        <div className={styles.name}>
                            <h1>[New 100%] Laptop Lenovo LOQ 15IAX9 83GS000FVN - Intel Core i5-12450HX | RTX 2</h1>
                            <Rate count={5} />
                        </div>
                        <div><b>Giá:</b> <span style={{ color: '#007aff' }}>12.000.000đ</span></div>
                        <div>
                            <b >Số lượng:</b> <span style={{ color: '#007aff' }}>5</span>
                        </div>
                        <div>
                            <b>Thành tiền:</b> <span style={{ color: '#007aff' }}>60.000.000đ</span>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div>
                            <Image
                                width={100}
                                height={100}
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWS5WosKs79XqVWqqKINh3jLiS_qLy49PIlg&usqp=CAU" alt="" />
                        </div>
                        <div className={styles.name}>
                            <h1>[New 100%] Laptop Lenovo LOQ 15IAX9 83GS000FVN - Intel Core i5-12450HX | RTX 2</h1>
                            <Rate count={5} />
                        </div>
                        <div><b>Giá:</b> <span style={{ color: '#007aff' }}>12.000.000đ</span></div>
                        <div>
                            <b >Số lượng:</b> <span style={{ color: '#007aff' }}>5</span>
                        </div>
                        <div>
                            <b>Thành tiền:</b> <span style={{ color: '#007aff' }}>60.000.000đ</span>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div>
                            <Image
                                width={100}
                                height={100}
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWS5WosKs79XqVWqqKINh3jLiS_qLy49PIlg&usqp=CAU" alt="" />
                        </div>
                        <div className={styles.name}>
                            <h1>[New 100%] Laptop Lenovo LOQ 15IAX9 83GS000FVN - Intel Core i5-12450HX | RTX 2</h1>
                            <Rate count={5} />
                        </div>
                        <div><b>Giá:</b> <span style={{ color: '#007aff' }}>12.000.000đ</span></div>
                        <div>
                            <b >Số lượng:</b> <span style={{ color: '#007aff' }}>5</span>
                        </div>
                        <div>
                            <b>Thành tiền:</b> <span style={{ color: '#007aff' }}>60.000.000đ</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.ship}>
                <div className={styles.message}>
                    <div className={styles.titleMessage}>Lời nhắn:</div>
                    <Input placeholder='Lời nhắn cho người bán' />
                </div>
                <div className={styles.brand}>
                    <div>Đơn vị vận chuyển: </div>
                    <div>
                        <b style={{ color: 'blue' }}>Nhanh</b><br />
                        <i>Nhận hàng vào thứ 7</i>
                    </div>
                    <div styles={{ color: 'blue' }}>12.800đ</div>
                </div>
            </div>

            <div className={styles.pay}>
                <div className={styles.way}>
                    <div className={styles.wayTitle}>Phương thức thanh toán</div>
                    <div className={styles.wayMain}>
                        <div>Thanh toán khi nhận hàng</div>
                        <div>Thay đổi</div>
                    </div>
                </div>
                <div className={styles.totalContainer}>
                    <div>Tổng tiền hàng: 123.000đ</div>
                    <div>Phí vận chuyển: 12.800đ</div>
                    <div>Tổng thanh toán: <span className={styles.total}>123.000đ</span></div>
                </div>
                <div>
                    <button>Đặt hàng</button>
                </div>
            </div>
        </>
    )
}

export default ProductCardHorizontal