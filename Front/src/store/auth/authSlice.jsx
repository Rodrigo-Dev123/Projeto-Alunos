import { createSlice } from '@reduxjs/toolkit';
import axios from "../../services/axios";

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
    token: false,
    user: {},
    isLoading: false,
  },
  reducers: {
    login: (state, action) => {
      console.log(action.type);
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.user = action.payload.user;
      axios.defaults.headers.Authorization = `Bearer ${action.payload.token}`;
    },
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes.
      // Also, no return statement is required from these functions.
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, increment, decrement, incrementByAmount } = authSlice.actions;

export default authSlice.reducer;
