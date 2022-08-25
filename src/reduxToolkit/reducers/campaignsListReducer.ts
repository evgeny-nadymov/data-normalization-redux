import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Campaign, Template, User } from "../../data";
import { createCampaign, updateCampaign, fetchCampaigns, searchCampaigns } from "../thunk";

export type UpdateUserNamePayload = {
    userId: string,
    firstName: string,
    lastName: string,
};

type SearchResults = {
    text: string;
    ids?: string[];
}

type State = {
    campaigns: { 
        entities: { [key: string]: Campaign },
        ids: string[],
    };
    templates: {
        entities: { [key: string]: Template },
        ids: string[],
    };
    users: {
        entities: { [key: string]: User },
        ids: string[],
    };

    search: SearchResults;
    prevSearch: SearchResults | undefined;
};

const initialState: State = {
    campaigns: {
        entities: { },
        ids: [],
    },
    users: {
        entities: { },
        ids: [],
    },
    templates: {
        entities: { },
        ids: [],
    },

    search: { text: "" },
    prevSearch: undefined,
}

const campaignsListSlice = createSlice({
    name: "campaignsList",
    initialState,
    reducers: {
        updateIdsRef(state, action) {
            state.campaigns.ids = [...state.campaigns.ids];
        },
        updateUserName(state, action: PayloadAction<{ userId: string, firstName: string, lastName: string }>) {
            const { userId, firstName, lastName } = action.payload;

            const user = state.users.entities[userId];
            if (user) {
                user.firstName = firstName;
                user.lastName = lastName;
            }
        },
        updateCampaignName(state, action: PayloadAction<{ campaignId: string, name: string }>) {
            const { campaignId, name } = action.payload;

            const campaign = state.campaigns.entities[campaignId];
            if (campaign) {
                campaign.name = name;
            }
        },
        addCampaign(state, action: PayloadAction<Campaign>) {
            const { payload: campaign } = action;

            state.campaigns.entities[campaign.id] = campaign;
            state.campaigns.ids = [...state.campaigns.ids, campaign.id];

            state.users.entities[campaign.author.id] = campaign.author;
        },
        deleteCampaign(state, action: PayloadAction<string>) {
            const { payload: campaignId } = action;

            delete state.campaigns.entities[campaignId];
            state.campaigns.ids = state.campaigns.ids.filter((x) => x !== campaignId);
        },
        updateSearch(state, action: PayloadAction<string>) {
            const { payload: text } = action;

            if (text === "") {
                state.prevSearch = undefined;
                state.search = { text };
            } else {
                state.prevSearch = state.search?.ids ? state.search : state.prevSearch;
                state.search = { text };
            }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCampaigns.fulfilled, (state, action) => {
            const { payload: campaigns } = action;
            const userIds: string[] = [];

            campaigns.forEach((x) => {
                state.campaigns.entities[x.id] = x;
                x.templates.forEach((t) => {
                    state.templates.entities[t.id] = t;
                });
                userIds.push(x.author.id);
                state.users.entities[x.author.id] = x.author;
            });

            state.users.ids = userIds;
            state.campaigns.ids = campaigns.map((x) => x.id);
        });
        builder.addCase(searchCampaigns.fulfilled, (state, action) => {
            const { payload: ids } = action;
            const { arg: text } = action.meta;
            
            if (text === state.search.text) {
                state.prevSearch = undefined;
                state.search = {
                    text,
                    ids,
                };
            }
        });
        builder.addCase(createCampaign.fulfilled, (state, action) => {
            const campaign = action.payload;

            state.campaigns.entities[campaign.id] = campaign;
            state.campaigns.ids = [...state.campaigns.ids, campaign.id];
        });
        builder.addCase(updateCampaign.fulfilled, (state, action) => {
            const { campaignId, name } = action.payload;

            const campaign = state.campaigns.entities[campaignId];
            if (campaign) {
                campaign.name = name;
            }
        });
    },
  })
  
export const { 
    updateIdsRef,
    updateUserName,
    updateCampaignName,
    addCampaign,
    deleteCampaign,
    updateSearch,
    // searchCampaigns,
} = campaignsListSlice.actions;

  export default campaignsListSlice.reducer;