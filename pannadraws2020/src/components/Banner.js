import React from 'react';
import { css } from "@emotion/core"
import { Link } from 'gatsby';
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
        
        font-size: 2em;
        text-align: center;
        @media ${breakPoints.desktopSmall} {
          font-size: 2.5em;
          text-align: left;
        }
        @media ${breakPoints.desktopLarge} {
          font-size: 4em;
        }
        @media ${breakPoints.desktopXLarge} {
          font-size: 5em;
        }
      }
      
      h2 {
        color: ${colours.c4};
        
        margin-top: 0px;
        font-size: 1.2em;
        text-align: center;
        @media ${breakPoints.tabletLandscape} {
          font-size: 1em;
          margin-left: 20px;
          text-align: left;
        }
        @media ${breakPoints.desktopSmall} {
          font-size: 1.2em;
        }
        @media ${breakPoints.desktopLarge} {
          font-size: 1.5em;
        }
        @media ${breakPoints.desktopXLarge} {
          font-size: 1.9em;
        }
      }
      
      h3 {        
        color: ${colours.c4};
        
        margin-top: 0px;
        font-size: 1em;
        text-align: center;
        @media ${breakPoints.tabletLandscape} {
          font-size: 0.8em;
          text-align: left;
          margin-left: 40px;
        }
        @media ${breakPoints.desktopSmall} {
          font-size: 1em;
        }
        @media ${breakPoints.desktopLarge} {
          font-size: 1.3em;
        }
        @media ${breakPoints.desktopXLarge} {
          font-size: 1.7em;
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
        left: 170px;
        transform: translate(0, -50%);
      }
      @media ${breakPoints.desktopSmall} {
        left: 200px;
      }
      @media ${breakPoints.desktopLarge} {
        left: 200px;
      }
      
    `,
    commissionBtn: css``,
  };

  return (
      <div id="bannerContainer" css={style.bannerContainer}>
        {/*<div css={style.commissionBtn}>
            <Link to="/commissions/">Commission Artwork</Link>
        </div>*/}
        <div css={style.bannerText}>
          <h1>Transcendent watercolour</h1>
        <h2>other-worldly birds and creatures as fine art</h2>
          <h3>by Panna Zsamba</h3>
        </div>
      </div>
  );
};

export default Banner;
