import { createJSONStorage, persist } from 'zustand/middleware';
import { Product, ProductDetail } from '@/types/property.types'
import { create } from 'zustand'

export type ProductState = {
  productsViewed: Product[],
  addProductViewed: (product: Product) => void
}

export const useProductViewedStore = create<ProductState>()(
  persist(
    (set, get) => ({
      productsViewed: [],
      addProductViewed: (product) => {
        const currentProducts = get().productsViewed;
        let index = currentProducts.findIndex(prod => prod.id === product.id);
        if (currentProducts.length >= 10) {
          currentProducts.shift();
        } else {
          if (index != -1) {
            return;
          }
        }
        set({
          productsViewed: [...currentProducts, product]
        });
      }
    }),
    {
      name: "haui-megatech-viewed",
      storage: createJSONStorage(() => localStorage),
      skipHydration: true
    },
  )
)
