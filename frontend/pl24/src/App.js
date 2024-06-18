import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import NavBar from "./components/helpers/NavBar";
import SponsorshipSection from "./components/sponsor/SponsorshipSection";
import Login from "./components/login/Login";
import { isAdminSubdomain } from './utils/subdomain';
import './App.css';


const App = () => {
    return (
        <Router>
            <div className="app">
                {isAdminSubdomain() ? (
                    <Login />
                ) : (
                    <>
                        <NavBar />
                        <header id="home" className="main-section">
                            <h1>Sứ Mạng Tầm Nhìn</h1>
                            <button className="hero-button">Về Phiêu Linh</button>
                        </header>
                        <main>
                            <Routes>
                                <Route path="/" element={<SponsorshipSection />} />
                                {/* Other routes can be added here */}
                            </Routes>
                        </main>
                    </>
                )}
            </div>
        </Router>
    );
};

export default App;
