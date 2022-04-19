import React from 'react';
import './About.css';
import { Col, Container, Row } from 'react-bootstrap';



const About = () => {
    return (
        <>  
            <div className="about-top">
                <Container>
                    <Row className="pt-5 mt-5">
                        <Col xl={12} lg={12} md={12} sm={12}>
                            <h2 className="pt-5" style={{color: 'white'}}>ABOUT US</h2>
                            <h4>Home | About Us</h4>
                        </Col>
                        
                    </Row>
                </Container>
            </div>

            <div className="about-description py-5">
                <Container>
                    <Row>
                        <Col xl={6} lg={6} md={6} sm={6}>
                            <h2 className="mb-5">Welcome to Medica Health Center</h2>
                            <p className="mb-4">Phasellus at nunc orci. Donec ipsum metus, pharetra quis nunc sit amet, maximus vehicula nibh. Praesent pulvinar porta elit, a commodo erat accumsan sed. Vivamus vel tristique nibh. Donec imperdiet congue orci consequat mattis. Donec rutrum porttitor sollicitudin. Pellentesque id dolor tempor sapien feugiat ultrices nec sed neque. Fusce ac mattis nulla. Morbi eget ornare dui. Donec nec fringilla mi. Pellentesque molestie consequat felis vitae elementum. Proin ut tempor urna.</p>
                            <Row>
                                <Col xl={6} lg={6} md={6} sm={12}>
                                    <ul>
                                        <li>Cardiovascular Diseases</li>
                                        <li>Ophthalmology</li>
                                        <li>Gastroenterology</li>
                                        <li>Neurology</li>
                                    </ul>
                                </Col>
                                <Col xl={6} lg={6} md={6} sm={12}>
                                    <ul>
                                        <li>Neonatology</li>
                                        <li>oracic Surgery</li>
                                        <li>Plastic Surgery</li>
                                        <li>Ortopedy</li>
                                    </ul>
                                </Col>
                            </Row>
                        </Col>

                        <Col xl={6} lg={6} md={6} sm={6}>
                            <img src="https://preview.colorlib.com/theme/medica/img/bg-img/xabout1.png.pagespeed.ic.OSYf4gasFP.webp" alt="" />
                        </Col>
                    </Row>
                </Container>
            </div>
           
        </>
    );
};

export default About;