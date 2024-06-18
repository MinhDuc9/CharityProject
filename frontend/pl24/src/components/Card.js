import React from 'react';
import './Card.css';

const Card = ({ image, title, date, description, link, linkText }) => {
    return (
        <div className="card">
            <img src={image} alt={title} className="card-image" />
            <div className="card-content">
                <h3 className="card-title">{title}</h3>
                <p className="card-date">{date}</p>
                <p className="card-description">{description}</p>
                <a href={link} target="_blank" rel="noopener noreferrer" className="card-link">{linkText}</a>
            </div>
        </div>
    );
};

export default Card;
