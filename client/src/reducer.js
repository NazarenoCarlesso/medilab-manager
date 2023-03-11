import { createSlice } from "@reduxjs/toolkit";
import { getItem } from "./utils/localStorage";

const slice = createSlice({
  name: "store",
  initialState: {
    sessionId: getItem("sessionId") || undefined,
    token: getItem('token') || undefined,
    name: getItem('name') || undefined,
    avatar: getItem('avatar') || undefined,
    role: getItem('role') || undefined,
    tests: [],
    filteredTests: [],
    samples: [],
    categories: [],
    cart: getItem("cart") || [],
    orders:[],
  },
  reducers: {
    setToken(state, action) {
      state.token = action.payload
    },
    setName(state, action) {
      console.log(action.payload)
      state.name = action.payload
    },
    setAvatar(state, action) {
      state.avatar = action.payload
    },
    setRole(state, action) {
      state.role = action.payload
    },
    loadOrders( state, action){
      state.orders=action.payload
    },
    loadTests(state, action) {
      state.tests = action.payload;
      state.filteredTests = action.payload;
    },
    loadSamples(state, action) {
      state.samples = action.payload;
    },
    loadCategories(state, action) {
      state.categories = action.payload;
    },
    addToCart(state, action) {
      console.log(action.payload)
      const findIdTest = state.cart.findIndex((e) => e === action.payload);
      if (findIdTest === -1) {
        state.cart.push(action.payload);
      }
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
    testsFilter(state, action) {
      const { category, sample } = action.payload;
      let categoriesFiltered = [];
      let sampleFiltered = [];
      !category
        ? (categoriesFiltered = state.tests)
        : (categoriesFiltered = state.tests.filter(
            (test) => test.category === category
          ));
      !sample
        ? (sampleFiltered = categoriesFiltered)
        : (sampleFiltered = categoriesFiltered.filter(
            (test) => test.sample === sample
          ));
      state.filteredTests = sampleFiltered;
    },
    searchFilter(state, action) {
      state.filteredTests = state.tests.filter((test) =>
        test.name.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
    clearFilter(state) {
      state.filteredTests = state.tests;
    },
    setState(state, action) {
      state.sessionId = undefined;
      state.token = undefined;
      state.name = undefined;
      state.role = undefined;
      state.avatar = undefined;
      state.cart = [];
    },
  },
});

export const {
  loadTests,
  loadSamples,
  loadCategories,
  addToCart,
  setSessionId,
  testsFilter,
  clearFilter,
  searchFilter,
  deleteOfCartId,
  deleteOfCart,
  setState,
  loadOrders,
  setToken,
  setName,
  setAvatar,
  setRole
} = slice.actions;
export default slice.reducer;
