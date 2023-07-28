import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  toppings: ["Cheese"],
  glutenFree: false,
}

export const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    toggleGluten: (state) => {
      state.glutenFree = !state.glutenFree
    },
    addToppings: (state, action) => {
      state.toppings = [...state.toppings, action.payload]
    },
  },
})

export const { toggleGluten, addToppings } = pizzaSlice.actions
export default pizzaSlice.reducer
