import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProjectAction } from '../../store/actions/projectActions'
import { Redirect } from "react-router-dom";

class CreateProject extends Component {
  state = {
    title: '',
    content: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    //console.log(this.state);
    this.props.createProject(this.state);
    this.props.history.push('/');
  }

  render() {
    const { auth } = this.props;
    // if not logged 
    if (!auth.uid) return <Redirect to="/signin" />;

    return <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Create New Project</h5>
          
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <label htmlFor="content">Content</label>
            <textarea id="content" className="materialize-textarea" onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">CREATE</button>
          </div>
        </form>
      </div>;
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

const mapDispactchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProjectAction(project))
  }
}

export default connect(mapStateToProps, mapDispactchToProps)(CreateProject)
