import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast';
const initialState = {
    carts: [],
    cartQty: 0,
    total: 0
}

export const cartSlice = createSlice({
    name: 'productCarts',
    initialState,
    reducers: {
        // Cart add declaration below
        addCarts: (state, action) => {
            console.log('Action: ', action.payload)
            const indexItem = state.carts.findIndex((item) => item._id === action.payload._id)
            if (indexItem >= 0) {
                state.carts[indexItem].qty += action.payload.qty
                toast.success('Product quantity increment');
            } else {
                state.carts.push(action.payload)
                state.cartQty += 1
                toast.success('Product cart add successfully');
            }
            state.total += action.payload.price * action.payload.qty
        },
        // Cart remove declaration below
        removeCart: (state, action) => {
            const newArray = state.carts.filter((cart) => cart._id !== action.payload._id)
            state.carts = newArray
            state.cartQty -= 1
            toast.success('Product remove successfully');
            const amount = state.total - action.payload.qty * action.payload.price
            state.total = amount;
        },
        // Cart Decrement declaration below
        cartDecrement: (state, { payload }) => {
            const itemIndex = state.carts.findIndex((item) => item._id === payload._id)
            if (state.carts[itemIndex].qty > 1) {
                state.carts[itemIndex].qty -= 1
                const amount = state.total - 1 * payload.price
                state.total = amount;
                toast.success('Quantity decrement successfull');
            } else {
                toast.error(`You can't decrement quantity`);
            }
        },
        // Cart Increment declaration below
        cartIncrement: (state, { payload }) => {
            console.log('Payload: ', payload)
            if (payload.qty < payload.stock) {
                const itemIndex = state.carts.findIndex((item) => item._id === payload._id)
                if (state.carts[itemIndex].qty >= 1) {
                    state.carts[itemIndex].qty += 1
                    const amount = state.total + 1 * payload.price
                    state.total = amount;
                    toast.success('Quantity increment successfull');
                } else {
                    toast.error(`You can't increment quantity`);
                }
            } else {
                toast.error(`Product now not stock`);
            }
        },
        resetCart: (state, { payload }) => {
            state.cartQty = 0;
            state.total = 0;
            state.carts = []
            toast.success('Remove all cart successfull');
        },
    },
})

// Action creators are generated for each case reducer function
export const { addCarts, removeCart, cartDecrement, cartIncrement, resetCart } = cartSlice.actions

export default cartSlice.reducer