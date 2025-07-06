
import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import logo1 from '../collabration_1.jpg';
import logo2 from '../collabration_2.jpg';
import logo3 from '../collabration_3.jpg';

export default function Home(){

    const navigate = useNavigate(); // ✅ setup

    // Example: function to call on click
    const handleKnowMoreClick = () => {
        // You can perform any operations here, then navigate
        navigate('/KnowMore'); // ✅ navigate to KnowMore page
        
    };

    // Example: function to call on click
    const foundersProformaClick = () => {
        // You can perform any operations here, then navigate
        navigate('/Founders'); // ✅ navigate to KnowMore page
    };
    return(
        <>
            <h1>
                We don’t just solve problems — we redefine what’s possible.
            </h1>
            <div className='home-wrapper'>
                <section className="cluster-section">
                    <div className="text-section">
                        <p>
                            Virtuzen Infotech Private Limited is an innovation-first technology company committed to reimagining how businesses interact with technology. Our dynamic portfolio spans industries like food tech, media, healthcare, and enterprise systems — with a focus on intelligent automation, user-centric platforms, and global scalability. From agile startups to Fortune 500 enterprises, we deliver technology that transforms.
                        </p>
                    </div>
                </section>
                <section className="cluster-section">
                    <div className="text-section">
                        <h1>Key Contributions </h1>
                    <p>
                        Designed AI-native architecture for high-performance SaaS platforms< br/>
                	    Introduced zero-commission vendor models empowering local businesses< br/>
                        Digitally modernized healthcare and education infrastructures< br/>
                	    Launched blockchain-ready frameworks for media monetization at scale< br/>    
                    </p>
                    </div>
                </section>

                <section className="know-more-cluster">
                    <div className="text-section">
                        <h1>
                            Industry Partnerships & Collaborations
                        </h1>
                        <div className="image-section">
                            <img src={logo1} alt="Cluster Illustration" />
                            <img src={logo2} alt="Cluster Illustration" />
                            <img src={logo3} alt="Cluster Illustration" />
                        </div>                 
                    </div>

                    <div className="know-more-section">
                    <p>
                         <button onClick={handleKnowMoreClick} className="know-more-link"> -- &gt; &gt; </button>
                    </p>
                    </div>
                </section>

                <section className="founder-cluster">
  <                 div className="text-left">
                        <h1>Founders Proforma</h1>
                    </div>
                    <div className="text-right">
                        <p>             
                            <span className="highlight">"Innovation, to me, is not about what’s next — it’s about what’s missing. And I build for that."</span><br />
                                — Aditya Vutpala, Founder, VirtuZen
                        </p>
                        <p>
                                <span className="highlight">“Great technology isn’t just built — it’s nurtured, refined, and delivered with purpose. That’s where I come in.”</span><br />
                                — Surya, Co-Founder, VirtuZen
                        </p>
                        <div className='founder-more-section' >
                            <button onClick={foundersProformaClick} className="know-more-link"> --&gt;&gt; </button>
                        </div>
                    </div>
                </section>


            </div>
        </>
    );
}

