import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type State = {
    campaignName: string;
    messageTemplate: string;
};

const initialState: State = {
    campaignName: "",
    messageTemplate: "",
}
const magicPageSlice = createSlice({
    name: "magicPage",
    initialState,
    reducers: {
        updateCampaignName(state, action: PayloadAction<string>) {
            state.campaignName = action.payload;
        },
        updateMessageTemplate(state, action: PayloadAction<string>) {
            state.messageTemplate = action.payload;
        },
    },
  })
  
  export const { updateCampaignName, updateMessageTemplate } = magicPageSlice.actions;

  export default magicPageSlice.reducer;