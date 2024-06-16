import React from "react";

const Card = ({ title, date, description, imageUrl }) => {
    return (
        <div style={{ margin: '10px', width: '300px', textAlign: 'center' }}>
            <img src={imageUrl} alt={title} style={{ width: '100%', borderRadius: '10px' }} />
            <h3>{title}</h3>
            <p>{date}</p>
            <p>{description}</p>
            <a href="#">Read More</a>
        </div>
    );
};

export default Card;