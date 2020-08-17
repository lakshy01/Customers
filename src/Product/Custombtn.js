import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './Custombtn.css';
import { NavLink } from 'react-router-dom';
import Routes from '../Routes';

class Custombtn extends Component {
    render() {
        return (
            <div >
                <h2 className="header">Casual Shirt</h2>
                <Navbar className="bar">
                    <Nav fill className="navs mx-auto">
                        <Nav.Item className="nav" activeClassName="active">
                            <NavLink exact style={{ textDecoration: "none" }} className="nav d-inline p-2" activeClassName="active" to="/Collar" eventKey={1}>Collar</NavLink>
                        </Nav.Item>
                        <Nav.Item className="nav" activeClassName="active">
                            <NavLink style={{ textDecoration: "none" }} className="nav d-inline p-2" activeClassName="active" to="/Cuffs" eventKey={2}>Cuffs</NavLink>
                        </Nav.Item>
                        <Nav.Item className="nav" activeClassName="active">
                            <NavLink style={{ textDecoration: "none"}} className="nav d-inline p-2" activeClassName="active" to="/Back" eventKey={3}>Back</NavLink>
                        </Nav.Item>
                        <Nav.Item className="nav" activeClassName="active">
                            <NavLink style={{ textDecoration: "none" }} className="nav d-inline p-2" activeClassName="active" to="/Front" eventKey={4}>Front</NavLink>
                        </Nav.Item>
                        <Nav.Item className="nav" activeClassName="active">
                            <NavLink style={{ textDecoration: "none" }} className="nav d-inline p-2" activeClassName="active" to="/Pocket" eventKey={5}>Pocket</NavLink>
                        </Nav.Item>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

export default Custombtn;