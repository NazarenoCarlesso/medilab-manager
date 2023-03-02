import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "counter",
  initialState: {
    sessionId: undefined,
    tests: [],
    filteredTests: [],
    samples: [],
    categories: [],
    cart: [],
  },
  reducers: {
    loadTests(state, action) {
      state.tests = action.payload
      state.allTests = action.payload
      state.filteredTests = action.payload
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
      state.filteredTests = state.tests.filter(test => test.name.toLowerCase().includes(action.payload.toLowerCase()))
    },
    clearFilter(state) {
      state.filteredTests = state.tests
    },
  },
});

export const { loadTests, loadSamples, loadCategories, addToCart, setSessionId, testsFilter, clearFilter, searchFilter } = slice.actions
export default slice.reducer