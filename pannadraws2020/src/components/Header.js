import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { logo, logoText, instagram, facebook, deviantart, menu } from '../resources/icons';
import { colours } from '../resources/colors';
import { breakPoints } from '../resources/breakpoints';
import { fonts } from '../resources/fonts';

const Header = () => {
  //const [headerElWidth, setHeaderElWidth] = useState(0);
  const [isArtMenuActive, setIsArtMenuActive] = useState(false);
  const [topPos, setTopPos] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  /*const setWidth = () => {
    const headerEl = document.getElementById("headerContainer");
    const width = headerEl ? headerEl.offsetWidth : 0;
    setHeaderElWidth(width);
  };*/

  const setTopScrollVal = () => {
    const scrollY = window ? window.scrollY : 0;
    setTopPos(scrollY);
  };

  useEffect(() => {
    //setWidth();
    setTopScrollVal();
    const isActive = window.location.pathname === '/'
        || window.location.pathname === '/fantasy_art/'
        || window.location.pathname === '/sketchbook/';
    setIsArtMenuActive(isActive);

    //window.addEventListener("resize", setWidth);
    window.addEventListener('scroll', setTopScrollVal);
    return () => {
      window.removeEventListener('scroll', setTopScrollVal)
    }
  });

  const style = {
    headerContainer: css`
      background: ${colours.c3};
      border-bottom: 2px solid ${colours.c1};
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-family: ${fonts.f1};
      position: fixed;
      top: 0;
      left: 0;
      z-index: 999;
      width: 100%;
      transition: padding 0.3s ease-out;
      
      padding: 10px;
      @media ${breakPoints.tabletPortrait} {
        padding: ${topPos > 0 ? '10' : '15'}px;
      }
      @media ${breakPoints.desktopSmall} {
        padding: ${topPos > 0 ? '15' : '20'}px;
      }
    `,
    headerContainerInner: css`
      flex: 1;
      display: flex;
      flex-direction: row;
    `,
    mobileMenu: css`
      width: 30px;
      height: 25px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      
      @media ${breakPoints.desktopSmall} {
        display: none;
      }
      
      & > div > div {
        background: ${colours.c2};
      }
      
      &:hover,
      &:active {
        cursor: pointer;

        & > div > div {
          background: ${colours.c1};
        }
      }
    `,
    mobileMenuContainer: css`
      flex: 1;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      
      @media ${breakPoints.desktopSmall} {
        display: none;
      }
    `,
    mobileMenuContent: css`
      position: absolute;
      left: 0;
      transition: all 0.5s ease;
      transform: translateX(${isMobileMenuOpen ? '0' : '-100%'});
      background: ${colours.c2};
      
      top: ${topPos > 0 ? '61px' : '76px'};
      padding: 10px;
      height: calc(100vh - ${topPos > 0 ? '61px' : '76px'});
      @media ${breakPoints.tabletPortrait} {
        top: ${topPos > 0 ? '62px' : '109px'};
        padding: 15px;
        height: calc(100vh - ${topPos > 0 ? '62px' : '109px'});
      }
      @media ${breakPoints.desktopSmall} {
        display: none;
      }
      
      a {
        color: ${colours.c3};
        text-transform: uppercase;
        display: inline-block;
        
        :hover,
        :active {
          color: ${colours.c1};
        }
        
        &.printShop {
          color: ${colours.c1};
        }
        
        font-size: 1.3em;
        margin-bottom: 10px;
        @media ${breakPoints.tabletPortrait} {
          font-size: 1.4em;
          margin-bottom: 15px;
        }
        @media ${breakPoints.desktopSmall} {
          font-size: 1.5em;
        }
        @media ${breakPoints.desktopLarge} {
          font-size: 2em;
        }
      }
    `,
    menuLeft: css`
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      flex: 1;
      
      display: none;
      @media ${breakPoints.desktopSmall} {
        display: flex;
      }
      
      div {
        display: block;
        transition-duration: 0.5s;
        
        margin-right: 10px;
        @media ${breakPoints.tabletPortrait} {
          margin-right: 15px;
        }
        @media ${breakPoints.desktopSmall} {
          margin-right: 20px;
        }
      }
      
      a {        
        &.printShop {
          color: ${colours.c1};
        }
        
        &[aria-current="page"] {
          border-bottom: 1px solid ${colours.c1};
          @media ${breakPoints.desktopLarge} {
            border-bottom-width: 2px;
          }
        }
      }
      
      span {
        cursor: default;
      }
      
      a,
      span {
        color: ${colours.c2};
        text-transform: uppercase;
        display: inline-block;
        
        :hover,
        :active {
          color: ${colours.c1};
        }
        
        font-size: 1.3em;
        @media ${breakPoints.tabletPortrait} {
          font-size: 1.4em;
        }
        @media ${breakPoints.desktopSmall} {
          font-size: 1.5em;
        }
        @media ${breakPoints.desktopLarge} {
          font-size: 2em;
        }
      }
      
      ul {
        visibility: hidden;
        opacity: 0;
        position: absolute;
        transition: all 0.5s ease;
        left: 0;
        background: ${colours.c3};
        
        padding: 10px;
        @media ${breakPoints.tabletPortrait} {
          padding: 15px;
        }
        @media ${breakPoints.desktopSmall} {
          padding: 20px;
        }
      }
      
      div:hover > ul,
      div:focus-within > ul,
      div ul:hover {
        visibility: visible;
        opacity: 1;
      }
      
      div ul li {
        clear: both;
        width: 100%;
        
        &:last-of-type {
          padding-bottom: 0;
        }
        
        padding-bottom: 10px;
        @media ${breakPoints.tabletPortrait} {
          padding-bottom: 15px;
        }
        @media ${breakPoints.desktopSmall} {
          padding-bottom: 20px;
        }
      }
    `,
    currentPage: css`
      border-bottom-color: ${colours.c1};
      border-bottom-style: solid;
      border-bottom-width: ${isArtMenuActive ? 1 : 0}px;
      @media ${breakPoints.desktopLarge} {
        border-bottom-width: ${isArtMenuActive ? 2 : 0}px;
      }
    `,
    menuRight: css`
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;
      flex: 1;
      
      svg {
        fill: ${colours.c2};
        
        width: 20px;
        height: 20px;
        @media ${breakPoints.tabletPortrait} {
          width: 25px;
          height: 25px;
        }
        @media ${breakPoints.desktopSmall} {
          width: 35px;
          height: 35px;
        }
      }
      
      a {
        margin-left: 10px;
        @media ${breakPoints.tabletPortrait} {
          margin-left: 15px;
        }
        @media ${breakPoints.desktopSmall} {
          margin-left: 20px;
        }
        
        :hover,
        :active {
          svg {
            fill: ${colours.c1};
          }
        }
      }
    `,
    logoContainer: css`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      
      span {
        color: ${colours.c4};
        font-family: ${fonts.f1};
        font-size: 1.2em;
        
        display: none;
        @media ${breakPoints.tabletPortrait} {
        display: ${topPos > 0 ? 'none' : 'block'};
        }
      }
    `,
    logoImg: css`
      display: inline-block;
      
      svg {
        transition: all 0.3s ease-out;
        width: ${topPos > 0 ? '35' : '50'}px;
        height: ${topPos > 0 ? '35' : '50'}px;
        @media ${breakPoints.desktopSmall} {
          width: ${topPos > 0 ? '46' : '66'}px;
          height: ${topPos > 0 ? '41' : '61'}px;
        }
      }
    `,
    logoText: css`
      display: none;
      @media ${breakPoints.tabletPortrait} {
        display: inline-block;
      }
    
      svg {
        transition: all 0.3s ease-out;
        @media ${breakPoints.tabletPortrait} {
          width: ${topPos > 0 ? '66' : '80'}px;
          height: ${topPos > 0 ? '35' : '50'}px;
        }
        @media ${breakPoints.desktopSmall} {
          width: ${topPos > 0 ? '80' : '110'}px;
          height: ${topPos > 0 ? '41' : '61'}px;
        }
      }
    `,
  };

  return (
      <div id="headerContainer" css={style.headerContainer}>
        <div css={style.headerContainerInner}>
          <div css={style.mobileMenuContainer}>
            <div css={style.mobileMenu} onClick={() => {setIsMobileMenuOpen(!isMobileMenuOpen)}}>{menu()}</div>
            <nav role="navigation" css={style.mobileMenuContent}>
              <div><Link to="/animal_art/">Birds & Wildlife Art</Link></div>
              <div><Link to="/fantasy_art/">Fantasy Art</Link></div>
              <div><Link to="/sketchbook/">Sketchbook</Link></div>
              <div><Link to="/about/">About</Link></div>
              <div><Link to="/contact/">Contact & FAQ</Link></div>
              <div><a className="printShop" href="https://society6.com/pannadraws" target="_blank" rel="noopener noreferrer" title="PannaDraws on Society6">Print Shop</a></div>
            </nav>
          </div>
          <nav role="navigation" css={style.menuLeft}>
            <div><span css={style.currentPage}>Art</span>
              <ul>
                <li><Link to="/animal_art/">Birds & Wildlife Art</Link></li>
                <li><Link to="/fantasy_art/">Fantasy Art</Link></li>
                <li><Link to="/sketchbook/">Sketchbook</Link></li>
              </ul>
            </div>
            <div><Link to="/about/">About</Link></div>
            <div><Link to="/contact/">Contact & FAQ</Link></div>
            <div><a className="printShop" href="https://society6.com/pannadraws" target="_blank" rel="noopener noreferrer" title="PannaDraws on Society6">Print Shop</a></div>
          </nav>
          <div css={style.logoContainer}>
            <Link to="/">
              <div css={style.logoImg}>{logo()}</div>
              <div css={style.logoText}>{logoText()}</div>
            </Link>
            <span>fantasy and animal fine art</span>
          </div>
          <div css={style.menuRight}>
            <a href="https://www.facebook.com/pannadraws" target="_blank" rel="noopener noreferrer" title="PannaDraws on Facebook">{facebook()}</a>
            <a href="https://www.instagram.com/pannamatena/" target="_blank" rel="noopener noreferrer" title="PannaDraws on Instagram">{instagram()}</a>
            <a href="https://www.deviantart.com/matena" target="_blank" rel="noopener noreferrer" title="Panna's Deviantart Gallery">{deviantart()}</a>
            {/*<a href="https://twitter.com/pannamatena" target="_blank" rel="noopener noreferrer" title="Panna's Twitter">{twitter()}</a>*/}
          </div>

        </div>
      </div>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
