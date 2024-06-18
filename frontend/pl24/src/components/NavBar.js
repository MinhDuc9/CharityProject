import React, { useState } from 'react';
import './NavBar.css';
import logo from '../images/logo.png'; // Import the logo image

const NavBar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    // Function to handle smooth scrolling to sections
    const handleScrollToSection = (sectionId) => {
        document.querySelector(sectionId).scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav className="nav-bar">
            <div className="logo">
                <a href="#home" onClick={() => handleScrollToSection('#home')}>
                    <img src={logo} alt="Logo" className="logo-image" />
                </a>
            </div>
            <ul className="nav-items">
                <li className="nav-item">
                    <a href="#home" onClick={() => handleScrollToSection('#home')}>VỀ PHIÊU LINH</a>
                </li>
                <li className="nav-item dropdown">
                    <a href="#programs" onClick={handleDropdownToggle}>CHƯƠNG TRÌNH </a>
                    {isDropdownOpen && (
                        <ul className="dropdown-menu">
                            <li><a href="#program1" onClick={() => handleScrollToSection('#program1')}>Program 1</a></li>
                            <li><a href="#program2" onClick={() => handleScrollToSection('#program2')}>Program 2</a></li>
                            <li><a href="#program3" onClick={() => handleScrollToSection('#program3')}>Program 3</a></li>
                        </ul>
                    )}
                </li>
                <li className="nav-item">
                    <a href="#sponsor" onClick={() => handleScrollToSection('#sponsor')}>TÀI TRỢ</a>
                </li>
                <li className="nav-item">
                    <a href="#news" onClick={() => handleScrollToSection('#news')}>TIN TỨC</a>
                </li>
                <li className="nav-item">
                    <a href="#contact" onClick={() => handleScrollToSection('#contact')}>LIÊN HỆ</a>
                </li>
            </ul>
            <div className="nav-buttons">
                <button className="donate-button">DONATE</button>
                <button className="future-button">FUTURE</button>
            </div>
        </nav>
    );
};

export default NavBar;
