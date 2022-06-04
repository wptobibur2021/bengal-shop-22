import { createSlice } from '@reduxjs/toolkit'
import { successMessage } from '../notification/useNotify'
const initialState = {
    carts: [],
    cartQty: 0,
    total: 0
}

export const cartSlice = createSlice({
    name: 'productCarts',
    initialState,
    reducers: {
        addCarts: (state, action) => {

            console.log('Action: ', action.payload)
            const indexItem = state.carts.findIndex((item) => item._id === action.payload._id)
            if (indexItem >= 0) {
                state.carts[indexItem].qty += action.payload.qty
                successMessage('Add to cart')
            } else {
                state.carts.push(action.payload)
                state.cartQty += 1
            }
            state.total += action.payload.price * action.payload.qty
        }
    },
})

// Action creators are generated for each case reducer function
export const { addCarts } = cartSlice.actions

export default cartSlice.reducer