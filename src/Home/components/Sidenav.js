import React from 'react'
import './Sidenav.css'
import { Accordion } from 'react-bootstrap'
import axios from 'axios'


class Sidenav extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            details: []
        };
    }
    componentDidMount() {
        axios.get(`http://localhost:8000/`)
            .then(res => {
                this.setState({
                    details: res.data
                })
                console.log(res.data)
            })
    }

    render() {
        let drawerClasses = 'side-drawer'
        if (this.props.show) {
            drawerClasses = 'side-drawer open'
        }
        const { details } = this.state
        const detailList = details.length ? (
            details.map(detail => {
                return (
                    <Accordion className="accordian" style={{ textDecoration: 'none' }} defaultActiveKey="null">
                        <Accordion.Toggle as="h4" eventKey="0">
                            {detail.section}</Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Accordion>
                                <ul>
                                    <Accordion.Toggle as="h5" eventKey="0.a">
                                        {detail.category}</Accordion.Toggle>
                                    <Accordion.Collapse eventKey="0.a">
                                        <ul>
                                            <a href={'/' + detail._id} style={{ textDecoration: 'none' }}>
                                                <li>{detail.items}</li>
                                            </a>
                                        </ul>
                                    </Accordion.Collapse>
                                </ul>
                            </Accordion>
                        </Accordion.Collapse>
                        <hr />
                    </Accordion>
                )
            })
        ) : (
                <p>Nothing to display</p>
            )

        return (
            <nav className={drawerClasses}>
                <ul>
                    {detailList}
                </ul>
            </nav>
        )
    }
}

export default Sidenav;