import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BACK = process.env.REACT_APP_BACK;

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
    addUser(state, action) {
      axios.post(`${BACK}/patients/signup`, action.payload);
    },
  },
});

export const {
  loadTests,
  loadSamples,
  loadCategories,
  addToCart,
  setSessionId,
  addUser,
} = slice.actions;
export default slice.reducer;
