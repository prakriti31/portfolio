import React from 'react'

const Info = () => {
    return  (
        <div className="about__info grid">
            <div className="about__box">
                <i className='bx bxs-award about__icon'></i>
                <h3 className="about__title">Experience
                </h3>
                <span className="about__subtitle">2 years working</span>
            </div>

            <div className="about__box">
                <i className='bx bxs-briefcase about__icon'> </i>
                <h3 className="about__title">Completed
                </h3>
                <span className="about__subtitle">30+ projects</span>
            </div>

            <div className="about__box">
                <i className='bx bxs-certification about__icon'></i>
                <h3 className="about__title">Certifications
                </h3>
                <span className="about__subtitle">37+</span>
            </div>

        </div>
    )
}

export default Info