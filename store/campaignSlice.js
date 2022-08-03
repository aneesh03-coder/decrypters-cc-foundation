import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allCampaigns: [],
};

export const campaignSlice = createSlice({
  name: "campaign",
  initialState,
  reducers: {
    campaignFetch: (state, action) => {
      action.payload.map((data) => {
        state.allCampaigns = [...state.allCampaigns, ...[data]];
      });
    },
  },
});

export const { campaignFetch } = campaignSlice.actions;

export default campaignSlice.reducer;
