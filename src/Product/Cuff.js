import React, { Component } from 'react';
import { Col, Row, Button, ButtonGroup, Container } from 'react-bootstrap';
import './Custombtn.css';
import { CUFFS } from "./non-components/cuffs";
import Summary from './Summary';
import Custombtn from './Custombtn';
import Display from './Display';
import Filter from './Filter';

class Cuffs extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cards: CUFFS,
            selectedCard: null,
            cardFilter: null
        };
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
                        </Col>
                        <Col md={5}>
                            <Display card={
                                this.state.cards.filter(
                                    card => card.id === this.state.selectedCard)[0]} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <Container style={{ marginLeft: "50px" }}>
                                <h4 align="center" style={{marginTop:"20px", marginBottom:"20px"}}>Measurements:  </h4>
                                <Container align="center" className="measure" style={{alignItems:"center"}}><Row>
                                    <ButtonGroup id="options">
                                        <Button>XS</Button><Button>S</Button><Button>M</Button><Button>L</Button><Button>XL</Button>
                                    </ButtonGroup>
                                    <Button type="submit" align="right" variant="secondary" id="scale" block style={{ width: "6em" }}>Scale</Button>
                                </Row>
                                </Container>
                            </Container>
                        </Col>
                        <Col>
                        <h4 align="center" style={{marginTop:"2em"}}>Customization Summary:</h4>
                    <Container fluid >
                        <Summary />
                    </Container>
                        </Col>
                    </Row>
                    
                    <Button type="submit" variant="secondary" id="scale" style={{ margin: "20px auto", width: "7em" }} block>Post</Button>

                </div>
            </div>
        );
    }
}

export default Cuffs;