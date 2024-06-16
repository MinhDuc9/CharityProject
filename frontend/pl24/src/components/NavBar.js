import React, { useState } from 'react';
import './NavBar.css';
import logo from '../images/logo.png'; // Ensure the correct path to your logo

const NavBar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <nav className="nav-bar">
            <div className="logo">
                <a href="#home">
                    <img src={logo} alt="Logo" className="logo-image" />
                </a>
            </div>
            <ul className="nav-items">
                <li className="nav-item"><a href="#home">VỀ PHIÊU LINH</a></li>
                <li className="nav-item dropdown">
                    <a href="#programs" onClick={handleDropdownToggle}>CHƯƠNG TRÌNH </a>
                    {isDropdownOpen && (
                        <ul className="dropdown-menu">
                            <li><a href="#program1">Program 1</a></li>
                            <li><a href="#program2">Program 2</a></li>
                            <li><a href="#program3">Program 3</a></li>
                        </ul>
                    )}
                </li>
                <li className="nav-item"><a href="#sponsor">TÀI TRỢ</a></li>
                <li className="nav-item"><a href="#news">TIN TỨC</a></li>
                <li className="nav-item"><a href="#contact">LIÊN HỆ</a></li>
            </ul>
            <div className="nav-buttons">
                <button className="donate-button">DONATE</button>
                <button className="future-button">FUTURE</button>
            </div>
        </nav>
    );
};

export default NavBar;
