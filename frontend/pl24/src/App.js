import React from 'react';
import NavBar from './components/NavBar';
import SponsorshipSection from "./components/SponsorshipSection";
import './App.css';

const App = () => {
    return (
        <div className="app">
            <NavBar/>
            <header className="main-section">
                <h1>Sứ Mạng Tầm Nhìn</h1>
                <button className="hero-button">Về Phiếu Linh</button>
            </header>
            <main>

                <SponsorshipSection/>

            </main>
        </div>
    );
}

export default App;
