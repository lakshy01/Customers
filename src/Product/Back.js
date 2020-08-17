import React, { Component } from 'react';
import { Col, Row, Button, ButtonGroup } from 'react-bootstrap';
import './Custombtn.css';
import { COLLARS } from "./non-components/collars";
import Summary from './Summary';
import Custombtn from './Custombtn';
import Display from './Display';
import Filter from './Filter';

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
                                <label className="scale">Measurements:  </label>
                                <ButtonGroup id="options">
                                    <Button>XS</Button><Button>S</Button><Button>M</Button><Button>L</Button><Button>XL</Button>
                                </ButtonGroup>
                                <Button type="submit" variant="secondary" id="scale">Scale</Button>
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