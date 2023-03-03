import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "counter",
  initialState: {
    sessionId: undefined,
    tests: [],
    allTests: [],
    filteredTests: [],
    samples: [],
    categories: [],
    cart: [],
  },
  reducers: {
    loadTests(state, action) {
      state.tests = action.payload;
      state.allTests = action.payload;
      state.filteredTests = action.payload;
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
    deleteOfCartId(state, action) {
      const stateCart = state.cart;
      const index = stateCart.indexOf(action.payload);
      if (index !== -1) {
        stateCart.splice(index, 1);
      }
      state.cart = stateCart;
    },
    deleteOfCart(state, action) {
      if (action.payload === "deleteAll") {
        state.cart = [];
      }
      state.cart = state.cart.filter((e) => e !== action.payload);
    },
    setSessionId(state, action) {
      state.sessionId = action.payload;
    },
    categoriesFilter(state, action) {
      if (action.payload !== "") {
        const categoriesFiltered = state.allTests.filter(
          (test) => test.category === action.payload
        );
        state.tests = categoriesFiltered;
        state.filteredTests = categoriesFiltered;
      }
    },
    samplesFilter(state, action) {
      if (action.payload !== "") {
        state.tests = state.filteredTests.filter(
          (test) => test.sample === action.payload
        );
      }
    },
    clearFilter(state) {
      state.tests = state.allTests;
      state.filteredTests = state.allTests;
    },
  },
});

export const {
  loadTests,
  loadSamples,
  loadCategories,
  addToCart,
  setSessionId,
  categoriesFilter,
  samplesFilter,
  clearFilter,
  deleteOfCartId,
  deleteOfCart,
} = slice.actions;
export default slice.reducer;
