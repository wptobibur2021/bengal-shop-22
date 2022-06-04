import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    carts: [],
}

export const cartSlice = createSlice({
    name: 'productCarts',
    initialState,
    reducers: {
        addCarts: (state, action) => {
            console.log('Action: ', action.payload)
        }
    },
})

// Action creators are generated for each case reducer function
export const { addCarts } = cartSlice.actions

export default cartSlice.reducer