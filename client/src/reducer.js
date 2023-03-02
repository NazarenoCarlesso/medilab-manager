import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "counter",
  initialState: {
    sessionId: undefined,
    tests: [],
    samples: [],
    categories: [],
    cart: [],
  },
  reducers: {
    loadTests(state, action) {
      state.tests = action.payload;
    },
    loadSamples(state, action) {
      state.samples = action.payload;
    },
    loadCategories(state, action) {
      state.categories = action.payload;
    },
    addToCart(state, action) {
      state.cart.push(action.payload);
    },
    setSessionId(state, action) {
      state.sessionId = action.payload;
    },
  },
});

export const {
  loadTests,
  loadSamples,
  loadCategories,
  addToCart,
  setSessionId,
} = slice.actions;
export default slice.reducer;
