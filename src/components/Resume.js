import React from 'react'
import styled from 'styled-components'
import { InnerLayout} from '../Styles/Layout'
import Title from './Title'
import SmallTitle from './SmallTitle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
import { School } from '@material-ui/icons';
import ResumeItem from './ResumeItem';
const Resume = () => {
    return (
      <ResumeStyled>
        <Title title={"Resume"} span={"Resume"} />
        <InnerLayout>
          <div className="small-title u-margin-top">
            <SmallTitle
              icon={<BusinessCenterIcon />}
              title={"Working Experience"}
            />
          </div>
          <div className="resume-content">
            <ResumeItem
              year={`2015 - 2018`}
              title={"Computer Science"}
              subTitle={"Susex University"}
              text={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam repellat hic corrupti quod!"
              }
            />
          </div>
          <div className="small-title u-margin-top">
            <SmallTitle
              icon={<School />}
              title={"School"}
            />
          </div>
        </InnerLayout>
      </ResumeStyled>
    );
}
const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 3rem;
    }
    .resume-content{
        border-left: 1px solid var(--border-color);
        padding-left: 20px;
    }
    .u-margin-top{
        margin-top: 4rem;
    }
`
export default Resume
