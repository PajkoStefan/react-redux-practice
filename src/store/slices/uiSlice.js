import { createSlice } from "@reduxjs/toolkit";

const initialUIState = { cartIsVisible: false, notification: null };

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUIState,
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    showNotification(state, action) {
      const { status, title, message } = action.payload;

      state.notification = {
        status: status,
        title: title,
        message: message,
      };
    },
  },
});

export const uiReducer = uiSlice.reducer;
export const uiActions = uiSlice.actions;

export default uiSlice;
