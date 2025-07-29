import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            //vanilla redux (old redux) didnt allow to directly mutate the state
            //so we use immer library which is used by redux toolkit under the hood
            const index = state.items.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state.items[index].quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
        },
        removeItem: (state, action) => {
            const index = state.items.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                if (state.items[index].quantity > 1) {
                    state.items[index].quantity -= 1;
                } else {
                    state.items.splice(index, 1);
                }
            }
        },

        clearCart: (state) => {
            state.items = []; //this wont work as it is just adding the reference of an empty array
            state.items.length = 0; //this will clear the cart by setting the length to 0
        }
    }
});

export const { addItem, updateItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;