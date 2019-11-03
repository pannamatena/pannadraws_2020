import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { logo, instagram, twitter, deviantart } from '../resources/icons';
import { colours } from '../resources/colors';
import { breakPoints } from '../resources/breakPoints';
import { fonts } from '../resources/fonts';

const Header = () => {
  const style = {
    headerContainer: css`
      background: ${colours.c3};
      display: flex;
      flex-direction: row;
      justify-content: center;
      font-family: ${fonts.f1};
      position: fixed;
      top: 0;
      left: 0;
      z-index: 999;
      width: 100%;
      
      padding: 10px;
      @media ${breakPoints.tabletPortrait} {
        padding: 15px;
      }
      @media ${breakPoints.desktopSmall} {
        padding: 20px;
      }
    `,
    headerContainerInner: css`
      flex: 1;
      max-width: 1500px;
      display: flex;
      flex-direction: row;
    `,
    menuLeft: css`
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      flex: 1;
      
      a {
        color: ${colours.c2};
        text-transform: uppercase;
        display: inline-block;
        
        margin-right: 10px;
        font-size: 1.3em;
        @media ${breakPoints.tabletPortrait} {
          margin-right: 15px;
          font-size: 1.4em;
        }
        @media ${breakPoints.desktopSmall} {
          margin-right: 20px;
          font-size: 1.5em;
        }
        @media ${breakPoints.desktopLarge} {
          font-size: 2em;
        }
        
        :hover,
        :active {
          color: ${colours.c1};
        }
        
        &.printShop {
          color: ${colours.c1};
        }
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
    logo: css`
      svg {
        width: 50px;
        height: 50px;
        @media ${breakPoints.tabletPortrait} {
          width: 60px;
          height: 60px;
        }
        @media ${breakPoints.desktopSmall} {
          width: 110px;
          height: 100px;
        }
      }
    `,
  };

  return (
      <div css={style.headerContainer}>
        <div css={style.headerContainerInner}>
          <div css={style.menuLeft}>
            <Link to="/">Art</Link>
            <Link to="/about/">About</Link>
            <a className="printShop" href="https://www.deviantart.com/matena/shop/prints" target="_blank" rel="noopener noreferrer" title="Panna's Deviantart Gallery">Print Shop</a>
          </div>
          <div css={style.logo}>
            <Link to="/" className="rotateOnHover">
              {logo()}
            </Link>
          </div>
          <div css={style.menuRight}>
            <a href="https://www.instagram.com/pannamatena/" target="_blank" rel="noopener noreferrer" title="Panna's Instagram">{instagram()}</a>
            <a href="https://www.deviantart.com/matena" target="_blank" rel="noopener noreferrer" title="Panna's Deviantart Gallery">{deviantart()}</a>
            <a href="https://twitter.com/pannamatena" target="_blank" rel="noopener noreferrer" title="Panna's Twitter">{twitter()}</a>
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
