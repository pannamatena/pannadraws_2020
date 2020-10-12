import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import { css } from '@emotion/core';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import MasonryLayout from '../components/MasonryLayout';
import adultColouringMeta from '../resources/adultColouringMeta';
import { fonts } from '../resources/fonts';
import { colours } from '../resources/colors';
import { breakPoints } from '../resources/breakpoints';

const AdultColouring = (props) => {
  const imgData = useStaticQuery(graphql`
    query {
      farewell: file(relativePath: { eq: "2020/farewell_ink_2020_web.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      my_river_dance: file(relativePath: { eq: "2020/my_river_dance_ink_2020_web.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      dragon_dance: file(relativePath: { eq: "2020/dragon_dance_00_web.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const style = {
    pageInfo: css`
      margin: 10px auto;
      padding: 0 10px;
      max-width: 800px;
      @media ${breakPoints.tabletPortrait} {
        margin: 15px auto;
        padding: 0 15px;
      }
      @media ${breakPoints.desktopSmall} {
        margin: 20px auto;
        padding: 0 20px;
      }
      
      h1 {
        font-family: ${fonts.f1};
        text-transform: uppercase;
        
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
      
      h2 {
        color: ${colours.c4};
        
        margin-bottom: 10px;
        font-size: 1.2em;
        @media ${breakPoints.tabletLandscape} {
          font-size: 1em;
        }
        @media ${breakPoints.desktopSmall} {
          margin-bottom: 15px;
          font-size: 1.2em;
        }
        @media ${breakPoints.desktopLarge} {
          font-size: 1.5em;
          margin-bottom: 20px;
        }
        @media ${breakPoints.desktopXLarge} {
          font-size: 1.9em;
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
  };

  return (
      <Layout>
        <SEO title="Adult Colouring - Posters and printables to colour" />
        <div css={style.pageInfo}>
          <h1>Adult Colouring</h1>
          <h2>Posters and printables to colour</h2>
          <p>The most relaxing part of my artistic process is inking the pencil drawings. This
            is the reason I love creating adult colouring pages and posters in the traditional
            way, giving the pieces many tiny details to colour.</p>
        </div>
        <MasonryLayout imgData={imgData} imgMeta={adultColouringMeta} path={props.path} />
      </Layout>
  );
};

export default AdultColouring;
