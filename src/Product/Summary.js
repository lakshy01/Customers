import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

class Summary extends React.Component {
    render() {
        return (
            <div>
                <Container fluid className="summary" >
                    <Form onSubmit={this.addItem}>
                        <h5 style={{marginBottom: "2em", marginTop: "2em"}}> </h5>
                        <Form.Control as="textarea" type="text" style={{backgroundColor: "white"}} className="text" rows="5"
                            value="Customization Summary" disabled/> 
                            {/* {this.state.currentItem.text} */}
                    </Form>
                </Container>
            </div>
        );
    }
}
export default Summary;