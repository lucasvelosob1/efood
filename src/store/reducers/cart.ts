import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Product } from '../../models/Product'

type Step = 'cart' | 'delivery' | 'payment' | 'confirmed'

type CartState = {
  items: Product[]
  isOpen: boolean
  step: Step
}

const initialState: CartState = {
  items: [],
  isOpen: false,
  step: 'cart'
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Product>) => {
      const product = action.payload
      if (state.items.find((item) => item.id === product.id)) {
        alert('Item já adicionado')
      } else {
        state.items.push(product)
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    clear: (state) => {
      state.items = []
    },
    changeStep: (state, action: PayloadAction<Step>) => {
      state.step = action.payload
    },
    reset: (state) => {
      state.isOpen = false
      state.items = []
      state.step = 'cart'
    }
  }
})

export const { add, remove, open, close, clear, changeStep, reset } = cartSlice.actions
export default cartSlice.reducer