import React, { Component } from 'react';
import { Col, Row, Button, ButtonGroup, Container } from 'react-bootstrap';
import './Custombtn.css';
import Summary from './Summary';
import Custombtn from './Custombtn';
import Display from './Display';
import Filter from './Filter';
import history from '../history';
import axios from 'axios'

class CustomizationPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cards: [],
            selectedCard: null,
            cardFilter: null,
            id: null,
            id_1: null,
            id_2: null
        };
    }
    componentDidMount() {
        let id_1 = window.location.href.split('/')[3];
        let id_2 = window.location.href.split('/')[5];
        axios.get(`http://localhost:8000/` + id_1 + '/tags/' + id_2)
            .then(res => {
                this.setState({
                    cards: res.data.images,
                    id: res.data._id,
                    id_1: window.location.href.split('/')[3]
                })
            })
    }
    cardSelect(cardId) {
        this.setState({ selectedCard: cardId });
    }
    render() {
        return (
            <div className="page-container">
                <div className="content-wrap">
                    <Row >
                        <Col md={7}>
                            <Custombtn />
                        </Col>
                    </Row>
                    <Row className="main">
                        <Col md={7}>
                            <Filter
                                cards={this.state.cards}
                                cardSelect={cardId => this.cardSelect(cardId)} />
                            <Container style={{ marginLeft: "50px" }}>
                                <h4 align="center" style={{ marginTop: "20px", marginBottom: "20px" }}>Measurements:  </h4>
                                <Container align="center" className="measure" style={{ alignItems: "center" }}><Row>
                                    <ButtonGroup id="options">
                                        <Button>XS</Button><Button>S</Button><Button>M</Button><Button>L</Button><Button>XL</Button>
                                    </ButtonGroup>
                                    <Button type="submit" align="right" variant="secondary" id="scale" block style={{ width: "6em" }}>Scale</Button>
                                </Row>
                                </Container>
                            </Container>

                        </Col>
                        <Col md={5}>
                            <Display card={
                                this.state.cards.filter(
                                    card => card.id === this.state.selectedCard)[0]} />
                        </Col>
                    </Row>
                    <h4 align="center" style={{ marginTop: "2em" }}>Customization Summary:</h4>
                    <Container fluid >
                        <Summary />
                    </Container>
                    <a href={'/' + this.state.id_1}><Button type="submit" variant="secondary" id="scale" style={{ margin: "20px auto", width: "7em" }} onClick={() => history.push('/' + this.state.id_1)} block>Post</Button></a>
                </div>
            </div>
        );
    }
}

export default CustomizationPage;