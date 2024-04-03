// Images
import { StaticImageData } from 'next/image';
import first from '../../public/images/banner-1.jpg'
import second from '../../public/images/banner-2.jpg'
import forth from '../../public/images/banner-3.png'
import third from '../../public/images/banner.jpg'
interface ImageItem {
  src: StaticImageData;
  alt: string;
}
export const images: ImageItem[] = [
  { src: third, alt: 'First' },
  { src: first, alt: 'Second' },
  { src: second, alt: 'Third' },
  { src: forth, alt: 'Fourth' }
]
