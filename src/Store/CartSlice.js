import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    add: (state, action) => {
        console.log("action" , action,JSON.parse(JSON.stringify(state)))
        const itemInCart = state?.cart?.find((item) => item.id === action.payload.id);
        if (itemInCart) {
            debugger
          itemInCart.quantity++;
        } else {
            debugger
          state.cart.push({ ...action.payload, quantity: 1 });
        }
      },

      remove: (state, action) => {
        const removeItem = state.cart.filter((item) => item.id !== action.payload);
        state.cart = removeItem;
      },

 
    incrementQuantity: (state, action) => {
        debugger
        const item = state.cart.find((item) => item.id === action.payload);
        item.quantity++;
      },
   


    decrementQuantity: (state, action) => {
        debugger
        const item = state.cart.find((item) => item.id === action.payload);
        if (item.quantity === 1) {
          item.quantity = 1
        } else {
          item.quantity--;
        }
      },
   
  },
});

export const { add, remove , incrementQuantity, decrementQuantity  } = cartSlice.actions;
export default cartSlice.reducer;
