import React, { Component } from 'react';

class ProjectItems extends Component {
    render() {
        return (
            <tr>
                <td>
                    <span className="custom-checkbox">
                        <input type="checkbox" id="checkbox1" name="options[]" defaultValue={1} />
                        <label htmlFor="checkbox1" />
                    </span>
                </td>
                <td>{this.props.project.name}</td>
                <td>{this.props.project.description}</td>
                <td></td>
                <td>
                    <a href="#addEmployeeModal" className="edit" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit"></i></a>
                </td>
            </tr>
        );
    }
}

export default ProjectItems;