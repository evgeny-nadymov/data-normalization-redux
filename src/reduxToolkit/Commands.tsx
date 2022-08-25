import React, { FC } from "react";
import { updateCampaignName, updateIdsRef, updateUserName } from "./reducers/campaignsListReducer";
import { useAppDispatch } from "./store";
const getRandomFruitsName = require("random-fruits-name");
const generateRandomAnimalName = require("random-animal-name-generator");

const Commands: FC = () => {
    const dispatch = useAppDispatch();

    // const handleClick = () => {
    //     dispatch(updateIdsRef({}));
    // };

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
            <button onClick={handleUserNameChange}>update user name</button>
            <button onClick={handleCampaignNameChange}>update campaign name</button>
        </div>
    );
};

export default Commands;