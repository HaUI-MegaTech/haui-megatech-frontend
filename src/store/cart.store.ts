import { createJSONStorage, persist } from 'zustand/middleware';
import { ProductDetail } from '@/types/property.types'
import { create } from 'zustand'
import handleCart from '@/api/cart.request';

export type CartType = {
  quantity: number,
  setQuantityInCart: () => Promise<void>
}

export const useCartStore = create<CartType>()(
  persist(
    (set, get) => (
      {
        quantity: 0,
        setQuantityInCart: async () => {
          try {
            const res = await handleCart.getCart();
            if (res) 
              set({
                quantity: res.items.length
              })
          } catch (err) {
            console.log(err);
          }
        }
      }
    ),
    {
      name: "haui-megatech-cart",
      storage: createJSONStorage(() => localStorage),
      skipHydration: true
    },
  )
)
