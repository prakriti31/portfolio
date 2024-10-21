import React from 'react'
import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Prakriti</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer__link">Projects</a>
                    </li>

                    <li>
                        <a href="#experience" className="footer__link">Experience</a>
                    </li>
                </ul>

                <div className="footer__social">

                    <a href="" className="footer__social-link" target="_blank">
                        <i className="bx bxl-instagram"></i>
                    </a>

                    <a href="" className="footer__social-link" target="_blank">
                        <i className="bx bxl-dribbble"></i>
                    </a>
                    <a href="" className="footer__social-link" target="_blank">
                        <i className="bx bxl-github"></i>
                    </a>

                </div>

            </div>
        </footer>
    )
}

export default Footer