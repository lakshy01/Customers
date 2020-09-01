import React, { Component } from "react";
import { Button, Col, Form, Container, Row } from 'react-bootstrap';
import history from './../history';
// import "./Home.css";
import Sidenav from '../Home/components/Sidenav';
import Summary from '../Customize/Summary';
import Toolbar from '../Home/components/Toolbar';
import Backdrop from '../Home/components/Backdrop';
import Measure from '../Customize/Measure'
import axios from 'axios';

export default class Itempage extends Component {
    state = {
        image: 'https://www.siliconvalleymedicalclinic.com/wp-content/plugins/complianz-gdpr/assets/images/placeholder.jpg',
        disabled: false,
        sideDrawerOpen: false,
        id: null,
        value: '',
        size: '',
        id_0: null
    }
    drawerToggleClickHandler = () => {
        this.setState(prevState => {
            return { sideDrawerOpen: !prevState.sideDrawerOpen }
        })
    }
    backdropClickHandler = () => {
        this.setState({ sideDrawerOpen: false })
    }
    imageHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                this.setState({ image: reader.result, disabled: true })
            }
        }
        reader.readAsDataURL(e.target.files[0])
    }
    componentDidMount() {
        let id = this.props.match.params.item_id;
        axios.get(`http://localhost:8000/customize/` + id)
            .then(res => {
                this.setState({
                    value: res.data.items,
                    id: res.data._id
                })
            })
        axios.get(`http://localhost:8000/customize/` + id + `/tags`)
            .then(res => {
                this.setState({
                    id_0: res.data[0]._id
                })
            })
            .catch(res => { console.log(res) })
    }
    sizeUpdate = (e) => {
        this.setState({ size: e })
    }

    render() {
        const { image, id_0 } = this.state
        let backdrop

        if (this.state.sideDrawerOpen) {
            backdrop = <Backdrop click={this.backdropClickHandler} />
        }
        return (
            <div style={{ height: '100%' }} className="Home">
                <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
                <Sidenav show={this.state.sideDrawerOpen} />
                {backdrop}
                <div className="lander">
                    <Container className="customize">
                        <Row>
                            <Col>
                                <div className="img-holder">
                                    <img src={image} alt="" id="img" className="img" />
                                </div>
                                <input type="file" id="input" accept="image/*" onChange={this.imageHandler}></input>
                                <label htmlFor="input" className="image-upload">
                                    Upload Image
                            </label>
                            </Col>
                            <Col style={{ paddingTop: "50px" }}>
                                <Measure />
                                <Summary value={this.state.value} size={this.state.size} />
                                <Button type="submit" variant="secondary" style={{ marginTop: "2em" }} className="scalebtn" disabled={this.state.disabled} block
                                    href={'/' + this.state.id + '/customization/' + id_0}>Customize</Button>
                            </Col>
                        </Row>
                    </Container>
                    <Form>
                        <Container className="form mx-auto">
                            <Row>
                                <Col>
                                    <Form.Label><h5>Get designer home</h5> </Form.Label>
                                </Col>
                                <Col align="right">
                                    <input type="checkbox" value="getdes" name="getdesigner" />
                                </Col>
                            </Row>
                        </Container>
                        <Container className="form mx-auto">
                            <Row>
                                <Col>
                                    <Form.Label><h5>Don't have the material</h5> </Form.Label>
                                </Col>
                                <Col align="right">
                                    <input type="radio" value="no-mat" name="material" defaultChecked />
                                </Col>
                            </Row>
                        </Container>
                        <Container className="form mx-auto">
                            <Row>
                                <Col>
                                    <Form.Label><h5>Have the material</h5> </Form.Label>
                                </Col>
                                <Col align="right">
                                    <input type="radio" value="mat" name="material" />
                                </Col>
                            </Row>
                            <Row className="field">
                                <Col>
                                    <Form.Label>Mobile Number: </Form.Label>
                                </Col>
                                <Col align="right">
                                    <Form.Control type="digit" />
                                </Col>
                            </Row>
                            <Row className="field">
                                <Col>
                                    <Form.Label>Email ID: </Form.Label>
                                </Col>
                                <Col align="right">
                                    <Form.Control type="email" />
                                </Col>
                            </Row>
                            <Row className="field">
                                <Col>
                                    <Form.Label>Address: </Form.Label>
                                </Col>
                                <Col align="right">
                                    <Form.Control type="textarea" rows="1" />
                                </Col>
                            </Row>
                            <Row className="field">
                                <Col>
                                    <Form.Label>City: </Form.Label>
                                </Col>
                                <Col align="right">
                                    <Form.Control as="select" placeholder="Select city">
                                        <option>Select City</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Form.Control>
                                </Col>
                            </Row>
                            <Row className="field">
                                <Col>
                                    <Form.Label>State: </Form.Label>
                                </Col>
                                <Col align="right">
                                    <Form.Control as="select">
                                        <option>Select State</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Form.Control>
                                </Col>
                            </Row>
                            <Row className="field">
                                <Col>
                                    <Form.Label>Country: </Form.Label>
                                </Col>
                                <Col align="right">
                                    <Form.Control as="select">
                                        <option>Select Country</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Form.Control>
                                </Col>
                            </Row>
                            <Row className="field">
                                <Col>
                                    <Form.Label>Pincode: </Form.Label>
                                </Col>
                                <Col align="right">
                                    <Form.Control type="textarea" />
                                </Col>
                            </Row>
                            <Row className="field">
                                <Col>
                                    <Form.Label>Quantity: </Form.Label>
                                </Col>
                                <Col align="right">
                                    <Form.Control as="select">
                                        <option>Select Quantity</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Form.Control>
                                </Col>
                            </Row>
                        </Container>
                        <Button id="post" variant="secondary" type="submit" block>Post</Button>
                    </Form>
                    {/* <div className="instructions" >
                    <Container style={{width:"500px"}} >
                        <h2>Instructions To Upload</h2>
                        <ul >
                            <li>Uploaded image should be clear.</li>
                            <li>Mention if there are any addtional requirements.</li>
                            <li>Open the page where you want insert the image.</li>
                            <li>Use your keywords in photo option.</li>
                            <li>In the Add images select, add selected to insert image into the page.</li>
                        </ul>
                    </Container>
                    </div> */}
                </div>
            </div >
        );
    }
}
