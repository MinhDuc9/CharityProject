import React, { useState } from 'react';
import Card from './Card';
import { sampleData } from './data';

const CardHolder = () => {
    const [startIndex, setStartIndex] = useState(0);

    const scrollLeft = () => {
        setStartIndex(prevIndex => Math.max(prevIndex - 1, 0));
    };

    const visibleCards = sampleData.slice(startIndex, startIndex + 3);

    return (
        <div>
            <button onClick={scrollLeft}>&lt;</button>
            <div style={{ display: 'flex', overflow: 'hidden' }}>
                {visibleCards.map(card => (
                    <Card key={card.id} {...card} />
                ))}
            </div>
        </div>
    );
};

export default CardHolder;
