import React from 'react'
import { NAVOPTS } from '../non-components/navoptions'
import './Sidenav.css'
import { Accordion } from 'react-bootstrap'

const Sidenav = props => {
    let drawerClasses = 'side-drawer'
    if (props.show) {
        drawerClasses = 'side-drawer open'
    }
    return (
        <nav className={drawerClasses}>
            <ul>
                {NAVOPTS.map((details) => {
                    return (
                        <Accordion className="accordian" style={{ textDecoration: 'none' }} defaultActiveKey="null">
                            <Accordion.Toggle as="h4" eventKey="0">
                                {details.section}</Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                                <Accordion>
                                    <ul>
                                        <Accordion.Toggle as="h5" eventKey="0.a">
                                            {details.category}</Accordion.Toggle>
                                        <Accordion.Collapse eventKey="0.a">
                                            <ul>
                                                {details.item.map((items) => {
                                                    return (
                                                        <li><a href="/">{items.name}</a></li>
                                                    )
                                                })}
                                            </ul>
                                        </Accordion.Collapse>
                                    </ul>
                                </Accordion>
                            </Accordion.Collapse>
                            <hr />
                        </Accordion>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Sidenav;