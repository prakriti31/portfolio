import React from 'react'
import "./footer.css";

const Footer = () => {

    const copyPhoneToClipboard = () => {
        navigator.clipboard.writeText('+1 (312)-479-6193');
        alert('Phone number copied to clipboard!');
    };

    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Prakriti</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#skills" className="footer__link">Skills</a>
                    </li>

                    <li>
                        <a href="#qualification" className="footer__link">Experience</a>
                    </li>

                    <li>
                        <a href="#research" className="footer__link">Research</a>
                    </li>

                </ul>

                <div className="footer__social">
                    <a href="https://www.linkedin.com/in/prakritisharma31/" className="footer_social-link"
                       target="_blank" rel="noopener noreferrer" style={{color: 'black'}}>
                        <i className="uil uil-linkedin" style={{color: 'black'}}></i>
                    </a>

                    {/* Phone icon: copy to clipboard */}
                    <div className="footer_social-link" onClick={copyPhoneToClipboard}
                         style={{cursor: 'pointer', color: 'black'}}>
                        <i className="uil uil-phone" style={{color: 'black'}}></i>
                    </div>

                    {/* Email: opens default mail client */}
                    <a href="mailto:psharma23@hawk.iit.edu" className="footer_social-link" target="_blank"
                       rel="noopener noreferrer" style={{color: 'black'}}>
                        <i className="uil uil-envelope" style={{color: 'black'}}></i>
                    </a>

                    <a href="https://github.com/prakriti31" className="footer_social-link" target="_blank"
                       rel="noopener noreferrer" style={{color: 'black'}}>
                        <i className="uil uil-github-alt" style={{color: 'black'}}></i>
                    </a>
                </div>


            </div>
        </footer>
    )
}

export default Footer