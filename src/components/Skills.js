import React from 'react'
import styled from 'styled-components';
import { InnerLayout } from '../Styles/Layout';
import ProgressBar from './ProgressBar';
import Title from './Title';
const Skills = () => {
    return (
        <SkillsStyled>
          
                <Title title={ "My Skills" } span={ "My Skills" } />
                <InnerLayout>
                    <div className="skills">
                        <ProgressBar
                            title={ "HTML5" }
                            width={ '70%' }
                            text={'70%'}
                        />
                        <ProgressBar
                            title={ "CSS3" }
                            width={ '75%' }
                            text={'75%'}
                        />
                        <ProgressBar
                            title={ "JAVASCRIPT" }
                            width={ '70%' }
                            text={'70%'}
                        />
                        <ProgressBar
                            title={ "REACT.JS" }
                            width={ '80%' }
                            text={'80%'}
                        />
                        <ProgressBar
                            title={ "NODE.JS" }
                            width={ '80%' }
                            text={'80%'}
                        />
                    </div>
                </InnerLayout>
       

        </SkillsStyled>
    )
}

const SkillsStyled = styled.section`
.skills{
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-column-gap: 3rem;
    grid-row-gap: 2rem;
}
`;
export default Skills
