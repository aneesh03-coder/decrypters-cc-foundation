import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import campaign from "./campaignSlice";
import payments from "./paymentsSlice";

const combineReducer = combineReducers({
  campaign,
  payments,
});

const masterReducer = (state, action) => {
  if (action.type === HYDRATE) {
    let nextState;
    if (
      state.campaign.allCampaigns == undefined ||
      state.campaign.allCampaigns.length == 0
    ) {
      nextState = {
        ...state,
        campaign: {
          allCampaigns: [
            ...state.campaign.allCampaigns,
            action.payload.campaign.allCampaigns,
          ],
        },
        payments: {
          allPayments: [...action.payload.payments.allPayments],
        },
      };
    } else {
      nextState = {
        ...state,
        campaign: {
          allCampaigns: [...state.campaign.allCampaigns],
        },
        payments: {
          allPayments: [...action.payload.payments.allPayments],
        },
      };
    }
    return nextState;
  } else {
    return combineReducer(state, action);
  }
};

export const makeStore = () => {
  return configureStore({
    reducer: masterReducer,
  });
};

export const wrapper = createWrapper(makeStore);
