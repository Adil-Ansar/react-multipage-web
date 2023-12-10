import React from 'react';
import styled from 'styled-components';
import { Button } from '../styles/Button';

const HeroSection = () => {
    return (
        <Wrapper>
            <div className="container grid grid-two-column">
                <div className="section-hero-data">
                    <p className='hero-top-data'>THIS IS ME</p>
                    <h1 className='hero-heading'>ADIL ANSARI</h1>
                    <p className="hero-para">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Et netus et malesuada fames ac turpis egestas.
                    </p>
                </div>
                <Button className="btn hireme-btn">
                    <NavLink to="/contact">hire me</NavLink>
                </Button>
                <div className="section-hero-image">

                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section` 
`;

export default HeroSection;