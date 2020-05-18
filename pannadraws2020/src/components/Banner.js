import React from 'react';
import { css } from "@emotion/core"
import { breakPoints } from '../resources/breakpoints';
import { colours } from '../resources/colors';
import { fonts } from '../resources/fonts';

const Banner = () => {
  const style = {
    bannerContainer: css`
      width: 100%;
      position: relative;
      
      height: 130px;
      @media ${breakPoints.tabletPortrait} {
        height: 200px;
      }
      @media ${breakPoints.tabletLandscape} {
        height: 330px;
      }
      @media ${breakPoints.desktopSmall} {
        height: 440px;
      }
      @media ${breakPoints.desktopLarge} {
        height: 700px;
      }
      @media ${breakPoints.desktopXLarge} {
        height: 900px;
      }
      
      h1 {
        font-family: ${fonts.f1};
        text-transform: uppercase;
        
        font-size: 1.5em;
        @media ${breakPoints.desktopSmall} {
          font-size: 2em;
        }
        @media ${breakPoints.desktopLarge} {
          font-size: 3em;
        }
        @media ${breakPoints.desktopXLarge} {
          font-size: 4em;
        }
        
        span {
          display: block;
          
          &:last-child {
            padding-left: 50px;
          }
        }
      }
      
      h2 {
        color: ${colours.c4};
        
        margin-top: 0px;
        font-size: 1.2em;
        @media ${breakPoints.tabletLandscape} {
          font-size: 1em;
          margin-top: 10px;
        }
        @media ${breakPoints.desktopSmall} {
          font-size: 1.2em;
        }
        @media ${breakPoints.desktopLarge} {
          font-size: 1.5em;
          margin-top: 20px;
        }
        @media ${breakPoints.desktopXLarge} {
          font-size: 2em;
        }
      }
      
      h3 {
        font-family: ${fonts.f1};
        text-transform: uppercase;
        
        font-size: 1em;
        @media ${breakPoints.desktopSmall} {
          font-size: 1.2em;
        }
        @media ${breakPoints.desktopLarge} {
          font-size: 2.2em;
        }
        @media ${breakPoints.desktopXLarge} {
          font-size: 3.2em;
        }
      }
    `,
    bannerText: css`
      position: absolute;
      
      top: 10px;
      left: 50%;
      transform: translate(-50%, 0);
      min-width: 300px;
      @media ${breakPoints.tabletPortrait} {
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
      @media ${breakPoints.tabletLandscape} {
        left: 100px;
        transform: translate(0, -50%);
      }
      @media ${breakPoints.desktopSmall} {
        left: 130px;
      }
      @media ${breakPoints.desktopLarge} {
        left: 200px;
      }
      
    `,
  };

  return (
      <div id="bannerContainer" css={style.bannerContainer}>
        <div css={style.bannerText}>
          <h1><span>The girl who draws</span><span>dragons and unicorns</span></h1>
          <h3>(and chickens)</h3>
        <h2>I'm Panna, a watercolour fantasy and animal artist.</h2>
        </div>
      </div>
  );
};

export default Banner;
