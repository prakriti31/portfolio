import React, {useState} from "react";
import "./qualification.css";

const Qualification = () => {
      const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <section id="qualification" className="qualification__section">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My Personal Journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div
                        className={
                          toggleState === 1
                              ? "qualification__button qualification__active button--flex"
                              : "qualification__button button--flex"
                        }
                        onClick={() => toggleTab(1)}
                    >
                        <i className="uil uil-graduation-cap qualification__icon"></i>
                        Education
                    </div>

                    <div
                        className={
                          toggleState === 2
                            ? "qualification__button qualification__active button--flex"
                            : "qualification__button button--flex"
                        }
                        onClick={() => toggleTab(2)}
                    >
                        <i className="uil uil-briefcase-alt qualification__icon"></i>
                        Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    <div
                        className={
                        toggleState === 1
                            ? "qualification__content qualification__content-active"
                            : "qualification__content"
                        }
                    >
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Master's in Computer Science</h3>
                                <span className="qualification__subtitle">
                                    Illinois Institute Of Technology
                                </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i> 2024 - Present
                                </div>
                            </div>

                            < div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            < div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Bachelor's of Technology in Computer Science</h3>
                                <span className="qualification__subtitle">
                                    Vellore Institute Of Technology
                                </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i> 2019 - 2024
                                </div>
                            </div>
                        </div>

                    </div>

                    <div
                        className={
                          toggleState === 2
                            ? "qualification__content qualification__content-active"
                            : "qualification__content"
                        }
                    >
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Research Assistant</h3>
                                <span className="qualification__subtitle">
                                    Illinois institute Of Technology - Chicago, United States
                                </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i> October 2024 - Present
                                </div>
                            </div>

                            < div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            < div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Software Engineer</h3>
                                <span className="qualification__subtitle">
                                    Cashfree Payments - Bangalore, India
                                </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i> June 2023 - July 2024
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Software Engineer Intern</h3>
                                <span className="qualification__subtitle">
                                    Cashfree Payments - Bangalore India
                                </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i> September 2022 - May 2023
                                </div>
                            </div>

                            < div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification