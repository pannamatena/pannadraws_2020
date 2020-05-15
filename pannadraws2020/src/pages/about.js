import React from 'react';
import { css } from '@emotion/core';
import { useStaticQuery, graphql } from 'gatsby';
import { breakPoints } from '../resources/breakpoints';
import { fonts } from '../resources/fonts';
import Image from '../components/Image';
import Layout from '../components/Layout';
import SEO from '../components/Seo';

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "me.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const style = {
    pageContainer: css`
      max-width: 800px;
      margin: 0 auto;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: stretch;
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
    imgContainer: css`
      flex:1;
      max-width: 200px;
      background: #f3f3f3;
      border: 1px solid #e6e6e6;
      transform: rotate(-8deg);
      
      margin-right: 10px;
      @media ${breakPoints.tabletPortrait} {
        margin-right: 15px;
      }
      @media ${breakPoints.desktopSmall} {
        margin-right: 20px;
      }
      
      img {
        display: inline-block;
        padding: 5px;
      }
    `,
    textContainer: css`
      flex: 1;
    `,
  };

  return (
  <Layout>
    <SEO title="About PannaDraws" />
    <div css={style.pageContainer}>
      <script>
        fbq('track', 'About');
      </script>
      <div css={style.imgContainer}>
        <Image img={data.placeholderImage.childImageSharp.fluid}/>
      </div>
      <div css={style.textContainer}>
        <h1>I paint and draw fantasy creatures, birds and wildlife.</h1>

        <p>I work as a fantasy and animal artist because I have always been fascinated by
        the beasts of stories of my childhood and myths in my readings in later life.</p>
        <p>Part of my inspiration comes from novels and stories, but wildlife constantly affects me
        in almost all everyday situations, like a walk to the grocery store, or just
        looking at my bird feeder through the kitchen window.</p>
        <p>I choose watercolour and ink as materials to capture my subjects because these light mediums
          provide a fairy-tale-like atmosphere to my work. This lightness is balanced by the sharp
          outlines of figures, inspired by superhero comic and manga books of my childhood.</p>
        <p>A bird is a symbol of freedom. The supernatural lets you escape reality.
          When painting, my subjects work as a stress relief for me, so I can get lost in the magical world I create.</p>

      </div>
    </div>
  </Layout>
)};

export default AboutPage
