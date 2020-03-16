/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import React from 'react';
import PropTypes from 'prop-types';
import { css } from "@emotion/core"
import {graphql, useStaticQuery} from "gatsby";
import BackgroundImage from 'gatsby-background-image';
import { breakPoints } from '../resources/breakpoints';
import { colours } from '../resources/colors';
import { fonts } from '../resources/fonts';
import '@reach/dialog/styles.css';
import '../resources/index.css';
import Header from './Header';

const Layout = ({ children }) => {
  const backgroundImg = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "pannadraws_bg.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 3644) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

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
      flex: 1;
      
      padding-top: 74px;
      padding-bottom: 10px;
      @media ${breakPoints.tabletPortrait} {
        padding-top: 95px;
        padding-bottom: 15px;
      }
      @media ${breakPoints.desktopSmall} {
        padding-top: 106px;
        padding-bottom: 20px;
      }
      
      @media only screen and (max-width: 799px) {
        background: ${colours.c3};
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
      font-family: ${fonts.f2};
      
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
        
        :first-of-type {
          a {
            padding-left: 0;
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
    backgroundImg: css`
      @media only screen and (max-width: 799px) {
        background-image: none !important;
      }
      &:before {
        @media only screen and (max-width: 799px) {
          background-image: none !important;
        }
      }
      &:after {
        @media only screen and (max-width: 799px) {
          background-image: none !important;
        }
      }
    `,
  };

  return (
    <div id="layoutContainer" css={style.layoutContainer}>
      <Header />
      {window.location.pathname === '/' ? (
          <BackgroundImage
              className="backgroundImage"
              css={style.backgroundImg}
              style={{
                opacity: 1,
                backgroundSize: '80%',
                backgroundPosition: 'right 50px',
                backgroundRepeat: 'no-repeat',
              }}
              fluid={backgroundImg.desktop.childImageSharp.fluid}
              backgroundColor={colours.c3}
          >
            <main css={style.page}>{children}</main>
          </BackgroundImage>
      ) : (
          <main css={style.page}>{children}</main>
      )}
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
