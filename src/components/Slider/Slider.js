import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Slider.css';
import slider3 from '../../../src/images/slider/s3.jpg'

const Slider = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={slider3}
                alt="First slide"
                />
                <Carousel.Caption className="caption">
                <h3 className="banner-title">We provide top medical services</h3>
                <p>More than 30 professionals</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 img-fluid"
                src={slider3}
                alt="Second slide"
                />

                <Carousel.Caption className="caption">
                <h3 className="banner-title">medical services</h3>
                <p>More than 30 professionals</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 img-fluid"
                src={slider3}
                alt="Third slide"
                />

                <Carousel.Caption className="caption">
                <h3 className="banner-title">medical services</h3>
                <p>More than 30 professionals</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Slider;