import { FC } from "react";
import { shallowEqual, useSelector } from 'react-redux';
import { RootState } from "./store";

type CampaignNameProps = {
    campaignId: string,
};

const CampaignName: FC<CampaignNameProps> = ({ campaignId }: CampaignNameProps) => {
    const name = useSelector((state: RootState) => state.campaignsList.campaigns.entities[campaignId].name, shallowEqual);

    console.log(`[r] campaignName id=${campaignId}`);

    return (
        <div className="campaign-name">
            {name}
        </div>
    );
};

export default CampaignName;