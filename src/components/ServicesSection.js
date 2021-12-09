import React from 'react'
import { InnerLayout } from '../Styles/Layout'
import styled from 'styled-components';
import Title from './Title';
import ServiceCard from './ServiceCard';
import gamedev from '../Images/game-dev.svg'
import design from '../Images/design.svg'
import intelligence from '../Images/intelligence.svg'
const ServicesSection = () => {
    return (
      <InnerLayout>
        <ServicesSectionStyled>
          <Title title={"Services"} span={"Services"} />
          <div className="services">
            <ServiceCard
              image={design}
              title={"Design"}
              paragraph={
                " Lorem  Beatae dolore harum porro corporis vero aliquam delectus odio quod, doloribus impedit placeat."
              }
            />
            <div className="mid-card">
              <ServiceCard
                image={gamedev}
                title={"Web Developer"}
                paragraph={
                  " Lorem  Beatae dolore harum porro corporis vero aliquam delectus odio quod, doloribus impedit placeat."
                }
              />
            </div>
            <ServiceCard
              image={intelligence}
              title={"Artificial Intelligence"}
              paragraph={
                " Lorem  Beatae dolore harum porro corporis vero aliquam delectus odio quod, doloribus impedit placeat."
              }
            />
          </div>
        </ServicesSectionStyled>
      </InnerLayout>
    );
}
const ServicesSectionStyled = styled.section`
.services{
    margin-top: 5rem;
    display: flex;
    justify-content: space-between;
    .mid-card{
        margin:0 1.2rem;
    }
}
`
export default ServicesSection
