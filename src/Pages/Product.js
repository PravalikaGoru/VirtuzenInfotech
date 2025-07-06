import React from 'react';
import './Home.css';

export default function Home(){
    return(
        <>
            <div className='home-wrapper'>
            <section className="cluster-section">
                <div className="text-section">
                    <h1>Streeto</h1>
                    <p>
                        An all-new food tech revolution connecting street vendors, home chefs, and food lovers via a hyperlocal delivery ecosystem. Streeto promotes entrepreneurship, sustainability, and inclusivity — with a powerful vendor-first model that redefines India's food delivery landscape.
                    </p>
                </div>
            </section>
            <section className="cluster-section">
                <div className="text-section">
                    <h1>MXE – Media Exchange Ecosystem </h1>
                <p>
                    MXE is the next-generation Global Media & Entertainment Exchange, revolutionizing how creators, studios, distributors, and audiences connect, transact, and collaborate. Built with edge cloud, AI curation, and immersive content capabilities, MXE is a leap into the future of entertainment.
                </p>
                </div>
            </section>
            <section className="cluster-section">
                <div className="text-section">
                    <h1>AURA – (AI-based Unified Recognition for Attendance) </h1>
                <p>
                    A robust AI-powered facial recognition solution engineered by RNIT Solutions. Leverages computer vision to auto-detect and log attendance from real-time image streams. Deployed with dedicated cloud/server infrastructure and dynamic, role-based dashboards.
                </p>
                </div>
            </section>
            </div>
        </>
    );
}
