import React from 'react'
import ProjectCard from '../ViewComponents/projectCard'
import artsyfartsy from '../../images/artsyfartsy.PNG'
import csschool from '../../images/csschool.PNG'
import hilo from '../../images/hilo.PNG'

let SectionOne = (props) => {
    let projects = [
        {   title: "CSSchool",
            image: csschool,
            description: "A website designed to teach CSS basics to people of all ages in an interactive learning environment",
            url: "https://CSSchool.herokuapp.com",
            gitUrl: "https://github.com/spencerlindemuth/CSSchool-frontend"
        },
        {
            title: "Hi-Lo",
            image: hilo,
            description: "A turn based, two player game based on the popular card game Acey Deucey",
            url: "http://hi-lo.netlify.com",
            gitUrl: "https://github.com/marth00165/HILO-front-end"

        },
        {
            title: "ArtsyFarsty", 
            image: artsyfartsy,
            description: "A website that allows users to create their own digital gallery of select works from the METTM museum",
            url: "https://ArtsyFartsy.herokuapp.com",
            gitUrl: "https://github.com/SpencerLindemuth/ArtsyFartsy-Frontend"

        }]
    return (
        <div className="parallaxOne">
            <div className="content">
                <h1>Projects</h1>
                <div id="projectGrid">{projects.map(project => {
                    return <ProjectCard title={project.title} background={project.image} description={project.description} url={project.url} gitUrl={project.gitUrl}/>
                })}</div>
            </div>
        </div>
    )
}

export default SectionOne