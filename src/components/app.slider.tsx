'use client'
import Image, { StaticImageData } from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { images } from '@/lib/images'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import styles from '@/styles/banner.module.scss'

interface ImageItem {
	src: StaticImageData;
	alt: string;
}

const Banner = (): JSX.Element => {
	return (
		<div className={styles.container}>
			<div className={styles.left}>
				<p className={styles.shops}>DANH SÁCH CỬA HÀNG</p>
				<Swiper
					slidesPerView={2}
					direction={'vertical'}
					pagination={{
						clickable: true,
					}}
					modules={[Pagination, Autoplay]}
					className={styles.leftSlide}
					autoplay={{ delay: 2000 }}
				>
					<SwiperSlide>
						<div className={styles.shop}>
							<span className={styles.name}>198 Hồ Tùng Mậu, Cầu Giấy, Hà Nội</span>
							<p className={styles.number}>Zalo: 09876785432</p>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className={styles.shop}>
							<span className={styles.name}>198 Hồ Tùng Mậu, Cầu Giấy, Hà Nội</span>
							<p className={styles.number}>Zalo: 09876785432</p>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className={styles.shop}>
							<span className={styles.name}>198 Hồ Tùng Mậu, Cầu Giấy, Hà Nội</span>
							<p className={styles.number}>Zalo: 09876785432</p>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className={styles.shop}>
							<span className={styles.name}>198 Hồ Tùng Mậu, Cầu Giấy, Hà Nội</span>
							<p className={styles.number}>Zalo: 09876785432</p>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className={styles.shop}>
							<span className={styles.name}>198 Hồ Tùng Mậu, Cầu Giấy, Hà Nội</span>
							<p className={styles.number}>Zalo: 09876785432</p>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className={styles.shop}>
							<span className={styles.name}>198 Hồ Tùng Mậu, Cầu Giấy, Hà Nội</span>
							<p className={styles.number}>Zalo: 09876785432</p>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
			<div className={styles.right}>
				<Swiper
					navigation
					modules={[Navigation, Pagination, Autoplay]}
					onSwiper={swiper => console.log(swiper)}
					className={styles.rightSlide}
					autoplay={{ delay: 5000 }}
				>
					{images.map((image: ImageItem, index: number) => (
						<SwiperSlide key={index}>
							<div
								className={styles.imageContainer}
							>
								<Image
									src={image.src}
									alt={image.alt}
									className={styles.image}
								/>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	)
}

export default Banner;
