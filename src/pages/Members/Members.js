import React, { Component } from 'react';
import MemberItems from './MemberItems';
import moment from 'moment'
import axios from 'axios';

class Members extends Component {
    constructor(props) {
        super(props);
        this.state = {
            members: [],
            selectedMember: {
                id: -1,
                name: '',
                phone: '',
                birthday: ''
            }
        }
    }

    componentDidMount() {
        this.fetchMembers()
    }

    fetchMembers = () => {
        axios.get('/members').then(res => { this.setState({ members: res.data }) })
    }

    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.state.selectedMember[name] = value;
        this.setState(this.state.selectedMember)
    }

    onSubmit = (event) => {
        event.preventDefault();
        const memberObj = this.state.selectedMember
        if (memberObj.id < 0) {
            delete memberObj.id
        }

        let path = '/members'
        if (memberObj.id) {
            path += `/${memberObj.id}`
            axios.put(path, memberObj).then((resp) => console.log(resp.data));
        } else {
            axios.post(path, memberObj).then((resp) => {
                this.fetchMembers()
            });
        }
    }

    onEditClick = (member) => {
        this.setState({
            selectedMember: Object.assign({}, member)
        })
    }

    clearSelectedMemeber = () => {
        const selectedMember = {
            id: -1,
            name: '',
            phone: '',
            birthday: ''
        }
        this.setState({
            selectedMember
        })
    }

    render() {
        const { selectedMember } = this.state;
        return (
            <div>
                <div>
                    <div className="container">
                        <div className="table-wrapper">
                            <div className="table-title">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <h2>Manage <b>Members</b></h2>
                                    </div>
                                    <div className="col-sm-6">
                                        <a href="#addEmployeeModal" onClick={this.clearSelectedMemeber} className="btn btn-success" data-toggle="modal"><i className="material-icons"></i> <span>Add New Member</span></a>
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
                                        <th>Name</th>
                                        <th>Phone</th>
                                        <th>Birthday</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.members.map((member, index) => {
                                            return (<MemberItems key={index} member={member} onEditClick={this.onEditClick} />)
                                        })
                                    }
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
                                        <h4 className="modal-title">{
                                            selectedMember.id < 0 ? 'Add member' : 'Edit member'
                                        }</h4>
                                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input value={selectedMember.name} onChange={this.onChange} name="name" type="text" className="form-control" required />
                                        </div>
                                        <div className="form-group">
                                            <label>Phone</label>
                                            <input value={selectedMember.phone} onChange={this.onChange} type="text" name="phone" className="form-control" required />
                                        </div>
                                        <div className="form-group">
                                            <label>Birthday</label>
                                            <input value={moment(selectedMember.birthday).format('yyyy-MM-DD')} onChange={this.onChange} name="birthday" className="form-control" type="date" id="example-date-input"></input>

                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <input type="button" className="btn btn-default" data-dismiss="modal" defaultValue="Cancel" />
                                        <input type="submit" className="btn btn-success" data-dismiss="modal" onClick={this.onSubmit} defaultValue="Add" />
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

export default Members;