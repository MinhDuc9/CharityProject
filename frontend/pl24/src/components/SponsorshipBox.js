// src/components/SponsorshipBox.js
import React from 'react';
import './SponsorshipBox.css';
import TickIcon from './TickIcon'; // Import the TickIcon component

const SponsorshipBox = ({ description, isDiamond, isGold, isSilver, isBronze }) => {
    return (
        <div className="sponsorship-box">
            <div className="sponsorship-description">
                <p>{description}</p>
            </div>
            <div className="sponsorship-levels">
                <div className="level diamond">
                    {isDiamond && <TickIcon color="#a3c858" />}
                </div>
                <div className="level gold">
                    {isGold && <TickIcon color="#f0b429" />}
                </div>
                <div className="level silver">
                    {isSilver && <TickIcon color="#6ca3a7" />}
                </div>
                <div className="level bronze">
                    {isBronze && <TickIcon color="#d16161" />}
                </div>
            </div>
        </div>
    );
};

export default SponsorshipBox;
