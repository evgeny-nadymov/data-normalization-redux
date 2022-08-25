import React, { FC } from "react";
import { shallowEqual, useSelector } from 'react-redux';
import CampaignName from "./CampaignName";
import { deleteCampaign } from "./reducers/campaignsListReducer";
import { RootState, useAppDispatch } from "./store";
import { editCampaign } from "./thunk";
import User from "./CampaignUser";

type CampaignProps = {
    campaignId: string,
};

const Campaign: FC<CampaignProps> = ({ campaignId }: CampaignProps) => {
    const authorId = useSelector((state: RootState) => state.campaignsList.campaigns.entities[campaignId].author.id, shallowEqual);
    const status = useSelector((state: RootState) => state.campaignsList.campaigns.entities[campaignId].status, shallowEqual);

    const dispatch = useAppDispatch();

    const handleDelete = () => {
        dispatch(deleteCampaign(campaignId));
    };

    const handleEdit = () => {
        dispatch(editCampaign(campaignId));
    };

    console.log(`[r] campaign id=${campaignId}`);

    return (
        <div className="campaign">
            <CampaignName campaignId={campaignId} />
            <User userId={authorId} />
            <div className="campaign-type">{status.type}</div>
            <div className="campaign-commands">
                <button onClick={handleEdit}>Edit</button>
                <button onClick={handleDelete}>Delete</button>
            </div>
        </div>
    );
};

export default React.memo(Campaign);