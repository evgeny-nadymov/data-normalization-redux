import React, { FC } from "react";
import { shallowEqual, useSelector } from 'react-redux';
import { RootState } from "./store";

type CampaignUserProps = {
    userId: string,
};

const CampaignUser: FC<CampaignUserProps> = ({ userId }: CampaignUserProps) => {
    const firstName = useSelector((state: RootState) => state.campaignsList.users.entities[userId].firstName, shallowEqual);
    const lastName = useSelector((state: RootState) => state.campaignsList.users.entities[userId].lastName, shallowEqual);

    console.log(`[r] user id=${userId}`);
    return (
        <div className="campaign-user">
            {`${firstName} ${lastName}`}
        </div>
    );
};

export default CampaignUser;