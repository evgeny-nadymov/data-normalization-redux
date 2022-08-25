import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Campaign } from "../../data";
import { createCampaign, updateCampaign, editCampaign } from "../thunk";

type State = {
    name: string;
    id: string;

    campaign?: Campaign;
};

const initialState: State = {
    name: "",
    id: "",
}
const editCampaignSlice = createSlice({
    name: "editCampaign",
    initialState,
    reducers: {
        editCampaign(state, action: PayloadAction<Campaign>) {
            state.campaign = action.payload;
            state.name = action.payload.name;
            state.id = action.payload.id;
        },
        updateCampaignId(state, action: PayloadAction<string>) {
            state.id = action.payload;
        },
        updateCampaignName(state, action: PayloadAction<string>) {
            state.name = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(createCampaign.fulfilled, (state, action) => {
            state.id = "";
            state.name = "";
            state.campaign = undefined;
        });
        builder.addCase(updateCampaign.fulfilled, (state, action) => {
            state.id = "";
            state.name = "";
            state.campaign = undefined;
        });
        builder.addCase(editCampaign.fulfilled, (state, action) => {
            state.campaign = action.payload;
            state.name = action.payload.name;
            state.id = action.payload.id;
        });
    },
  })
  
  export const { updateCampaignId, updateCampaignName } = editCampaignSlice.actions;

  export default editCampaignSlice.reducer;