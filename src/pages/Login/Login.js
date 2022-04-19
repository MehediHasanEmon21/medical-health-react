import React from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { useForm } from "react-hook-form";

const Login = () => {
    const {signInGoogle, signInEmail} = useAuth();
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        signInEmail(data.email, data.password);
    };
    return (
        <>
            <Container style={{paddingTop: '100px', paddingBottom: '100px'}}>
                <Row>
                    <Col lg={2} xl={2} xs={12} sm={12}>
                            
                    </Col>
                    <Col lg={8} xl={8} xs={12} sm={12}>
                        <h2>Login</h2>

                        <Form onSubmit={handleSubmit(onSubmit)}>
                           
                            <Form.Group className="mb-3" controlId="email">
                                <Form.Label>email</Form.Label>
                                <Form.Control type="text" {...register("email")}  />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" {...register("password")} />
                            </Form.Group>
                            <Button variant="primary" type="submit">Login</Button>
                            
                            
                        </Form>

                        <Button onClick={signInGoogle} className="mt-5 me-2" variant="success"> <img style={{height: '30px', width: '30px', borderRadius: '50%'}} src="https://logowik.com/content/uploads/images/985_google_g_icon.jpg" alt="" /> Sign In Google</Button>
                        <Button className="mt-5" variant="info"> <img style={{height: '30px', width: '30px', borderRadius: '50%'}} src="https://cdn-icons-png.flaticon.com/512/124/124010.png" alt="" /> Sign In Facebook</Button>
                        <p className="mt-2">Don't Have an Account <Link to="/register">Click Here</Link></p>

                    </Col>
                    <Col lg={2} xl={2} xs={12} sm={12}>
                        
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Login;