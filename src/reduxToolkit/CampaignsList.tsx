import { FC, useEffect } from "react";
import { shallowEqual, useSelector } from 'react-redux';
import Campaign from "./Campaign";
import { RootState, useAppDispatch } from "./store";
import { fetchCampaigns } from "./thunk";

const CampaignsList: FC = () => {
    const ids = useSelector((state: RootState) => 
        state.campaignsList.search.text && state.campaignsList.search.ids ? 
        state.campaignsList.search.ids : 
        (state.campaignsList.prevSearch?.text && state.campaignsList.prevSearch?.ids ? state.campaignsList.prevSearch.ids : state.campaignsList.campaigns.ids), 
        shallowEqual);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchCampaigns());
    }, [dispatch]);

    console.log('[r] CampaignsList');

    return (
        <div className="campaigns-list-wrapper">
            <div className="campaigns-list">
                <div className="campaigns-list-columns">
                    <div className="campaigns-list-name-column">Campaign Name</div>
                    <div className="campaigns-list-author-column">Author</div>
                    <div className="campaigns-list-status-column">Status</div>
                    <div className="campaigns-list-commands-column">Commands</div>
                </div>
                {ids.map(x => (<Campaign key={x} campaignId={x} />))}
            </div>
        </div>
    );
};

export default CampaignsList;