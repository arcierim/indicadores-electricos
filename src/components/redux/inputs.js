import { createSlice } from "@reduxjs/toolkit"

export const inputSlice = createSlice({
  name: "input",
  initialState: { value: { dia: 1, mes: 1, ts: 0, precio_kWh: 850 } },
  reducers: {
    informations: (state, action) => {
      state.value = action.payload
    },
  },
})

export default inputSlice.reducer

export const { informations } = inputSlice.actions
