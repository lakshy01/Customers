import React, { Component } from 'react';
import { Col, Row, Button, ButtonGroup } from 'react-bootstrap';
import './Custombtn.css';
import { COLLARS } from "./non-components/collars";
import Summary from './Summary';
import Custombtn from './Custombtn';
import Display from './Display';
import Filter from './Filter';
import history from '../history';

class Back extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cards: COLLARS,
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
                            <Row >
                                <ButtonGroup className="mx-auto" aria-label="Basic example">
                                    <Button variant="light" className="btnAl" onClick={() => history.push('/Cuffs')}>Back</Button>
                                    <Button variant="light" className="btnAr" onClick={() => history.push('/Front')}>Next</Button>
                                </ButtonGroup>
                            </Row>
                            <Row >
                                <Button variant="light" type="submit" className="btnB mx-auto" size="md" block >
                                    Measurements</Button>
                            </Row>
                        </Col>
                        <Col md={5}>
                            <Display card={
                                this.state.cards.filter(
                                    card => card.id === this.state.selectedCard)[0]} />
                        </Col>
                    </Row>
                </div>
                <Summary />
            </div>
        );
    }
}

export default Back;