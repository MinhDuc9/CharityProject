// src/components/SponsorshipSection.js
import React from 'react';
import SponsorshipBox from './SponsorshipBox';
import './SponsorshipSection.css';

const SponsorshipSection = () => {
    const sponsorshipData = [
        {
            description: 'Logo của Nhà Tài trợ xuất hiện trên các ấn phẩm, video truyền thông trên nền tảng (online + offline) và trong hồ sơ Dự án.',
            isDiamond: true,
            isGold: true,
            isSilver: true,
            isBronze: true
        },
        {
            description: 'Logo Nhà Tài trợ xuất hiện trong các bài đăng hợp tác với Nhà Báo tại truyền thông của Dự án.',
            isDiamond: true,
            isGold: true,
            isSilver: true,
            isBronze: false
        },
        {
            description: 'Logo của Nhà Tài trợ xuất hiện trên biểu mẫu đăng ký, email marketing, ấn phẩm offline trong các sự kiện gây quỹ của Dự án.',
            isDiamond: true,
            isGold: true,
            isSilver: false,
            isBronze: false
        },
        // Add more data as needed
    ];

    return (
        <section id="sponsor" className="sponsorship-section">
            <h2 className="section-title">Các Gói Tài Trợ</h2>
            <div className="sponsorship-levels">
                <div className="level diamond">
                    <h3>Kim Cương</h3>
                    <p>15.000.000đ<br />(số lượng 1)</p>
                </div>
                <div className="level gold">
                    <h3>Vàng</h3>
                    <p>9.000.000đ<br />(số lượng 2)</p>
                </div>
                <div className="level silver">
                    <h3>Bạc</h3>
                    <p>5.000.000đ<br />(số lượng 3)</p>
                </div>
                <div className="level bronze">
                    <h3>Đồng</h3>
                    <p>3.000.000đ</p>
                </div>
            </div>
            <div className="sponsorship-container">
                {sponsorshipData.map((data, index) => (
                    <SponsorshipBox
                        key={index}
                        description={data.description}
                        isDiamond={data.isDiamond}
                        isGold={data.isGold}
                        isSilver={data.isSilver}
                        isBronze={data.isBronze}
                    />
                ))}
            </div>
        </section>
    );
};

export default SponsorshipSection;
