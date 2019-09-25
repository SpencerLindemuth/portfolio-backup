import React from 'react'

let ProjectCard = (props) => {
    return (
        <div className="card">
            <h1>{props.title}</h1>
            <img onClick={() => window.location.href=props.url} src={props.background}/>
            <p>{props.description} &nbsp; <span onClick={() => props.moreClick(props.id)} className="more">More &#8594;</span></p>
            <a href={props.url}>Website</a><a href={props.gitUrl}>Github</a>
        </div>
    )
}

export default ProjectCard