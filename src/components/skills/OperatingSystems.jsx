import React from 'react';

const OperatingSystems = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">OperatingSystems
            </h3>

            <div className="skills__box">
                <div className="skills__group">

                    <div className="skills__data">
                        <i className='bx bxs-badge-check'></i>

                        <div>
                            <h3 className="skills__name">Windows</h3>
                            <span className="skills__level">Advanced</span>
                        </div>

                    </div>

                    <div className="skills__data">
                        <i className='bx bxs-badge-check'></i>

                        <div>
                            <h3 className="skills__name">Linux(Kali, Ubuntu, Parrot)</h3>
                            <span className="skills__level">Advanced</span>
                        </div>

                    </div>

                </div>


                <div className="skills__group">

                    <div className="skills__data">
                        <i className='bx bxs-badge-check'></i>

                        <div>
                            <h3 className="skills__name">VPC</h3>
                            <span className="skills__level">Basic</span>
                        </div>

                    </div>

                    <div className="skills__data">
                        <i className='bx bxs-badge-check'></i>

                        <div>
                            <h3 className="skills__name">Digital Ocean</h3>
                            <span className="skills__level">Basic</span>
                        </div>

                    </div>

                </div>


            </div>

        </div>
    )
}

export default OperatingSystems