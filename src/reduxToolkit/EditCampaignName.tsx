import React, { FC } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { updateCampaignName } from "./reducers/editCampaignReducer";
import { RootState, useAppDispatch } from "./store";

const EditCampaignName: FC = () => {
    const name = useSelector((state: RootState) => state.editCampaign.name, shallowEqual);

    const dispatch = useAppDispatch();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(updateCampaignName(event.target.value));
    };

    return (
        <div className="edit-campaign-name">
            <label >name</label>
            <input value={name} onChange={handleChange} />
        </div>
    );
};

export default EditCampaignName;