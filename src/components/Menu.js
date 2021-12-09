import React from 'react'
import styled from 'styled-components';
import portfolios from '../data/portfolios';
import { GitHub,Pinterest,LinkedIn } from '@material-ui/icons';
const Menu = ({menuItem}) => {
    return (
        <MenuItemStyled>
            { menuItem && menuItem.map( ( item ) => {
                return (
                  <div className="grid-item" key={item.id}>
                    <div className="portfolio-content">
                      <div className="portfolio-image">
                        <img src={item.image} alt="" />
                      </div>
                      <ul>
                        <li>
                          <a href={item.link1}><GitHub/></a>
                        </li>
                        <li>
                          <a href={item.link2}><LinkedIn/></a>
                        </li>
                      </ul>
                        </div>
                        <h6>{ item.title }</h6>
                        <p>{ item.text }</p>
                  </div>
                );
            })}
        </MenuItemStyled>
    )
}

const MenuItemStyled = styled.div`
display: grid;
grid-template-columns:repeat(3,1fr) ;
grid-gap: 2rem;
.grid-item{
    .portfolio-content{
        display: block;
        position: relative;
        h6{
            font-size: 1.5rem;
        }
        img{
            width:100%;
            height: 30vh;
            object-fit: cover;
        }
        ul{
            display: none;
        }
        .portfolio-images{
            position: relative;
            &::before{
                content: "";
                position: absolute;
                left:2%;
                top:2%;
                height:25vh calc(100% - 30px);
                width: calc(100% - 30px);
                background-color: var(--white-color);
                transform-origin: 0;
                transform: scale(1);
                opacity: 0.9;
                transition: all 0.4s ease-in-out;

            }
        }
    }
}

`
export default Menu
