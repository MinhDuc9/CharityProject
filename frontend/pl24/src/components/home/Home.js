// src/components/Home.jsx
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import logo from '../../assets/images/logo-with-name.png'; // Make sure this path is correct
import downArrow from '../../assets/svg/down-arrow.svg'; // Make sure this path is correct
import './Home.css';

const Home = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const { i18n, t } = useTranslation();

    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleLanguageToggle = () => {
        const newLanguage = i18n.language === 'vi' ? 'en' : 'vi';
        i18n.changeLanguage(newLanguage);
    };

    const scrollToSummary = () => {
        document.querySelector('#summary').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <header id="home" className="home-section">
            <div className="dim-overlay"></div>
            {/* Dim overlay */}
            <nav className="nav-bar">

                <div className="logo">
                    <a href="#home"
                       onClick={() => document.querySelector('#home').scrollIntoView({behavior: 'smooth'})}>
                        <img src={logo} alt="Logo" className="logo-image"/>
                    </a>
                </div>
                <ul className="nav-items">
                    <li className="nav-item">
                        <a href="#home"
                           onClick={() => document.querySelector('#home').scrollIntoView({behavior: 'smooth'})}>
                            {t('nav.home')}
                        </a>
                    </li>
                    <li className="nav-item dropdown">
                        <a href="#programs" onClick={handleDropdownToggle}>{t('nav.programs')}</a>
                        {isDropdownOpen && (
                            <ul className="dropdown-menu">
                                <li><a href="#program1">{t('nav.program1')}</a></li>
                                <li><a href="#program2">{t('nav.program2')}</a></li>
                                <li><a href="#program3">{t('nav.program3')}</a></li>
                            </ul>
                        )}
                    </li>
                    <li className="nav-item">
                        <a href="#sponsor"
                           onClick={() => document.querySelector('#sponsor').scrollIntoView({behavior: 'smooth'})}>
                            {t('nav.sponsor')}
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#news"
                           onClick={() => document.querySelector('#news').scrollIntoView({behavior: 'smooth'})}>
                            {t('nav.news')}
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact"
                           onClick={() => document.querySelector('#contact').scrollIntoView({behavior: 'smooth'})}>
                            {t('nav.contact')}
                        </a>
                    </li>
                </ul>
                <div className="nav-buttons">
                    <button className="donate-button">{t('nav.donate')}</button>
                    <button className="future-button" onClick={handleLanguageToggle}>
                        {i18n.language === 'vi' ? 'English' : 'Vietnamese'}
                    </button>
                </div>
            </nav>
            <div className="main-content">
                <h1>“Mọi trẻ em và thanh thiếu niên Việt Nam đều là những cá nhân hạnh phúc và những công dân tử
                    tế.”</h1>
                <h2>
                    Về Phiêu Linh
                </h2>
                <button className="scroll-button" onClick={scrollToSummary}>
                    <img src={downArrow} alt="Scroll Down"/>
                </button>
            </div>


        </header>
    );
};

export default Home;
