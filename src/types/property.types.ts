export interface Image {
  url?: string,
  id?: string
}
export interface Product {
  mainImageUrl?: string,
  mainImg?: string,
  battery?: string,
  card?: string,
  discountPercent?: string,
  display?: string,
  id?: number,
  name?: string,
  newPrice?: number,
  oldPrice?: number,
  processor?: string,
  ram?: number,
  storage?: string,
  weight?: number,
}
export type ProductDetail = Product & {
  article: string,
  backlitKeyboard?: string,
  batteryCapacity?: string,
  boostFrequency?: string,
  cacheCapacity?: string,
  chargerCapacity?: string,
  colorGamut?: string,
  coolingFan?: string,
  cores?: number,
  currentPrice?: number
  dimensionWeight?: string,
  discountPercent?: number,
  displaySize?: string,
  frequency?: string,
  graphicsCard?: string,
  images?: Array<Image>,
  launchDate?: number,
  material?: string,
  maxMemoryCapacity?: string,
  memoryBus?: string,
  memoryCapacity?: string,
  memoryType?: string,
  miscFeature?: string,
  os?: string,
  panelType?: string,
  processor?: string,
  refreshRate?: string,
  resolution?: string,
  sdCard?: string,
  soundTechnology?: string,
  storage?: string,
  threads?: number,
  touchScreen?: string,
  webcam?: string,
  wirelessConnectivity?: string,
  averageRating: number,
  feedbacksCount: number,
}
export interface ListBrand {
  key?: string,
  label?: string,
}
export interface Brand {
  id?: string,
  name?: string,
  image?: string
}
export interface ListProductProps {
  listProduct?: Product[],
  title?: string
}
export interface Province {
  _id: string
  name: string
  slug: string
  type: string
  name_with_type: string
  code: string
  isDeleted: boolean
}
export type ItemCart = {
  key: number,
  id: number,
  product: Product
  quantity: number;
}
export interface ItemAddCart {
  productId: number,
  quantity: number,
  cartItemId?: number
}
export interface ProductCompare {
  id: number,
  productName: string,
  productImageUrl: string,
  productUrl: string,
  price: string
}
export interface PageMap {
  cse_image: CseImage[]
}
export interface CseImage {
  src: string
}

export interface OrderBody {
  token: string
  shippingCost: number
  subTotal: number
  tax: number
  total: number
  paymentMethod: string
  payTime: string
  orderTime: string
  deliverTime: string
  orderWeight: number
  address: string
  status: string
  orderDetailRequestDTOList: OrderDetailRequestDtoList[]
}

export interface OrderDetailRequestDtoList {
  quantity: number
  productId: number
}

export interface Feedback {
  id: number
  alias: string
  content: string
  rating: number
  whenCreated: string
}

export interface Feedback2 {
  id: number
  alias: string
  content: string
  rating: number
  whenCreated: string
}
