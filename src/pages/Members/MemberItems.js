import React, { Component } from 'react';
import moment from 'moment';

class MemberItems extends Component {

    render() {
        const { member } = this.props
        return (
            <tr>
                <td>
                    <span className="custom-checkbox">
                        <input type="checkbox" id="checkbox1" name="options[]" defaultValue={1} />
                        <label htmlFor="checkbox1" />
                    </span>
                </td>
                <td>{member.name}</td>
                <td>{member.phone}</td>
                <td>{moment(member.birthday).format('DD-MM-YYYY')}</td>
                <td>
                    <a href="#addEmployeeModal" className="edit" data-toggle="modal" onClick={() => this.props.onEditClick(member)}><i className="material-icons" data-toggle="tooltip" title="Edit"></i></a>
                </td>
            </tr>
        );
    }
}

export default MemberItems;