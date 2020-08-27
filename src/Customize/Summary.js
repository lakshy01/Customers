import React from 'react';
import { Container } from 'react-bootstrap';
// import axios from 'axios'

class Summary extends React.Component {
    render() {
        return (
            <div>
                <Container fluid className="summary" >
                <h5 style={{ marginBottom: "2em", marginTop: "2em" }}> </h5>
                    <p><strong>Item:</strong> {this.props.value} </p>
                    <p><strong>Size:</strong> {this.props.size} </p>
                </Container>
            </div>
        );
    }
}
export default Summary;