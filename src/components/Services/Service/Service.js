import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const Service = (props) => {
    const {id, name, photo, description} = props.service;
    return (
        <>
          <Col xs={4} lg={4} md={2} sm={1}>
            <Card>
                <Card.Img variant="top" src={photo} />
                <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Link to={`service/${id}`}>
                    <Button variant="primary">Read More</Button>
                 </Link>
                </Card.Body>
            </Card>
        </Col>  
        </>
    );
};

export default Service;