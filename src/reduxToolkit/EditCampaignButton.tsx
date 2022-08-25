import React, { FC } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { RootState, useAppDispatch } from "./store";
import { createCampaign, updateCampaign } from "./thunk";

const EditCampaignButton: FC = () => {
    const campaign = useSelector((state: RootState) => state.editCampaign.campaign, shallowEqual);

    const dispatch = useAppDispatch();

    const handleClick = () => {
        if (campaign) {
            dispatch(updateCampaign());
        } else {
            dispatch(createCampaign());
        }
    };

    return (
        <button onClick={handleClick}>{campaign ? "update campaign" : "create campaign"}</button>
    );
};

export default EditCampaignButton;