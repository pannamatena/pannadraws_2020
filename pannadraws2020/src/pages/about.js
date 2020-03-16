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
    <SEO title="About" />
    <div css={style.pageContainer}>
      <div css={style.imgContainer}>
        <Image img={data.placeholderImage.childImageSharp.fluid}/>
      </div>
      <div css={style.textContainer}>
        <h1>I paint and draw fantasy creatures and farm animals.</h1>
        <p>
          I was born and raised in Hungary, now I live in Dublin, Ireland. Mythology and magical creatures had always been in my interest,
          and I have always had a want and drive to create. I got my bachelor's degree with a major in English Literature and Culture, and
          wrote my thesis on Dragons in Celtic Mythology and Literature. While I'm working as a software engineer my passion for art
          and creation remains a significant part of my creative life.
        </p>
        <p>
          I mostly work with traditional mediums like watercolour, ink and coloured pencils. My main subjects are farm animals and
          fantasy creatures, as I want to show the beauty I see in the simplicity of the former, whereas I enjoy the freedom from
          rules when designing the imaginary.
        </p>
      </div>
    </div>
  </Layout>
)};

export default AboutPage
