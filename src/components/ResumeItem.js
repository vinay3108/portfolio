import React from 'react'
import styled from 'styled-components';
const ResumeItem = ({year,title,subTitle,text}) => {
    return (
        <ResumeItemStyled>
            <div className="left-content">
                <p>{ year }</p>
            </div>
            <div className="right-content">
                <h5>{title }</h5>
                <h6>{ subTitle }</h6>
                <p>{ text }</p>
            </div>
        </ResumeItemStyled>
    )
}
const ResumeItemStyled = styled.div`
  display: flex;
  &:not(:last-child) {
    padding-bottom: 3rem;
  }
  .left-content {
    width: 20%;
    padding-left: 20px;
    /* border: 1px solid red; */
    position: relative;
    &::before {
      content: "";
      position: absolute;
      left: -31px;
      top: 5px;
      height: 17px;
      width: 17px;
      border-radius: 50%;
      border: 2px solid var(--border-color);
      background-color: var(--background-dark-color);
    }
    p {
      display: inline-block;
    }
  }
  .right-content {
    padding-left: 5rem;
    width: 80%;
    /* border: 1px solid red; */
    position: relative;
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 20px;
      width: 4rem;
      height: 2px;
      background-color: var(--border-color);
    }
    h5 {
      color: var(--primary-color);
      font-size: 2rem;
      padding-bottom: 0.4rem;
    }
    h6 {
      padding-bottom: 0.6rem;
      font-size: 1.8rem;
    }
  }
`;
export default ResumeItem
