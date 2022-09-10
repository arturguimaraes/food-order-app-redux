import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import IMeal from "../types/IMeal";

interface MealState {
  meals: IMeal[];
  totalAmount: number;
}

const initialState: MealState = {
  meals: [],
  totalAmount: 0,
};

export const mealSlice = createSlice({
  name: "meal",
  initialState: initialState,
  reducers: {
    //Add meal
    addMeal: (state, action: PayloadAction<IMeal>) => {
      //Updates total amount
      state.totalAmount += action.payload.price * action.payload.amount;
      //Finds item in array
      const existingCartItemIndex = state.meals.findIndex(
        (item) => item.id === action.payload.id
      );
      const existingCartItem = state.meals[existingCartItemIndex];
      //If exists, add amount
      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + action.payload.amount,
        };
        state.meals = state.meals.map((meal) => {
          if (meal.id === action.payload.id) return updatedItem;
          else return meal;
        });
      }
      //If not, add to cart
      else {
        state.meals = state.meals.concat(action.payload);
      }
    },
    //Remove meal
    removeMeal: (state, action: PayloadAction<string>) => {
      //Finds item in array
      const existingCartItemIndex = state.meals.findIndex(
        (item) => item.id === action.payload
      );
      const existingCartItem = state.meals[existingCartItemIndex];
      //Updates total amount
      state.totalAmount -= existingCartItem.price;
      //If only 1, remove
      if (existingCartItem.amount === 1) {
        state.meals = state.meals.filter((item) => item.id !== action.payload);
      }
      //If not, subtract one from amount
      else {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount - 1,
        };
        state.meals = state.meals.map((meal) => {
          if (meal.id === action.payload) return updatedItem;
          else return meal;
        });
      }
    },
    //Empty cart
    emptyCart: (state) => {
      state.meals = [];
      state.totalAmount = 0;
    },
  },
});

export const { addMeal, removeMeal, emptyCart } = mealSlice.actions;
export const selectMeal = (state: RootState) => state.meals.meals.values;
export default mealSlice.reducer;
