import React from 'react';
import { css } from '@emotion/core';
import { breakPoints } from '../resources/breakpoints';
import { Link } from 'gatsby';
import { colours } from '../resources/colors';
import { fonts } from '../resources/fonts';
import Layout from '../components/Layout';
import SEO from '../components/Seo';

const SuccessPage = () => {
  const style = {
    pageContainer: css`
      max-width: 800px;
      margin: 0 auto;
      font-family: ${fonts.f2};
      padding-top: 20px;
      
      h1 {
        font-family: ${fonts.f1};
        text-transform: uppercase;
        
        font-size: 1.3em;
        margin-bottom: 10px;
        @media ${breakPoints.tabletPortrait} {
          font-size: 1.4em;
          margin-bottom: 15px;
        }
        @media ${breakPoints.desktopSmall} {
          font-size: 1.5em;
          margin-bottom: 20px;
        }
        @media ${breakPoints.desktopLarge} {
          font-size: 2em;
        }
      }
      
      p {
        font-size: 1.2em;
        
        margin-bottom: 10px;
        @media ${breakPoints.tabletPortrait} {
          margin-bottom: 15px;
        }
        @media ${breakPoints.desktopSmall} {
          margin-bottom: 20px;
        }
      }
    `,
    backBtn: css`
      display: inline-block;
      background: ${colours.c2};
      color: ${colours.c3};
      font-family: ${fonts.f1};
      text-transform: uppercase;
      
      padding: 10px;
      font-size: 1.5em;
      @media ${breakPoints.tabletPortrait} {
        padding: 15px;
      }
      @media ${breakPoints.desktopSmall} {
        padding: 20px;
      }
      
      &:hover,
      &:active {
        background: ${colours.c2_h};
        cursor: pointer;
      }
    `,
  };

  return (
      <Layout>
        <SEO title="Success" />
        <div css={style.pageContainer}>
          <h1>Yiss, that message is sent!</h1>
          <p>I'll get back to you within a day usually.</p>
          <Link css={style.backBtn} to="/">Back to Home</Link>
        </div>
      </Layout>
  );

};

export default SuccessPage;
