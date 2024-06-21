import React from "react";
import {useTransition} from "react-i18next";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './Home.css';

const images = [
    '../../assets/images/img1.jpeg',
    '../../assets/images/img2.jpeg'
];


const responsive = {
    all: {
        breakpoint: { max: 4000, min: 0 },
        items: 1
    }
};

const Home = () => {
    const { t } = useTransition();


    return (
        <div className="home">
            <Carousel
                responsive={responsive}
                ssr={true}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3500} // Change to 3.5 seconds
                keyBoardControl={true}
                customTransition="transform 300ms ease-in-out"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item"
            >
                {images.map((image, index) => (
                    <div key={index} className="carousel-image" style={{ backgroundImage: `url(${image})` }}>
                        <div className="overlay">
                            <h1 className="home-title">{t('home.title')}</h1>
                            <p className="home-description">{t('home.description')}</p>
                            <button className="learn-more-button">{t('home.learn_more')}</button>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
}

