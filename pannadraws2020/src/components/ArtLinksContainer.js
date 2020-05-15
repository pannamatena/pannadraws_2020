import React from 'react';
import { css } from "@emotion/core"
import { breakPoints } from '../resources/breakpoints';
import { colours } from '../resources/colors';
import { fonts } from '../resources/fonts';
import {graphql, Link, useStaticQuery} from 'gatsby';
import Image from "./Image";

const ArtLinksContainer = () => {
  const imgData = useStaticQuery(graphql`
    query {
      art_link_fantasy: file(relativePath: { eq: "art_link_fantasy.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      art_link_birds: file(relativePath: { eq: "art_link_birds.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
    }
  `);

  const style = {
    artLinksContainer: css`
      
    `,
    artLinksContainerInner: css`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      
      @media ${breakPoints.tabletPortrait} {
        flex-direction: row;
        justify-content: space-around;
      }
      @media ${breakPoints.tabletLandscape} {
        max-width: 50%;
      }
      @media ${breakPoints.desktopLarge} {
        max-width: 55%;
      }
    `,
    artLink: css`
      display: block;
      max-width: 500px;
      background: ${colours.c3};
      
      width: 50%;
      margin-bottom: 20px;
      @media ${breakPoints.tabletPortrait} {
        width: 35%;
        margin-bottom: 30px;
      }
      @media ${breakPoints.tabletLandscape} {
        width: 45%;
      }
      @media ${breakPoints.desktopSmall} {
        margin-bottom: 50px;
      }
      
      .gatsby-image-wrapper {
        border: 2px solid ${colours.c5};
        transition: border-color 0.3s ease-out;
      }
      
      :hover,
      :active {
        .gatsby-image-wrapper {
          border: 2px solid ${colours.c1};
        }
        
        span {
          color: ${colours.c1};
        }
      }
      
      span {
        font-family: ${fonts.f1};
        color: ${colours.c2};
        text-transform: uppercase;
        display: block;
        text-align: center;
        transition: color 0.3s ease-out;
        
        font-size: 1.5em;
        @media ${breakPoints.desktopSmall} {
          font-size: 2em;
        }
        @media ${breakPoints.desktopLarge} {
          font-size: 3em;
        }
        @media ${breakPoints.desktopXLarge} {
          font-size: 3.9em;
        }
      }
    `,
  };

  return (
      <div css={style.artLinksContainer}>
        <div css={style.artLinksContainerInner}>
          <Link css={style.artLink} to="/animal_art/">
            <Image img={imgData.art_link_birds.childImageSharp.fluid}/>
            <span>Birds & Wildlife Art</span>
          </Link>
          <Link css={style.artLink} to="/fantasy_art/">
            <Image img={imgData.art_link_fantasy.childImageSharp.fluid}/>
            <span>Fantasy Art</span>
          </Link>
        </div>
      </div>
  );
};

export default ArtLinksContainer;
