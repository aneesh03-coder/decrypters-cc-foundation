import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allPayments: [],
};

export const payementsSlice = createSlice({
  name: "payements",
  initialState,
  reducers: {
    paymentOverviewFetch: (state, action) => {
      action.payload.map((payment) => {
        state.allPayments = [...state.allPayments, ...[payment]];
      });
    },
  },
});

export const { paymentOverviewFetch } = payementsSlice.actions;

export default payementsSlice.reducer;
