import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { Product } from '../types/Product'

// Item do carrinho
type CartItem = {
    product: Product
    quantity: number
}

// Estado do carrinho
type CartState = {
    items: CartItem[]
}

// Estado inicial
const initialState: CartState = {
    items: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<Product>) => {
            const item = state.items.find(
                (i) => i.product.id === action.payload.id
            )

            if (item) {
                item.quantity += 1
            } else {
                state.items.push({
                    product: action.payload,
                    quantity: 1
                })
            }
        },

        removeItem: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter(
                (i) => i.product.id !== action.payload
            )
        }
    }
})

export const { addItem, removeItem } = cartSlice.actions
export default cartSlice.reducer
