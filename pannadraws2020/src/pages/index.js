import React from 'react';
import {graphql, useStaticQuery} from "gatsby";
import { css } from '@emotion/core';
import { colours } from '../resources/colors';
import { fonts } from '../resources/fonts';
import { breakPoints } from '../resources/breakpoints';
import { logo } from '../resources/icons';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import Banner from "../components/Banner";
import MasonryLayout from "../components/MasonryLayout";
import ArtLinksContainer from "../components/ArtLinksContainer";

const App = () => {
  const imgData = useStaticQuery(graphql`
    query {
      old_nog: file(relativePath: { eq: "2020/old_nog_2020_web.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      the_old_blind_worm_of_the_swamp: file(relativePath: { eq: "2020/the_old_blind_worm_of_the_swamp_2020_web.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      the_climbing_rose_gate: file(relativePath: { eq: "2020/the_climbing_rose_gate_2020_web.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      the_summoning: file(relativePath: { eq: "2020/the_summoning_2020_web.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      deer_in_phoenix_park: file(relativePath: { eq: "2020/deer_in_phoenix_park_2020_web.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const imgMeta = {
    old_nog: {
      title: 'Old Nog',
      year: '2020',
      description: 'Ink and watercolour on watercolour paper. 420 x 594 mm (16.53 x 23.39 in), 2020.',
      price: 600,
      original: 'AVAILABLE',
      prints: 'NOTYET',
      printUrl: '',
      discount: 0,
      story: '"And so it was that Old Nog, the wisest heron of the Two Rivers, heard the noise of bubbles breaking on the water as he alighted by the pool side" (from Tarka the Otter by Henry Williamson). This is the opening piece for my art series "Feathers of Tales". I chose the heron as the kick-off for this major work because how could you be more majestic than this boss?! With his every slow and measured movement he demands the respect. You see him and you need to stare. Elegant and deadly.',
    },
    the_old_blind_worm_of_the_swamp: {
      title: 'The Old Blind Worm of the Swamp',
      year: '2020',
      description: 'Ink and watercolour on cold pressed watercolour paper. 210 x 297 mm ( 8.27 x 11.69 in), 2020.',
      price: 300,
      original: 'AVAILABLE',
      prints: 'NOTYET',
      printUrl: '',
      discount: 25,
      story: 'Sometimes I don\'t feel like using reference images. This painting was born on such an occasion, I just started drawing straight on the blank paper, and the result is this little illustration.',
    },
    the_climbing_rose_gate: {
      title: 'The Climbing Rose Gate',
      year: '2020',
      description: 'Ink and watercolour on cold pressed watercolour paper. 210 x 297 mm ( 8.27 x 11.69 in), 2020.',
      price: 220,
      original: 'AVAILABLE',
      prints: 'NOTYET',
      printUrl: '',
      discount: 0,
      story: 'Normally I don\'t procrastinate when it comes to my art life. But when I do, I procrastinate by making another painting :). This piece was created while I was working on "The Summoning", a piece that took quite long to finish.',
    },
    the_summoning: {
      title: 'The Summoning',
      year: '2020',
      description: 'Ink and watercolour on cold pressed watercolour paper. 420 x 594 mm (16.53 x 23.39 in), 2020.',
      price: 650,
      original: 'AVAILABLE',
      prints: 'AVAILABLE',
      printUrl: 'https://society6.com/product/the-summoning2790424_print',
      discount: 0,
      story: 'Considering the preparations, this painting took me the longest ever to finish. When I had the idea of the subject, I knew I had to go to Phoenix Park to take reference photos of the deer there. But even when I started planning the painting I had no idea about the composition... it all came to life on the paper eventually, no matter how many sketches I made to plan it.',
    },
    deer_in_phoenix_park: {
      title: 'Deer in Phoenix Park',
      year: '2020',
      description: 'Ink and watercolour on mixed media paper. 297 x 420 mm (11.69 x 16.53 in), 2020.',
      price: 225,
      original: 'AVAILABLE',
      prints: 'AVAILABLE',
      printUrl: 'https://society6.com/product/deer-in-phoenix-park_print',
      discount: 0,
      story: 'I created this quick study of a stag to practice the deer head for "The Summoning". I ended up liking the linework so much I decided to finish it as a standalone piece.',
    },
  };

  const style = {
    dividerTitle: css`
      position: relative;
      
      /*&:before {
        content: '';
        display: block;
        width: 100%;
        height: 2px;
        background: ${colours.c2};
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
      }*/
      
      svg {
        width: 30px;
        height: 30px;
        margin-left: 10px;
        float: left;
      }
      
      h3 {
        background: ${colours.c3};
        color: ${colours.c2};
        font-family: ${fonts.f1};
        text-transform: uppercase;
        z-index: 1;
        position: relative;
        display: inline-block;
        padding: 2px 5px;
        
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
    `,
    newsContainer: css`
    
    `,
  };

  return (
      <Layout>
        <SEO title="Fantasy and animal fine art by Panna Zsamba" />
        <Banner />
        <ArtLinksContainer />
        {/*<div css={style.newsContainer}>
          <div css={style.dividerTitle}><h3>News</h3></div>
        </div>*/}
        <div css={style.dividerTitle}>{logo()}<h3>Latest Art</h3></div>
        <MasonryLayout imgData={imgData} imgMeta={imgMeta} />
      </Layout>
  );
};

export default App;
