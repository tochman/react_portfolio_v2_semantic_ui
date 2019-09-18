import React from "react"

const ProjectCard = (props) => {
  let project = props.project
  return (
    <>
      <div className="eight wide column">
        <div className="ui card">
          <div className="image">
            <img src={project.image} />
          </div>
          <div className="content">
            <h3 className="ui header">{project.name}</h3>

            <div className="description">
              {project.description}
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default ProjectCard
