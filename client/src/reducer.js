import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'counter',
  initialState: {
    sessionId: undefined,
    tests: [],
    allTests: [],
    filteredTests: [],
    samples: [],
    categories: [],
    cart: []
  },
  reducers: {
    loadTests(state, action) {
      state.tests = action.payload
      state.allTests = action.payload
    },
    loadSamples(state, action) {
      state.samples = action.payload
    },
    loadCategories(state, action) {
      state.categories = action.payload
    },
    addToCart(state, action) {
      state.cart.push(action.payload)
    },
    setSessionId(state, action) {
      state.sessionId = action.payload
    },
    categoriesFilter(state, action) {
      const categoriesFiltered = state.allTests.filter(test => test.category === action.payload)
      state.tests = categoriesFiltered
      state.filteredTests = categoriesFiltered
      
    },
    samplesFilter(state, action) {
      state.tests = state.filteredTests.filter(test => test.sample === action.payload)
    },
    clearFilter(state)  {
      state.tests = state.allTests
    }
  },
})

export const { loadTests, loadSamples, loadCategories, addToCart, setSessionId, categoriesFilter, samplesFilter, clearFilter } = slice.actions
export default slice.reducer