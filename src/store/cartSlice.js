// import { createSlice } from "@reduxjs/toolkit";

// const loadCartFromLocalStorage = () => {
//   try {
//     const savedCart = localStorage.getItem("cartItems");
//     return savedCart ? JSON.parse(savedCart) : [];
//   } catch (error) {
//     console.error("Error loading cart:", error);
//     return [];
//   }
// };

// const initialState = { cartItems: loadCartFromLocalStorage() };

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addToCart: (state, action) => {
//       const item = state.cartItems.find((i) => i.id === action.payload.id);
//       item ? item.quantity++ : state.cartItems.push({ ...action.payload, quantity: 1 });
//       localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
//     },
//     removeFromCart: (state, action) => {
//       state.cartItems = state.cartItems.filter((i) => i.id !== action.payload);
//       localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
//     },
//     updateQuantity: (state, action) => {
//       const item = state.cartItems.find((i) => i.id === action.payload.id);
//       if (item && action.payload.quantity > 0) {
//         item.quantity = action.payload.quantity;
//       } else {
//         state.cartItems = state.cartItems.filter((i) => i.id !== action.payload.id);
//       }
//       localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
//     },
//     clearCart: (state) => {
//       state.cartItems = [];
//       localStorage.removeItem("cartItems");
//     },
//   },
// });

// export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
// export default cartSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const loadCartFromLocalStorage = () => {
  try {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  } catch (error) {
    console.error("Error loading cart:", error);
    return [];
  }
};

const initialState = { cartItems: loadCartFromLocalStorage() };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.cartItems.find((i) => i.id === action.payload.id);
      item ? item.quantity++ : state.cartItems.push({ ...action.payload, quantity: 1 });
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((i) => i.id !== action.payload);
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    updateQuantity: (state, action) => {
      const item = state.cartItems.find((i) => i.id === action.payload.id);
      if (item && action.payload.quantity > 0) {
        item.quantity = action.payload.quantity;
      } else {
        state.cartItems = state.cartItems.filter((i) => i.id !== action.payload.id);
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    clearCart: (state) => {
      state.cartItems = [];
      localStorage.removeItem("cartItems");
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
