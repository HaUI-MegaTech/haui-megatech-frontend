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
export interface ProductDetail {
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
  id?: number,
  images?: Array<Image>,
  launchDate?: number,
  material?: string,
  maxMemoryCapacity?: string,
  memoryBus?: string,
  memoryCapacity?: string,
  memoryType?: string,
  miscFeature?: string,
  name?: string,
  oldPrice?: number,
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
export interface ItemCart {
  key: number,
  cartItemId: number,
  product: {
    mainImageUrl: string,
    name: string,
    currentPrice: number,
    oldPrice: number
  };
  quantity: number;
}
export interface ItemAddCart {
  productId: number,
  quantity: number,
  cartItemId?: number
}
