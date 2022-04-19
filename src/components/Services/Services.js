import React from 'react';
import { Container, Row } from 'react-bootstrap';
import services from '../../helper/fakedata';
import Service from './Service/Service';


const Services = () => {
    return (
        <>
        <Container>
            <Row className="g-4 py-5">
                    <h2 className="pb-5">Our Services</h2>
                    {services.map(service => <Service key={service.id} service={service}  ></Service>)}
            </Row>
        </Container>  
        </>
    );
};

export default Services;