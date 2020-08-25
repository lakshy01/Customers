import React from 'react';
import { Container, Form, Col, Row } from 'react-bootstrap';

class Summary extends React.Component {
    constructor(props) {
        super(props);

        // console.log(props);
        // this.state = {
        //     size: this.props.size
        // };
    }
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