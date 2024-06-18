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
            <div className="sponsorship-levels-bottom">
                <div className={`level diamond ${isDiamond ? 'show' : ''}`}>
                    {isDiamond && <TickIcon />}
                </div>
                <div className={`level gold ${isGold ? 'show' : ''}`}>
                    {isGold && <TickIcon />}
                </div>
                <div className={`level silver ${isSilver ? 'show' : ''}`}>
                    {isSilver && <TickIcon />}
                </div>
                <div className={`level bronze ${isBronze ? 'show' : ''}`}>
                    {isBronze && <TickIcon />}
                </div>
            </div>
            <div className="sponsorship-levels-bubble">
                {/* Same as sponsorship-levels-bottom but for the bubble on small screens */}
                <div className={`level diamond ${isDiamond ? 'show' : ''}`}>
                    {isDiamond && <TickIcon />}
                </div>
                <div className={`level gold ${isGold ? 'show' : ''}`}>
                    {isGold && <TickIcon />}
                </div>
                <div className={`level silver ${isSilver ? 'show' : ''}`}>
                    {isSilver && <TickIcon />}
                </div>
                <div className={`level bronze ${isBronze ? 'show' : ''}`}>
                    {isBronze && <TickIcon />}
                </div>
            </div>
        </div>
    );
};

export default SponsorshipBox;
