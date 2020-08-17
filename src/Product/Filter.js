import React from 'react';
import './Custombtn.css';
import { Container, Card } from 'react-bootstrap';
class Filter extends React.Component {
  render() {
    const card = this.props.cards
      .map(card => {
        return (
          <div
            key={Math.random()}
            className="col-3 col-lg-2  m-2">
            <Card className="item-holder" onClick={() => this.props.cardSelect(card.id)}>
              <img className="item" src={card.image} alt={card.name} />
            </Card>
          </div>
        );
      });

    return (
      <Container className="area">
          <div className="d-flex align-content-start flex-wrap">{card}</div>
     </Container>
    );
  }
}
export default Filter;
