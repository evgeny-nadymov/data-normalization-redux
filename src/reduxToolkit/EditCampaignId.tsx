import React, { FC } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { updateCampaignId } from "./reducers/editCampaignReducer";
import { RootState, useAppDispatch } from "./store";

const EditCampaignId: FC = () => {
    const id = useSelector((state: RootState) => state.editCampaign.id, shallowEqual);

    const dispatch = useAppDispatch();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(updateCampaignId(event.target.value));
    };

    return (
        <div className="edit-campaign-id">
            <label >id</label>
            <input disabled value={id} onChange={handleChange}/>
        </div>
    );
};

export default EditCampaignId;