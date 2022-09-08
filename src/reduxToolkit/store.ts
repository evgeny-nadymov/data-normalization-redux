import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import campaignsList from './reducers/campaignsListReducer';
import editCampaign from './reducers/editCampaignReducer';
import magicPage from './reducers/magicPageReducer';

export const store = configureStore({
  reducer: {
    campaignsList,
    editCampaign,
    magicPage,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export default store