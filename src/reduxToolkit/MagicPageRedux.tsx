import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateCampaignName, updateMessageTemplate } from './reducers/magicPageReducer';
import { RootState } from './store';

const MagicPreview = () => {
    const messageTemplate = useSelector((state: RootState) => state.magicPage.messageTemplate);
    console.log('[MagicPreview] r');
    return <div style={{ width: 100, height: 100 }} />;
}

const MagicCampaignName = () => {
    const campaignName = useSelector((state: RootState) => state.magicPage.campaignName);
    const dispatch = useDispatch();

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(updateCampaignName(e.target.value))
    };
    console.log('[MagicCampaignName] r');
    return <input placeholder='campaign name' value={campaignName} onInput={handleInput} />
}

const MagicMessageTemplate = () => {
    const messageTemplate = useSelector((state: RootState) => state.magicPage.messageTemplate);
    const dispatch = useDispatch();

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(updateMessageTemplate(e.target.value))
    };
    console.log('[MagicMessageTemplate] r');
    return <input placeholder='message template' value={messageTemplate} onInput={handleInput} />
}

const MagicPageRedux: FC = () => {
    console.log('[MagicPage] r');
    return (
        <>
            Magic Preview Redux
            <MagicCampaignName />
            <MagicMessageTemplate />
            <MagicPreview />
        </>
    );
};

export default MagicPageRedux;
