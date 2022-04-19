
import React from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';

const Contact = () => {
    return (
        <>
            <Container style={{paddingTop: '100px', paddingBottom: '100px'}}>
                <Row>
                    <Col lg={8} xl={8} xs={12} sm={12}>
                        <h2>Get in Touch</h2>

                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="email" placeholder="Name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>email</Form.Label>
                                <Form.Control type="text" placeholder="Email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Description</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            <Button variant="primary">Send</Button>
                        </Form>

                    </Col>
                    <Col lg={4} xl={4} xs={12} sm={12}>
                        
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Contact;