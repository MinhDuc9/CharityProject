// src/components/TickIcon.js
import React from 'react';
import './TickIcon.css'; // Assuming a CSS file for additional styles

const TickIcon = () => (
    <svg className="tick-icon" width="45" height="36" viewBox="0 0 45 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_105_38)">
            <path d="M37 4L17.0625 24L8 14.9091" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" shapeRendering="crispEdges"/>
        </g>
        <defs>
            <filter id="filter0_d_105_38" x="0" y="0" width="45" height="36" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_105_38"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_105_38" result="shape"/>
            </filter>
        </defs>
    </svg>
);

export default TickIcon;
