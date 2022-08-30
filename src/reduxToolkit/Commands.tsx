import React, { FC } from "react";
import { updateCampaignName, updateIdsRef, updateUserName } from "./reducers/campaignsListReducer";
import { useAppDispatch } from "./store";
import { fetchCampaign, fetchCampaigns } from "./thunk";
const getRandomFruitsName = require("random-fruits-name");
const generateRandomAnimalName = require("random-animal-name-generator");

const Commands: FC = () => {
    const dispatch = useAppDispatch();

    // const handleClick = () => {
    //     dispatch(updateIdsRef({}));
    // };

    const handleFetchCampaign = () => {
        dispatch(fetchCampaign("campaign1"));
    };

    const handleFetchCampaigns = () => {
        dispatch(fetchCampaigns());
    };

    const handleUserNameChange = () => {
        const animalName = generateRandomAnimalName().split(' ');
        dispatch(updateUserName({
            userId: "user1",
            firstName: animalName[0],
            lastName: animalName[1],
        }));
    };

    const handleCampaignNameChange = () => {
        dispatch(updateCampaignName({
            campaignId: "campaign1",
            name: `${getRandomFruitsName()} Campaign`,
        }));
    };

    return (
        <div className="commands">
            {/* <button onClick={handleClick}>update ids ref</button> */}
            <div>
                Data Fetching
                <button onClick={handleFetchCampaign}>refetch campaign</button>
                <button onClick={handleFetchCampaigns}>refetch campaigns</button>
            </div>
            <div>
                Updates
                <button onClick={handleCampaignNameChange}>update campaign name</button>
                <button onClick={handleUserNameChange}>update author</button>
            </div>
        </div>
    );
};

export default Commands;