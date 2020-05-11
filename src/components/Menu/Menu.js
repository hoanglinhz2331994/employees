import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';

const menus = [
    {
        name: "Projects",
        to: '/projects',
        exact: false
    },
    {
        name: "Members",
        to: '/members',
        exact: false
    }
];

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (<Route path={to} exact={activeOnlyWhenExact} children={({ match }) => {
        // var active = match ? 'active' : '';
        return (
            <li className="nav-item">
                <Link className="nav-link" to={to}>
                    {label}
                </Link>
            </li>
        );
    }} />)
}

class Menu extends Component {
    render() {
        return (
            <div>
                <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                    <Link className="sidebar-brand d-flex align-items-center justify-content-center" to='/projects'>
                        <div className="sidebar-brand-icon rotate-n-15">
                            <i className="fas fa-laugh-wink" />
                        </div>
                        <div className="sidebar-brand-text mx-3">Manage</div>
                    </Link>
                    {this.showMenus(menus)}

                </ul>
            </div>
        );
    }
    showMenus = (menus) => {
        var result = null;
        if (menus.length > 0) {
            result = menus.map((menu, index) => {
                return (<MenuLink key={index} label={menu.name} to={menu.to} activeOnlyWhenExact={menu.exact} />)
            })
        }
        return result;
    }
}

export default Menu;