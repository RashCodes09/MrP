import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  cart: [],
};

const redux = createSlice({
  name: "storeMang",
  initialState,
  reducers: {
    addProduct: (state, { payload }) => {
      state.products = payload;
    },
    deleteProduct: (state, { payload }) => {
      let remove = state.cart.filter((el: any) => el.id !== payload.id);
      state.cart = remove;
    },
    addProductToCart: (state, { payload }: any) => {
      const check = state.cart.findIndex((el: any) => el.id === payload.id);

      if (check >= 0) {
        state.cart[check].qty += 1;
      } else {
        state.cart.push({ ...payload, qty: 1 });
      }
    },

    removeProductToCart: (state, { payload }: any) => {
      const check: any = state.cart.findIndex(
        (el: any) => el.id === payload.id
      );

      if (state.cart[check].qty > 1) {
        state.cart[check].qty -= 1;
      } else {
        let remove = state.cart.filter((el: any) => el.id !== payload.id);

        state.cart = remove;
      }
    },
  },
});

export const {
  addProduct,
  addProductToCart,
  removeProductToCart,
  deleteProduct,
} = redux.actions;

export default redux.reducer;
