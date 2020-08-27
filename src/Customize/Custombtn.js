import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import './Custombtn.css';
import { NavLink, withRouter } from 'react-router-dom';
import axios from 'axios';

class Custombtn extends React.Component {
    state = {
        id: null,
        route: null,
        header: '',
        details: []
    }
    componentDidMount() {
        let id = window.location.href.split('/')[3];
        axios.get(`http://localhost:8000/` + id)
            .then(res => {
                this.setState({
                    header: res.data.items,
                    id: res.data._id
                })
            })
        axios.get(`http://localhost:8000/` + id + '/tags/')
            .then(res => {
                this.setState({
                    route: res.data[0]._id,
                    details: res.data
                })
    })
}
render() {
    const { id, details} = this.state
    const detailItems = details.map(detail => {
        return (
            <Nav.Item className="nav" activeClassName="active">
                <NavLink exact style={{ textDecoration: "none" }} className="nav d-inline p-2" activeClassName="active" to={"/"+ id +"/customization/" + detail._id} eventKey={1}>{detail.name}</NavLink>
            </Nav.Item>
        )
    })
    return (
        <Container style={{ margin: "2em" }}>
            <h2 className="header">{this.state.header}</h2>
            <Navbar className="bar">
                <Nav fill className="navs mx-auto">
                    {detailItems}
                </Nav>
            </Navbar>
        </Container>
    );
}
}


export default withRouter(Custombtn);