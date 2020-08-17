import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

class Summary extends React.Component {
    render() {
        return (
            <div>
                <Container fluid className="summary" >
                    <Form onSubmit={this.addItem}>
                        <h5 style={{marginBottom: "20px"}}>Customization Summary </h5>
                        <Form.Control as="textarea" type="text" className="text" rows="5"
                            value="{this.state.currentItem.text}" disabled/>
                    </Form>
                </Container>
            </div>
        );
    }
}
export default Summary;