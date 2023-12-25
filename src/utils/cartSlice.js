import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      console.log("slice 10 ", state, action);
      state.items.push(action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});
export const { addItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

// above slice is object actions and reducer(reducers); behind scene; action is named export due bunch of actions and reducer is default
// use specific slice in use selector
// e.g. cart, if we use store instead of cart items, any changes in store, cart will re render although change is not in cart slice
// always use subscribe to specifc slice
