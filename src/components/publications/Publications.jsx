import React from 'react';
import './publications.css';

const Projects = () => {
    return (
        <section id="research" className="research-section">
            <h2 className="section__title">Research Projects</h2>
            <div className="projects__container">
                <div className="project__item">
                    <h3 className="project__title">Image Shadow Removal Using Non Shadow Mapping</h3>
                    <p className="project__description">
                        Removal of shadow from an image by lightening the area with its non-shadow counterpart and preserving the texture up to some extent.
                    </p>
                    <a
                        href="https://github.com/prakriti31/Image-shadow-removal-using-non-shadow-mapping"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project__link"
                    >
                        View Project on GitHub
                    </a>
                    <div className="additional__links">
                        <a
                            href="https://www.ijrar.org/papers/IJRAR23B3740.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="additional__links"
                        >
                            View the Research Paper
                        </a>
                    </div>
                </div>
                {/* Add more projects as needed */}
            </div>
        </section>
    );
};

export default Projects;
