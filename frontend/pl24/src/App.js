import React from 'react';
import NavBar from './components/NavBar';
import './App.css';

const App = () => {
    return (
        <div className="app">
            <NavBar />
            <header className="hero-section">
                <h1>Sứ Mạng Tầm Nhìn</h1>
                <button className="hero-button">Về Phiếu Linh</button>
            </header>
        </div>
    );
}

export default App;
