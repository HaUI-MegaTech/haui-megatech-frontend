'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import '@/styles/image.gallery.scss';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Image } from 'antd';
import { Image as ImageType } from '@/types/property.types';

export default function ProductImages({ images }: { images: ImageType[] }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  console.log(images);
  return (
    <>
      <Swiper
        style={{
          '--swiper-pagination-color': '#fff'
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {images?.map((item) => (
          <SwiperSlide key={item.id}>
            <Image
              // width={200}
              src={item.link}
              alt="image"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {images?.map((item) => (
          <SwiperSlide key={item.id}>
            <Image
              // width={200}
              src={item.link}
              alt="image"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
