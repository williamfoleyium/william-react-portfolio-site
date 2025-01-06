import React, { Component } from 'react'

export default class projectsMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeProject: 1,
        };
    }

    handleProjectClick = (project) => {
        this.setState ({
            activeProject: project,
        });
    };

    renderContent = (projects) => {
        return projects.map((project, index) => {
            <div key={index} className={`project-sub-container-${index + 1}`}>
                <h3>{project.title}</h3>
                <img src={project.image} alt={project.title}/>
                <div>{project.description}</div>
                <div className="link-container">
                    <a href={project.github} target="_blank" rel='noopener noreferrer'>GITHUB</a>
                    <a href={project.demo} target="_blank" rel='noopener noreferrer'>DEMO</a>
                </div>
            </div>
        })
    }
  
    render() {
    return (
        <div className="project-menu">
            <div className="project-item-container">
                {project.Items.map((item, index) => (
                    <div key={index} classname={classNames("project-item", {activeProject: activeProject === index})}></div>
                ))}
            </div>
        </div>
    )
  }
}
