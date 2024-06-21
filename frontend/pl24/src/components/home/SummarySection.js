// src/components/summary/SummarySection.js
import React from 'react';
import './SummarySection.css'; // Import CSS for styling

const SummarySection = () => {
    return (
        <section id="summary" className="summary-section">
            <div className="summary-box">
                <h2>Lịch Sử Hình Thành</h2>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div className="summary-box">
                <h2>Tầm Nhìn, Sứ Mệnh</h2>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div className="summary-box">
                <h2>Mô Hình Hoạt Động</h2>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
        </section>
    );
};

export default SummarySection;
