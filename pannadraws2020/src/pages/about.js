import React from 'react';
import { css } from '@emotion/core';
import { useStaticQuery, graphql } from 'gatsby';
import { breakPoints } from '../resources/breakPoints';
import { fonts } from '../resources/fonts';
import Image from '../components/Image';
import Layout from '../components/Layout';
import SEO from '../components/Seo';

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "me.png" }) {
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
        <h1>I'm a software developer who paints.</h1>
        <p>And builds wooden ship models. And cooks, bakes, and likes gardening.</p>
        <p>
          I was born and raised in Hungary, now I live in Ireland. I started as a web designer, then eventually turned into
          a front-end engineer, but I kept my passion for fine art. I used to paint digitally a lot, but the ups and downs
          of traditional media (and the challenge of the lack of cmd+z) drove me towards watercolours.
        </p>
      </div>
    </div>
  </Layout>
)};

export default AboutPage
