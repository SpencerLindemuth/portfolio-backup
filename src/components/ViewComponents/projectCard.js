import React from 'react'

let ProjectCard = (props) => {
    return (
        <div className="card">
            <h1>{props.title}</h1>
            <img onClick={() => window.location.href=props.url} src={props.background}/>
            <p>{props.description}</p>
            <a href={props.url}>Website</a><a href={props.gitUrl}>Github</a>
        </div>
    )
}

export default ProjectCard