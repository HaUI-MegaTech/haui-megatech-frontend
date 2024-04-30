import { createJSONStorage, persist } from 'zustand/middleware';
import { ProductDetail } from '@/types/property.types'
import { create } from 'zustand'

export type ProductState = {
  products: ProductDetail[],
  addProductToCompare: (product: ProductDetail) => void
  removeProductInCompare: (product: ProductDetail) => void
}

export const useProductCompareStore = create<ProductState>()(
  persist(
    (set, get) => ({
      products: [],
      addProductToCompare: (product) => {
        const currentProducts = get().products;
        let index = currentProducts.findIndex(prod => prod.id === product.id);
        if (currentProducts.length >= 3) {
          alert('Xóa bớt danh sách sản phẩm trong danh sách so sánh')
          return;
        } else {
          if (index != -1) {
            alert('Sản phẩm đã có trong danh sách so sánh');
            return;
          }
        }
        set({
          products: [...currentProducts, product]
        });
      },
      removeProductInCompare: (product: ProductDetail) =>
        set(state => ({ products: state.products.filter(prod => prod.id !== product.id) })),
    }),
    {
      name: "haui-megatech-compare",
      storage: createJSONStorage(() => localStorage),
      skipHydration: true
    },
  )
)
