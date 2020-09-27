import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import { css } from '@emotion/core';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import MasonryLayout from '../components/MasonryLayout';
import animalArtMeta from '../resources/animalArtMeta';
import { fonts } from '../resources/fonts';
import { colours } from '../resources/colors';
import { breakPoints } from '../resources/breakpoints';

const FeathersOfTales = (props) => {
  const imgData = useStaticQuery(graphql`
    query {
      queen_of_the_wasteland: file(relativePath: { eq: "2020/queen_of_the_wasteland_2020_web.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      st_colmans_duck: file(relativePath: { eq: "2020/st_colmans_duck_2020_web.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      furcula: file(relativePath: { eq: "2020/furcula_2020_web.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      the_ousel_of_cilgwri: file(relativePath: { eq: "2020/the_ousel_of_cilgwri_2020_web.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      the_robin: file(relativePath: { eq: "2020/the_robin_2020_web.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      the_fishermans_son: file(relativePath: { eq: "2020/the_fishermans_son_2020_web.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      one_for_sorrow: file(relativePath: { eq: "2020/one_for_sorrow_2020_web.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      the_kings_friend: file(relativePath: { eq: "2020/the_kings_friend_2020_web.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      old_nog: file(relativePath: { eq: "2020/old_nog_2020_web.png" }) {
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
        <SEO title="Feathers Of Tales - Birds in Irish folklore and myth" />
        <div css={style.pageInfo}>
          <h1>Feathers of Tales</h1>
          <h2>Birds in Irish folklore and myth</h2>
          <p>Stories are a part of every culture, they surround us. I am a big fan of folk
            tales as they show a deep connection between people and nature. They
            tell tales about people of the past from a time when our lives were more linked to the
            changes of nature.</p>
          <p>I wanted to highlight the birds of these fantastic stories, to show how they
            create the link between the natural, sometimes the supernatural world and people. The series
            will consist of 10 pieces.</p>
        </div>
        <MasonryLayout imgData={imgData} imgMeta={animalArtMeta} path={props.path} />
      </Layout>
  );
};

export default FeathersOfTales;
