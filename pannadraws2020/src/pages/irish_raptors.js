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

const IrishRaptors = (props) => {
  const imgData = useStaticQuery(graphql`
    query {
      red_kite: file(relativePath: { eq: "2021/red_kite_2021_web.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      kestrel: file(relativePath: { eq: "2021/kestrel_2021_web.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      musket: file(relativePath: { eq: "2021/musket_2021_web.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      peregrine: file(relativePath: { eq: "2021/peregrine_2021_web.jpg" }) {
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
        <SEO title="Irish Raptors - Watercolour birds of prey portraits" />
        <div css={style.pageInfo}>
          <h1>Irish Raptors</h1>
          <h2>A series of Irish birds of prey in small portrait studies</h2>
          <p>This line of work started with the realisation that birds of prey were underrepresented
            in my art. Unfortunately, mostly due to human activity, there are not too many raptors
            present in Ireland, and some of them had been just recently reintroduced. Most of
          us probably see the urban Sparrowhawk at least once in our lives, but there's also the
          unbelievable Peregrine, the Red Kite, or the Kestrel, just to mention a few that can be
            spotted.</p>
          <p>With this series I pay homage to these sometimes hated, sometimes loved birds, who picked
          one of the most ungrateful and difficult way of living: hunting. They are built for their craft,
          and at least in my eyes they are absolutely stunning creations of Mother Nature. I want to
          broadcast this admiration with these paintings.</p>
        </div>
        <MasonryLayout imgData={imgData} imgMeta={animalArtMeta} path={props.path} />
      </Layout>
  );
};

export default IrishRaptors;
