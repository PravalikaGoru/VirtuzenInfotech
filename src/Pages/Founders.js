
import React from 'react';
import '../App.css';
import logo from '../Aditya_Founder.jpeg';
import './Founders.css'
export default function Founders(){
    return(
        <>
            <h1>Founders Proforma </h1>
            <div className='home-wrapper'>
                <section className="cluster-section">
                    <div className="text-section">
                        <p>
                            Aditya Vutpala is a technologist, creative strategist, and serial entrepreneur known for turning bold ideas into transformative ventures. He began his career at 23, exploring virtual production and global innovation hubs before pioneering the use of Unreal Engine in Indian cinema. From reimagining cinema to reshaping enterprise technology, his journey is one of fearless innovation powered by purpose. <br />
                            He founded APTSOL Global, scaled it with precision, and exited with impact — earning recognition as a rising voice in future tech. Aditya’s leadership now spans a bold portfolio and has led groundbreaking ventures across sectors: Monkey Mind Movies (Television and entertainment innovation), Vault Productions (scalable media production and Gaming ), Virtuzen Studios  digital transformation), and Runam Finance (fintech evolution). <br />
                            Off the field, Aditya is as disciplined as he is visionary. A Prime Minister’s Medal recipient, All India Best Cadet Awardee, and former national rugby player, he now serves as the General Secretary of the Telangana Rugby Association, nurturing leadership through sport and strategy.<br />
                            At Virtuzen, he’s crafting a global tech powerhouse where purpose drives progress — and innovation fuels the future.<br />
                        </p>
                        </div>
                        <div className="image-content">
                            <img src={logo} alt="Virtuzen Infotech" className="profile-image" />
                            <span className="brand-name">Aditya</span>
                        </div>
                        
                </section>
                <section className="cluster-section">
                    <div className="text-section">
                            <p>
                                Surya is the driving force behind Virtuzen’s seamless execution. A full-stack developer by skill and an operations strategist by nature, he bridges technology and delivery with sharp precision.<br />
                                From building robust cloud systems to scaling agile teams, Surya has led both tech development and HR transformation. His deep understanding of infrastructure, culture, and process makes him the foundation beneath every bold idea Virtuzen brings to life. <br />
                            </p>
                    </div>
                </section>
            </div>

        </>
    );
}

