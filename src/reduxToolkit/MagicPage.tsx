import React, { FC, useState } from 'react';

type MagicPreviewProsp = {
    messageTemplate: string;
}

const MagicPreview: FC<MagicPreviewProsp> = () => {
    console.log('[MagicPreview] r');
    return <div style={{ width: 100, height: 100 }} />;
}

const MagicPage: FC = () => {
    const [{ campaignName, messageTemplate }, setState] = useState({ campaignName: '', messageTemplate: '' });

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState((prevState) => ({
        ...prevState,
        campaignName: e.target.value,
        }));
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState((prevState) => ({
        ...prevState,
        messageTemplate: e.target.value,
        }));
    };

    console.log('[MagicPage] r');
    return (
        <>
            Magic Preview
            <input placeholder='campaign name' value={campaignName} onInput={handleInput} />
            <input placeholder='message template' value={messageTemplate} onInput={handleChange} />
            <MagicPreview messageTemplate={messageTemplate} />
        </>
    );
};

export default MagicPage;
