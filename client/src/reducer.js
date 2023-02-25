import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    increment(state) {
      state.value++
    },
    decrement(state) {
      state.value--
    },
    incrementByAmount(state, action) {
      state.value += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = slice.actions
export default slice.reducer