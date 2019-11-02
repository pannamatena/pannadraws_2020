import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { css } from '@emotion/core';
import { breakPoints } from '../resources/breakPoints';
import Image from '../components/Image';

const Gallery = () => {
  const images = useStaticQuery(graphql`
    query {
      pic1: file(relativePath: { eq: "phoenix_park_2019.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid,
          }
        }
      },
      pic2: file(relativePath: { eq: "rooster_1_2019.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      pic3: file(relativePath: { eq: "bunnies_2019.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      pic4: file(relativePath: { eq: "sails_2019.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      pic5: file(relativePath: { eq: "bunclody_2019.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      pic6: file(relativePath: { eq: "rooster_2_2019.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      pic7: file(relativePath: { eq: "ross_castle_view_2019.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      pic8: file(relativePath: { eq: "rising_wisdom_2019.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const style = {
    imageContainer: css`
      display: flex;
      flex-wrap: wrap;
      margin: 0 auto;
      height: 100%;
      
      padding: 0 10px;
      @media ${breakPoints.tabletPortrait} {
        padding: 0 15px;
      }
      @media ${breakPoints.desktopSmall} {
        padding: 0;
      }
      @media ${breakPoints.desktopLarge} {
        max-width: 1560px;
      }
      @media ${breakPoints.desktopXLarge} {
        max-width: 2100px;
      }
    `,
    imageGridElement: css`
      @media ${breakPoints.tabletLandscape} {
        width: 33%;
      }
      @media ${breakPoints.desktopSmall} {
        width: 33%;
      }
      @media ${breakPoints.desktopLarge} {
        width: 520px;
      }
      @media ${breakPoints.desktopXLarge} {
        width: 525px;
      }
    `
  };

  const getImages = (images) => {
    return Object.keys(images).map(picName => (
        <div css={style.imageGridElement}>
          <Image img={images[picName].childImageSharp.fluid}/>
        </div>
    ));
  };

  return (
    <div css={style.imageContainer}>
      {getImages(images)}
    </div>
  );
};

export default Gallery;
