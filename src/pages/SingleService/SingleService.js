import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import services from '../../helper/fakedata';

const SingleService = () => {
    const { id } = useParams();
    const singleService = services.find(service => service.id === id);
    const {photo, name, description} = singleService;
    return (
        <>
        <Container style={{paddingTop: '100px', paddingBottom: '100px'}}>
            <Row>
                <Col lg={2} xl={2} xs={12} sm={12}>
                        
                </Col>
                <Col lg={8} xl={8} xs={12} sm={12}>
                <Card>
                    <Card.Img variant="top" src={photo} />
                    <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                <Col lg={2} xl={2} xs={12} sm={12}>
                    
                </Col>
            </Row>
        </Container>
    </>
    );
};

export default SingleService;