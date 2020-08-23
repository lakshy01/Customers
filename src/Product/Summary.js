import React from 'react';
import { Container, Form } from 'react-bootstrap';
import { SUMMARY } from './non-components/summary';

class Summary extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            summary: SUMMARY
        };
    }
    render() {
        return (
            <div>
                <Container fluid className="summary" >
                    <Form onSubmit={this.addItem}>
                        <h5 style={{ marginBottom: "2em", marginTop: "2em" }}> </h5>
                        <Form.Control as="textarea" type="text" style={{ backgroundColor: "white" }} className="text" rows="5"
                            value={this.state.summary} disabled />
                    </Form>
                </Container>
            </div>
        );
    }
}
export default Summary;