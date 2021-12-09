import React, {useState,useEffect }from 'react'
import SideBar from './components/SideBar'
import styled from 'styled-components'
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import ResumePage from './Pages/ResumePage'
import PortfolioPage from './Pages/PortfolioPage';
import ContactPage from './Pages/ContactPage'
import BlogPage from './Pages/BlogPage'
import { Route, Switch as Switching } from "react-router-dom";
import BrightnessMediumIcon from "@mui/icons-material/BrightnessMedium";
import Switch from '@material-ui/core/Switch';
import { Menu } from '@material-ui/icons'
import { IconButton } from '@material-ui/core'
const App = () =>
{
  const [ theme, setTheme ] = useState( 'dark-theme' );
  const [ checked, setChecked ] = useState( false );
  const [ navToggle, setNavToggle ] = useState( false );
  useEffect( () =>
  {
    document.documentElement.className = theme;
  }, [ theme ] );

  const themeToggler = () =>
  {
    if ( theme === 'light-theme' )
    {
      setTheme( 'dark-theme' );
      setChecked( false );
    }else
    {
      setTheme( 'light-theme' );
      setChecked( true );
    }
  }
  return (
    <>
      <SideBar navToggle={ navToggle }/>
      <div className="theme">
        <div className="light-dark-mode">
          <div className="left-content">
            <BrightnessMediumIcon />
          </div>
          <div className="right-content">
            <Switch value=""
              size="small"
              checked={checked}
              inputProps={ { "aria-label": "" } }
              onClick={themeToggler}
            />
          </div>
        </div>
      </div>
      <div className="ham-burger-menu">
        <IconButton onClick={()=>{setNavToggle(!navToggle)}}>
          <Menu/>
        </IconButton>
      </div>
      <MainContentStyled>
        <div className="lines">
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
          <div className="line-4"></div>
        </div>

        <Switching>
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
        </Switching>
      </MainContentStyled>
    </>
  );
}

const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;
  
  @media screen and (max-width: 1250px) {
    margin-left: 0;
  }

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
