import React from 'react';
import { Container, Form } from 'react-bootstrap';

class Summary extends React.Component {
    // constructor(props) {
    //     super(props);

    //     // this.state = {
    //     //     value: this.props.value
    //     // };
    // }
    render() {
        return (
            <div>
                <Container fluid className="summary" >
                    <Form >
                        <h5 style={{ marginBottom: "2em", marginTop: "2em" }}> </h5>
                        <p><strong>Item:</strong> {this.props.value} </p>
                        <Form.Control as="textarea" type="text" style={{ backgroundColor: "white" }} className="text" rows="5"
                            value={this.props.value} disabled />
                    </Form>
                </Container>
            </div>
        );
    }
}
export default Summary;