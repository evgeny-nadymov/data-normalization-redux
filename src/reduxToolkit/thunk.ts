import { createAsyncThunk } from "@reduxjs/toolkit";
import { Campaign, getRandom, getRandomCampaigns, User } from "../data";
import { RootState } from "./store";
import { getRandomCampaign } from "../data";

export const USERS_COUNT = 5;
export const TEMPLATES_COUNT = 5;
export const CAMPAIGNS_COUNT = 10;
export const RESPONSE_DELAY_MS = 1000;

export const fetchCampaigns = createAsyncThunk<Campaign[]>(
  "campaigns/fetchCampaigns",
  async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(getRandomCampaigns(USERS_COUNT, TEMPLATES_COUNT, CAMPAIGNS_COUNT));
        }, RESPONSE_DELAY_MS);
    });
  }
)

export const searchCampaigns = createAsyncThunk<string[], string, {state: RootState }>(
    "campaigns/searchCampaigns",
    async (text: string, { getState }) => {
        const { entities, ids } = getState().campaignsList.campaigns;

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(ids.filter((x) => entities[x].name.indexOf(text) !== -1));
            }, RESPONSE_DELAY_MS);
        });
    }
)

export const createCampaign = createAsyncThunk<Campaign, void, { state: RootState }>(
    "campaigns/createCampaign",
    async (_, { getState }) => {
        const { name } = getState().editCampaign;
        const { users } = getState().campaignsList;

        return new Promise((resolve) => {
            setTimeout(() => {
                const authorId = users.ids[getRandom(0, users.ids.length - 1)];
                const author: User = users.entities[authorId];

                const campaign: Campaign = getRandomCampaign(author);

                campaign.name = name;

                resolve(campaign);
            }, RESPONSE_DELAY_MS);
        });
    }
)

export const updateCampaign = createAsyncThunk<{ campaignId: string, name: string }, void, { state: RootState }>(
    "campaigns/updateCampaign",
    async (_, { getState }) => {
        const { campaign, name } = getState().editCampaign;

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ campaignId: campaign?.id || "", name });
            }, RESPONSE_DELAY_MS);
        });
    }
)

export const editCampaign = createAsyncThunk<Campaign, string, { state: RootState }>(
    "campaigns/editCampaign",
    async (campaignId, { getState }) => {
        const campaign = getState().campaignsList.campaigns.entities[campaignId];

        return Promise.resolve(campaign);
    }
)
