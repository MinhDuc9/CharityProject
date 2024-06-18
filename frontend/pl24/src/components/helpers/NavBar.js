import React, { useState } from 'react';
import './NavBar.css';
import logo from '../../assets/images/logo.png';
import { useTranslation } from 'react-i18next';

const NavBar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const { i18n, t } = useTranslation();

    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleLanguageToggle = () => {
        const newLanguage = i18n.language === 'vi' ? 'en' : 'vi';
        i18n.changeLanguage(newLanguage);
    };

    return (
        <nav className="nav-bar">
            <div className="logo">
                <a href="#home" onClick={() => document.querySelector('#home').scrollIntoView({ behavior: 'smooth' })}>
                    <img src={logo} alt="Logo" className="logo-image" />
                </a>
            </div>
            <ul className="nav-items">
                <li className="nav-item">
                    <a href="#home" onClick={() => document.querySelector('#home').scrollIntoView({ behavior: 'smooth' })}>
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
                    <a href="#sponsor" onClick={() => document.querySelector('#sponsor').scrollIntoView({ behavior: 'smooth' })}>
                        {t('nav.sponsor')}
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#news" onClick={() => document.querySelector('#news').scrollIntoView({ behavior: 'smooth' })}>
                        {t('nav.news')}
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#contact" onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}>
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
    );
};

export default NavBar;
