import React from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const {registerInEmail} = useAuth();
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        registerInEmail(data.email, data.password);
    };
    return (
        <>
            <Container style={{paddingTop: '100px', paddingBottom: '100px'}}>
                <Row>
                    <Col lg={2} xl={2} xs={12} sm={12}>
                            
                    </Col>
                    <Col lg={8} xl={8} xs={12} sm={12}>
                        <h2>Register</h2>

                        <Form onSubmit={handleSubmit(onSubmit)}>
                           
                            <Form.Group className="mb-3" controlId="email">
                                <Form.Label>email</Form.Label>
                                <Form.Control type="text" placeholder="Email" {...register("email")} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" {...register("password")} />
                            </Form.Group>
                            
                            <Button variant="primary" type="submit">Sign In</Button>
                        </Form>

                        <p className="mt-2">Already Have an Account <Link to="/login">Sign In</Link></p>

                    </Col>
                    <Col lg={2} xl={2} xs={12} sm={12}>
                        
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Login;