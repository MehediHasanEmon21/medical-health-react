import React from 'react';
import './Footer.css';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="footer">
            <Container >
                <Row className="mb-5">
                    <Col lg={3} xl={3} xs={12} md={6}>
                        <h4 className="footer-title">DEPARTMENTS</h4>
                        <ul className="footer-list">
                            <li>Neurology</li>
                            <li>Ophthalmology</li>
                            <li>Nuclear Magnetic</li>
                            <li>X-Ray</li>
                            <li>Surgical</li>
                        </ul>
                    </Col>
                    <Col lg={3} xl={3} xs={12} md={6}>
                        <h4 className="footer-title">LINKS</h4>
                        <ul className="footer-list">
                            <li>Home</li>
                            <li>About</li>
                            <li>Departments</li>
                            <li>Doctors</li>
                            <li>Blog</li>
                        </ul>
                    </Col>
                    <Col lg={3} xl={3} xs={12} md={6}>
                        <h4 className="footer-title">SERVICES</h4>
                        <ul className="footer-list">
                            <li>Emergency Help</li>
                            <li>Qualified Doctors</li>
                            <li>Location & Directions</li>
                            <li>Medical Treatment</li>
                        </ul>
                    </Col>
                    <Col lg={3} xl={3} xs={12} md={6}>
                        <h4 className="footer-title">Support</h4>
                        <ul className="footer-list">
                            <li>Support</li>
                            <li>Contact Us</li>
                            <li>System Requirements</li>
                            <li>Register Activation Key</li>
                            <li>Site Feedback</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
            <hr />

            <Row className="mt-5">
                <small className="text-center">Copyright ©2022 All rights reserved | This template is made by Emon</small>
            </Row>

        </div>
    );
};

export default Footer;