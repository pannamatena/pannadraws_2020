/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import React from 'react';
import PropTypes from 'prop-types';
import { css } from "@emotion/core"
import { breakPoints } from '../resources/breakPoints';
import { colours } from '../resources/colors';
import { fonts } from '../resources/fonts';
import '../resources/index.css';
import Header from './Header';

const Layout = ({ children }) => {
  const style = {
    layoutContainer: css`
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: stretch;
      height: 100vh;
    `,
    page: css`
      color: ${colours.c2};
      background: ${colours.c3};
      flex: 1;
      
      padding-top: 74px;
      padding-bottom: 10px;
      @media ${breakPoints.tabletPortrait} {
        padding-top: 95px;
        padding-bottom: 15px;
      }
      @media ${breakPoints.desktopSmall} {
        padding-top: 145px;
        padding-bottom: 20px;
      }
    `,
    footerContainer: css`
      color: ${colours.c3};
      background: ${colours.c2};
      
      padding: 10px;
      @media ${breakPoints.tabletPortrait} {
        padding: 15px;
      }
      @media ${breakPoints.desktopSmall} {
        padding: 20px;
      }
    `,
    footerContainerInner: css`
      max-width: 1500px;
      margin: 0 auto;
      
      a {
        color: ${colours.c1};
        font-family: ${fonts.f1};
        font-size: 1em;
        padding-left: 10px;
        text-transform: uppercase;
      }
    `,
    socialMenu: css`
      padding: 5px 0 10px 0;
      @media ${breakPoints.tabletPortrait} {
        padding: 5px 0 15px 0;
      }
      @media ${breakPoints.desktopSmall} {
        padding: 5px 0 20px 0;
      }
          
      span {
        :after {
          content: '|';
          display: inline-block;
          
          padding: 0 10px;
          @media ${breakPoints.tabletPortrait} {
            padding: 0 15px;
          }
          @media ${breakPoints.desktopSmall} {
            padding: 0 20px;
          }
        }
        
        :last-child {
          :after {
            display: none;
          }
        }
      }
      
      a {
        color: ${colours.c3};
        padding: 0;
        
        :hover,
        :active {
          color: ${colours.c1};
        }
      }
    `,
  };

  return (
    <div css={style.layoutContainer}>
      <Header />
      <main css={style.page}>{children}</main>
      <div css={style.footerContainer}>
      <div css={style.footerContainerInner}>
        <p>Artwork and content &copy; {new Date().getFullYear()} Panna Zsamba</p>
        <div css={style.socialMenu}>
          <span><a href="https://www.instagram.com/pannamatena/" target="_blank" rel="noopener noreferrer" title="Panna's Instagram">Instagram</a></span>
          <span><a href="https://www.deviantart.com/matena" target="_blank" rel="noopener noreferrer" title="Panna's Deviantart Gallery">DeviantArt</a></span>
          <span><a href="https://twitter.com/pannamatena" target="_blank" rel="noopener noreferrer" title="Panna's Twitter">Twitter</a></span>
        </div>
        <p>Were you looking for my coding site? <a href="http://pannacodes.com" target="_blank" rel="noopener noreferrer">pannacodes.com</a></p>
      </div>
      </div>
    </div>
  )
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout
