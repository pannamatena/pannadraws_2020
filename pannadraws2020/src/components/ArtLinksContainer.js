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
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: center;
      
      width: 100%;
      max-width: 800px;
      padding: 10px;
      @media ${breakPoints.tabletPortrait} {
        padding: 15px;
      }
      @media ${breakPoints.desktopSmall} {
        padding: 20px;
      }
    `,
    artLink: css`
      display: block;
      max-width: 500px;
      width: 100%;
      
      &:first-child {
        margin-right: 5px;
        @media ${breakPoints.tabletPortrait} {
          margin-right: 15px;
        }
        @media ${breakPoints.desktopSmall} {
          margin-right: 20px;
        }
      }
      
      &:last-child {
        margin-left: 5px;
        @media ${breakPoints.tabletPortrait} {
          margin-left: 15px;
        }
        @media ${breakPoints.desktopSmall} {
          margin-left: 20px;
        }
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
        @media ${breakPoints.tabletLandscape} {
          font-size: 1.2em;
        }
        @media ${breakPoints.desktopSmall} {
          font-size: 1.5em;
        }
        @media ${breakPoints.desktopLarge} {
          font-size: 1.9em;
        }
      }
    `,
  };

  return (
      <div css={style.artLinksContainer}>
        <Link css={style.artLink} to="/animal_art/">
          <Image img={imgData.art_link_birds.childImageSharp.fluid}/>
          <span>Birds & Wildlife Art</span>
        </Link>
        <Link css={style.artLink} to="/fantasy_art/">
          <Image img={imgData.art_link_fantasy.childImageSharp.fluid}/>
          <span>Fantasy Art</span>
        </Link>
      </div>
  );
};

export default ArtLinksContainer;
