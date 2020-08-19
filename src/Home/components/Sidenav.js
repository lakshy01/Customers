import React from 'react'

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
                <Accordion className="accordian" style={{ textDecoration: 'none' }} defaultActiveKey="null">
                    <Accordion.Toggle as="h4" eventKey="0">
                        Men</Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Accordion>
                            <ul>
                                <li>
                                    <Accordion.Toggle as="h5" eventKey="0.a">
                                        Formal</Accordion.Toggle>
                                    <Accordion.Collapse eventKey="0.a">
                                        <ul>
                                            <li>
                                                <a href="/">Pants</a>
                                            </li>
                                            <li>
                                                <a href="/">Shirts</a>
                                            </li>
                                            <li>
                                                <a href="/">Blazers</a>
                                            </li>
                                            <li>
                                                <a href="/">Suits</a>
                                            </li>
                                        </ul>
                                    </Accordion.Collapse>
                                </li>
                                <li>
                                    <Accordion.Toggle as="h5" eventKey="0.b">
                                        Ethnic</Accordion.Toggle>
                                    <Accordion.Collapse eventKey="0.b">
                                        <ul>
                                            <li>
                                                <a href="/">Sherwanis</a>
                                            </li>
                                            <li>
                                                <a href="/">Kurta</a>
                                            </li>
                                            <li>
                                                <a href="/">Dhotis</a>
                                            </li>
                                            <li>
                                                <a href="/">Jackets</a>
                                            </li>
                                        </ul>
                                    </Accordion.Collapse>

                                </li>
                            </ul>
                        </Accordion>
                    </Accordion.Collapse>
                    <hr/>
                    <Accordion.Toggle as="h4" eventKey="1">
                        Women</Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                        <Accordion>
                            <ul>
                                <li>
                                    <Accordion.Toggle as="h5" eventKey="1.a">
                                        Casual</Accordion.Toggle>
                                    <Accordion.Collapse eventKey="1.a">
                                        <ul>
                                            <li>
                                                <a href="/">Crop Tops</a>
                                            </li>
                                            <li>
                                                <a href="/">Skirts</a>
                                            </li>
                                            <li>
                                                <a href="/">Dress</a>
                                            </li>
                                            <li>
                                                <a href="/">Jackets</a>
                                            </li>
                                            <li>
                                                <a href="/">Evening Gowns</a>
                                            </li>
                                            <li>
                                                <a href="/">Prom dress</a>
                                            </li>
                                            <li>
                                                <a href="/">Comic Prints</a>
                                            </li>
                                        </ul>
                                    </Accordion.Collapse>
                                </li>
                                <li>
                                    <Accordion.Toggle as="h5" eventKey="1.b">
                                        Ethnic</Accordion.Toggle>
                                    <Accordion.Collapse eventKey="1.b">
                                        <ul>
                                            <li>
                                                <a href="/">Lehangas</a>
                                            </li>
                                            <li>
                                                <a href="/">Kurtis</a>
                                            </li>
                                            <li>
                                                <a href="/">Dupatta</a>
                                            </li>
                                            <li>
                                                <a href="/">Sarees</a>
                                            </li>
                                            <li>
                                                <a href="/">Blouse</a>
                                            </li>
                                            <li>
                                                <a href="/">Chuddidhar</a>
                                            </li>
                                            <li>
                                                <a href="/">Maggam work</a>
                                            </li>
                                            <li>
                                                <a href="/">Embroidery</a>
                                            </li>
                                            <li>
                                                <a href="/">Salwar kameez</a>
                                            </li>
                                            <li>
                                                <a href="/">Anarkalis</a>
                                            </li>
                                        </ul>
                                    </Accordion.Collapse>

                                </li>
                                <li>
                                    <Accordion.Toggle as="h5" eventKey="1.c">
                                        Formal</Accordion.Toggle>
                                    <Accordion.Collapse eventKey="1.c">
                                        <ul>
                                            <li>
                                                <a href="/">Pants</a>
                                            </li>
                                            <li>
                                                <a href="/">Blazers</a>
                                            </li>
                                        </ul>
                                    </Accordion.Collapse>
                                </li>
                            </ul>
                        </Accordion>
                    </Accordion.Collapse>
                    <hr/>
                    <Accordion.Toggle as="h4" eventKey="2">
                        Kids</Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                        <Accordion>
                        <ul>
                            <li>
                            <li>
                                <a href="/">Boys</a>
                            </li>
                            </li>
                            <li>
                                <a href="/">Girls</a>
                            </li>
                        </ul>
                        </Accordion>
                    </Accordion.Collapse>
                </Accordion>

            </ul>

        </nav>
    )
}

export default Sidenav;