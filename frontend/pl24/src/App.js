import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import NavBar from "./components/helpers/NavBar";
import Home from "./components/home/Home";
import SponsorshipSection from "./components/sponsor/SponsorshipSection";
import Login from "./components/login/Login";
import SummarySection from "./components/home/SummarySection";
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
                        <Home/>
                        <SummarySection/>
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
