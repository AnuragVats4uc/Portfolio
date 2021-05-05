import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ServiceCard from '../Components/ServiceCard';
import design from '../img/design.svg';
import intelligence from '../img/intelligence.svg';
import gamedev from '../img/game-dev.svg';

function ServicesSection() {
    return (
        <InnerLayout>
            <ServicesSectionStyled>
                <Title title={'Services'} span={'services'} />
                <div className="services">
                    <ServiceCard 
                        image={design} 
                        title={'Web Design'} 
                        paragraph={'We utilize MERN Stack to build state-of-the-art dynamic web applications and websites for diverse business verticals.Work with the best coding approaches and methodologies to deliver quality and standards-compliant solutions tailored as per your needs.'}
                    />
                    <div className="mid-card">
                        <ServiceCard 
                            image={intelligence} 
                            title={'Web Development'} 
                            paragraph={'We create fast, secure, dynamic, and best-suited web applications for various businesses. Our MERN developers are well-versed in the underlying technologies and they can build any complex web application for your business that will deliver rich user experience with excellent functionality.'}
                        />
                    </div>
                    <ServiceCard 
                        image={gamedev} 
                        title={'Full Stack (MERN) Developer'} 
                        paragraph={'We have expertise in underlying technologies of MERN Stack that are MongoDB, Express.js, React.js, and NodeJS. We employ the best features of the MERN technology stack to build customized solutions for our clients. We provide suitable web solutions that best fit your business.'}
                    />
                </div>
            </ServicesSectionStyled>
        </InnerLayout>
    )
}

const ServicesSectionStyled = styled.section`
    .services{
        margin-top: 5rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1.5rem;
        @media screen and (max-width:1000px){
            flex-direction: column;
        }
        @media screen and (max-width:950px){
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width:650px){
            grid-template-columns: repeat(1, 1fr);
        }
       
    }
`;

export default ServicesSection;
