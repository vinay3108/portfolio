import React from 'react'
import styled from 'styled-components';
import ImageSection from '../components/ImageSection';
import ReviewSection from '../components/ReviewSection';
import ServicesSection from '../components/ServicesSection';
import Title from '../components/Title';
import { MainLayout } from '../Styles/Layout';
const AboutPage = () => {
    return (
        <MainLayout>
            <AboutStyled>
                <Title title={ 'About me ' } span={ 'About me ' } />
                <ImageSection />
                <ServicesSection />
                {/* <ReviewSection/> */}
            </AboutStyled>
        </MainLayout>
    )
}

const AboutStyled = styled.section`

`;
export default AboutPage
