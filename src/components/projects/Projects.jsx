import React from 'react';
import './projects.css'

const Projects = () => {
    return (
        <section id="research-projects" className="research-section">
            <h2 className="section__title">Research Projects</h2>
            <div className="projects__container">
                <div className="project__item">
                    <h3 className="project__title">Project Title 1</h3>
                    <p className="project__description">
                        Description of your research project. Talk about the objectives, methods used, challenges faced, and the outcome.
                    </p>
                    <a href="link_to_project_paper_or_repository" target="_blank" rel="noopener noreferrer" className="project__link">
                        View Project
                    </a>
                </div>
                <div className="project__item">
                    <h3 className="project__title">Project Title 2</h3>
                    <p className="project__description">
                        Description of your second research project.
                    </p>
                    <a href="link_to_project_paper_or_repository" target="_blank" rel="noopener noreferrer" className="project__link">
                        View Project
                    </a>
                </div>
                {/* Add more projects as needed */}
            </div>
        </section>
    );
};

export default Projects;
