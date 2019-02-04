import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from "react-router-dom"
import moment from "moment"

const ProjectDetails = (props) => {
  // project variable is from mapStateToProps return "project" which is from our main reducer "rootReducer.js"
  const { project, auth } = props;
  // if not logged 
  if (!auth.uid) return <Redirect to="/signin" />; 
  
  if (project) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{ project.title }</span>
            <p>{ project.content }</p>
          </div>

          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by {project.authorFirstName}  {project.authorLastName}</div>
            <div>{moment(project.createdAt.toDate()).calendar()}</div>
          </div>
        </div>
      </div>
    )
  }
  else {
    return (
      <div className="container center">
        <p>Loading project...</p>
      </div>
    )
  }
}

const mapStateToProps = (state, props_) => {
  const id = props_.match.params.id;
  const projects = state.firestore.data.projects;
  const project_ = projects ? projects[id] : null;

  return {
    project: project_,
    auth: state.firebase.auth
  };
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects' }
  ])
)(ProjectDetails)
