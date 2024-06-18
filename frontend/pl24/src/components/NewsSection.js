// src/components/NewsSection.js
import React, { useRef } from 'react';
import Card from './Card';
import './NewsSection.css';
import leftArrow from '../assets/left-arrow.svg'; // Ensure the correct path to your SVGs
import rightArrow from '../assets/right-arrow.svg';

const NewsSection = () => {
    const scrollRef = useRef(null);

    const scrollLeft = () => {
        scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    };

    const scrollRight = () => {
        scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    };

    // Hardcoded data for cards
    const cardData = [
        {
            image: 'https://via.placeholder.com/280x150', // Replace with actual image path
            title: 'News Title 1',
            date: '11/11/2024',
            description: 'Description for news 1. This is a placeholder for the actual news content.',
            link: 'https://external-link1.com',
            linkText: 'Read More'
        },
        {
            image: 'https://via.placeholder.com/280x150', // Replace with actual image path
            title: 'News Title 2',
            date: '12/11/2024',
            description: 'Description for news 2. This is another placeholder for the actual news content.',
            link: 'https://external-link2.com',
            linkText: 'Read More'
        },
        {
            image: 'https://via.placeholder.com/280x150', // Replace with actual image path
            title: 'News Title 3',
            date: '13/11/2024',
            description: 'Description for news 3. More placeholder text for the actual news content.',
            link: 'https://external-link3.com',
            linkText: 'Read More'
        },
        // Add more card data as needed
    ];

    return (
        <section id="news" className="news-section">
            <h2>Tin Tức</h2>
            <div className="scroll-container">
                <button className="scroll-button left" onClick={scrollLeft}>
                    <img src={leftArrow} alt="Scroll Left" />
                </button>
                <div className="news-container" ref={scrollRef}>
                    {cardData.map((card, index) => (
                        <Card
                            key={index}
                            image={card.image}
                            title={card.title}
                            date={card.date}
                            description={card.description}
                            link={card.link}
                            linkText={card.linkText}
                        />
                    ))}
                </div>
                <button className="scroll-button right" onClick={scrollRight}>
                    <img src={rightArrow} alt="Scroll Right" />
                </button>
            </div>
        </section>
    );
};

export default NewsSection;
