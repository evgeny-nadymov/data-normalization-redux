import { FC } from "react";
import EditCampaignButton from "./EditCampaignButton";
import EditCampaignId from "./EditCampaignId";
import EditCampaignName from "./EditCampaignName";

const EditCampaign: FC = () => {
    console.log('[r] editCampaign');

    return (
        <div className="edit-campaign">
            <EditCampaignId />
            <EditCampaignName />
            <EditCampaignButton />
        </div>
    );
};

export default EditCampaign;