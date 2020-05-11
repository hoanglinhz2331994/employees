import React, { Component } from 'react';
import axios from 'axios';
import ProjectItems from './ProjectItems';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: []
        }
    }

    componentDidMount() {
        this.fetchProjects();
    }

    fetchProjects = () => {
        axios.get('/projects').then(res => { this.setState({ projects: res.data }) })
    }

    render() {
        return (
            <div>
                <div>
                    <div className="container">
                        <div className="table-wrapper">
                            <div className="table-title">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <h2>Manage <b>Projects</b></h2>
                                    </div>
                                    <div className="col-sm-6">
                                        <a href="#addEmployeeModal" className="btn btn-success" data-toggle="modal"><i className="material-icons"></i> <span>Add New Project</span></a>
                                    </div>
                                </div>
                            </div>
                            <table className="table table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th>
                                            <span className="custom-checkbox">
                                                <input type="checkbox" id="selectAll" />
                                                <label htmlFor="selectAll" />
                                            </span>
                                        </th>
                                        <th>Project Name</th>
                                        <th>Description</th>
                                        <th>Members</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.projects.map((project, index) => {
                                        return (<ProjectItems key={index} project={project} />)
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    {/* Edit Modal HTML */}
                    <div id="addEmployeeModal" className="modal fade">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <form>
                                    <div className="modal-header">
                                        <h4 className="modal-title">Add Projects</h4>
                                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="form-group">
                                            <label>Project Name</label>
                                            <input type="text" className="form-control" required />
                                        </div>
                                        <div className="form-group">
                                            <label>Description</label>
                                            <textarea className="form-control" required defaultValue={""} />
                                        </div>
                                        <div className="form-group">
                                            <label>Members</label>
                                            <form >
                                                <select data-placeholder="Begin typing a name to filter..." multiple className="chosen-select" name="test">
                                                    <option value />
                                                    <option>American Black Bear</option>
                                                    <option>Asiatic Black Bear</option>
                                                    <option>Brown Bear</option>
                                                    <option>Giant Panda</option>
                                                    <option>Sloth Bear</option>
                                                    <option>Sun Bear</option>
                                                    <option>Polar Bear</option>
                                                    <option>Spectacled Bear</option>
                                                </select>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <input type="button" className="btn btn-default" data-dismiss="modal" defaultValue="Cancel" />
                                        <input type="submit" className="btn btn-success" defaultValue="Add" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Projects;