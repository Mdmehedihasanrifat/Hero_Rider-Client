import React from 'react';
import { Container } from 'react-bootstrap';
import about from '../../../images/images.jpg';
import './AboutUs.css';
const AboutUs = () => {
    return (
        <Container>
            <div className='about-section d-lg-flex align-items-center justify-content-between my-4 py-5'>
                <div className="left-about">
                    <img src={about} alt="" />
                </div>
                <div className="right-about">
                    <h1>About Us</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aperiam est
                      laboriosam modi molestiae officiis perspiciatis rem, soluta temporibus voluptate.</p>
                </div>
            </div>
       </Container>
    );
};

export default AboutUs;