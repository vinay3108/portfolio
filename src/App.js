import React from 'react'
import SideBar from './components/SideBar'
import styled from 'styled-components'
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import ResumePage from './Pages/ResumePage'
import PortfolioPage from './Pages/PortfolioPage';
import ContactPage from './Pages/ContactPage'
import BlogPage from './Pages/BlogPage'
import { Route, Switch } from "react-router-dom";
const App = () => {
  return (
    <>
      <SideBar />
      <MainContentStyled>
        <div className="lines">
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
          <div className="line-4"></div>
        </div>

        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
         
          <Route exact path="/about">
            <AboutPage />
          </Route>
          <Route extact path="/resume">
            <ResumePage />
          </Route>
          <Route path="/portfolios">
            <PortfolioPage />
          </Route>
          <Route exatc path="/blogs">
            <BlogPage />
          </Route>
          <Route extact path="/contact">
            <ContactPage />
          </Route>
        </Switch>
      </MainContentStyled>
    </>
  );
}

const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;
  .lines {
    position: absolute;
    min-height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-evenly;

    .line-1,
    .line-2,
    .line-3,
    .line-4 {
      width: 1px;
      min-height: 100vh;
      background-color: var(--border-color);
    }
  }
`;
export default App
