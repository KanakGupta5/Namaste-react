import {createSlice} from '@reduxjs/toolkit';

const CartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            // mutating the state
            state.items.push(action.payload);
        },
        updateCount: (state, action) => {
            state.items[action.payload.index].count = action.payload.count;
        },
        removeItem: (state, action) => {
            state.items.splice(action.payload.index, 1);
        },
        clearCart: (state, action) => {
            state.items = [];
            // you cant do state.items = []
        }
    }
})

export const {addItem, updateCount, removeItem, clearCart} = CartSlice.actions;

export default CartSlice.reducer;