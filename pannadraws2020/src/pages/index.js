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
import NewsLetter from '../components/Newsletter';

const App = (props) => {
  const imgData = useStaticQuery(graphql`
    query {
      kestrel: file(relativePath: { eq: "2021/kestrel_2021_web.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      caladrius: file(relativePath: { eq: "2021/caladrius_2021_web.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      sunny_december_day: file(relativePath: { eq: "2021/sunny_december_day_2021_web.jpg" }) {
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
      hawk_of_st_annes: file(relativePath: { eq: "2021/hawk_of_st_annes_2021_web.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      the_birdfeeder: file(relativePath: { eq: "2021/the_birdfeeder_2021_web.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      bone_raven: file(relativePath: { eq: "2021/bone_raven_2021_web.jpg" }) {
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

  const imgMeta = {
    kestrel: {
      title: 'Kestrel',
      year: '2021',
      description: 'Ink and watercolour on paper. 190 x 280 mm, 2021. Framed.',
      price: 170,
      original: 'MSG',
      prints: 'NOTYET',
      printPrice: 0,
      buyUrl: '',
      printUrl: '',
      discount: 0,
      discountPrint: 0,
      type: 'watercolour_painting',
      story: 'Part of my Irish birds of prey portrait study series.<br /><br />He\'s is such a small bird of prey! Like all of their kind, they are masters of their crafts: they can hover to target small rodents from the air. In Hungarian the kestrel has "red" in its name (vörös vércse) referring to that bright coat they have. In my portrait I pictured the bird from the front, but part of that beautiful coat is still visible. This is a pretty bird!',
    },
    caladrius: {
      title: 'Caladrius',
      year: '2021',
      description: 'Ink and watercolour on paper. 594 x 420 mm, 2021.',
      price: 220,
      original: 'MSG',
      prints: 'NOTYET',
      printPrice: 0,
      buyUrl: '',
      printUrl: '',
      discount: 0,
      discountPrint: 0,
      type: 'watercolour_painting',
      story: 'This piece was a donation to the fundraiser art auction of ARC Cancer Support, an organisation that helps people with cancer diagnosis and their families to handle the new situation.<br /><br />I chose the subject of the painting specifically for the occasion, so this epic white bird is Caladrius, the bird of healing. If he sits on the chest of the sick person and turns his head right, the person lives. I took this positive scenario, showing the mythical bird pecking at a dark serpent, the Sickness.<br /><br />I\'m hoping everyone who needs him can reach out for Caladrius!',
    },
    sunny_december_day: {
      title: 'Sunny December Day',
      year: '2021',
      description: 'Ink and watercolour on paper. 380 x 280 mm, 2021.',
      price: 120,
      original: 'MSG',
      prints: 'NOTYET',
      printPrice: 0,
      buyUrl: '',
      printUrl: '',
      discount: 0,
      discountPrint: 0,
      type: 'watercolour_painting',
      story: 'This is a painting I made for Curlew Action, an organisation dedicated to the conservation of Curlews in the UK and Ireland.<br /><br />Curlews are not so rare in my area, but I only see them solitary, and I\'ve spotted a pair only once. The problem, as I\'ve learnt, is the decline of breeding pairs as they can\'t successfully breed here. This artwork was created for the org\'s art and poetry competition. The theme: What does the Curlew mean to you?<br /><br />My answer in short is that I cannot imagine a seashore without them, they are part of the picture I have in mind when I think of these shores. The image I painted here is an illustration of this picture, a lonely curlew foraging in a winter day.',
    },
    musket: {
      title: 'Musket',
      year: '2021',
      description: 'Ink and watercolour on paper. 190 x 280 mm, 2021. Framed.',
      price: 170,
      original: 'AVAILABLE',
      prints: 'NOTYET',
      printPrice: 0,
      buyUrl: 'https://www.etsy.com/ie/listing/964272120/musket-original-watercolour-painting',
      printUrl: '',
      discount: 0,
      discountPrint: 0,
      type: 'watercolour_painting',
      story: 'Being one of the most seen raptor for me in lockdown, the sparrowhawk had to be included in my small birds of prey portrait series (along with the Peregrine and Red Kite). It\'s amazing how different the face of each bird is. While the Peregrine has almost completely black eyes that gives him a beast-like look, the hawk has bright yellow-red eye with a definite pupil - that kind of hawk eye that gives you the chill with its fierce look.',
    },
    hawk_of_st_annes: {
      title: 'Hawk of St Anne\'s',
      year: '2021',
      description: 'Ink and watercolour on paper. 210 x 297 mm, 2021.',
      price: 120,
      original: 'SOLD',
      prints: 'AVAILABLE',
      printPrice: 22.95,
      buyUrl: '',
      printUrl: 'https://www.etsy.com/ie/listing/957620520/hawk-of-st-annes-bird-art-poster-print',
      discount: 0,
      discountPrint: 0,
      type: 'watercolour_painting',
      story: 'It\'s amazing how certain birds can adapt to urban life, and while most of us think of pigeons and sparrows, where there is prey, the predators appear. Sparrowhawks are common in city parks, such as St Anne\'s Park in Dublin, and these neighbours inspired this painting.<br /><br />The original painting was a commissioned one. Special thanks to <a href="https://www.futterer-wildlife.com/" target="_blank" rel="noopener noreferrer">Matthias Futterer</a> for letting me use his wonderful photograph of a sparrowhawk as reference.',
    },
    the_birdfeeder: {
      title: 'The Birdfeeder',
      year: '2021',
      description: 'Ink and watercolour on paper. 210 x 297 mm, 2021.',
      price: 90,
      original: 'SOLD',
      prints: 'AVAILABLE',
      printPrice: 21.95,
      buyUrl: '',
      printUrl: 'https://www.etsy.com/ie/listing/971588331/the-birdfeeder-bird-art-poster-print',
      discount: 0,
      discountPrint: 0,
      type: 'watercolour_painting',
      story: 'For many of us who have a birdfeeder in the garden the little visitors are like family: we look at them as one of our own, our friends, who are there every day to cheer up up with their acrobatics around the seeds. Robins and blue tits are favourites everywhere. This painting captures that view that every bird lover wishes to see, a busy feeder with three of the most popular songbirds.<br /><br />The original painting was a commissioned one, a gift for Mother\'s day.',
    },
    bone_raven: {
      title: 'Bone Raven',
      year: '2021',
      description: 'Ink and watercolour on paper. 420 x 594 mm, 2021.',
      price: 250,
      original: 'SOLD',
      prints: 'AVAILABLE',
      printPrice: 23.95,
      buyUrl: '',
      printUrl: 'https://www.etsy.com/ie/listing/992037141/bone-raven-bird-art-print-poster',
      discount: 0,
      discountPrint: 0,
      type: 'watercolour_painting',
      story: 'I had some uneasiness with rooks. Like most corvids in their groups they give a quite haunted feeling to any place, and the rook\'s face resembles the plague masks used in middle ages, so it\'s quite a scary bird. Or rather it was a scary one, as I painted this fluffy one (reference photo taken on a windy day) I saw the intelligence in his eyes and I can\'t really see them as frightening any more.<br /><br />Yes the rook\'s face is not a cuddly one, but the beautiful irridescence in the black feathers and the elegance as they glide and land makes them outstanding. Once a rook landed just beside me on a fence, and didn\'t get scared when I looked him straight in the eyes. What I saw was an intimidating cunning, maybe with some curiosity. It\'s said corvids can recognise human faces! This is a remarkable bird who deserves the credit on a large, A2 sized painting.',
    },
    peregrine: {
      title: 'Peregrine',
      year: '2021',
      description: 'Ink and watercolour on paper. 216 x 278 mm, 2021. Framed.',
      price: 85,
      original: 'HAMBLY',
      prints: 'NOTYET',
      printPrice: 0,
      buyUrl: '',
      printUrl: '',
      discount: 0,
      discountPrint: 0,
      type: 'watercolour_painting',
      story: 'The Peregrine, the fastest bird in the world (and apparently the fastest creature as well).<br /><br />I knew sooner or later I needed to honour this bird, but to capture the personality of a raptor is not easy. You can\'t see them from your window, and observe them while you daydream. You need to go after them, look for them, and hunting a hunter is anything but easy.',
    },
  };

  const style = {
    dividerTitle: css`
      position: relative;
      
      svg {
        width: 30px;
        height: 30px;
        margin-left: 10px;
        float: left;
        
        @media ${breakPoints.desktopLarge} {
          margin-top: 8px;
        }
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
    sectionCenter: css`
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      justify-content: center;
      
      margin-bottom: 10px;
      @media ${breakPoints.tabletPortrait} {
        margin-bottom: 15px;
      }
      @media ${breakPoints.desktopSmall} {
        margin-bottom: 20px;
      }
    `,
    sectionLeft: css`
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      
      margin: 20px 0 0;
      @media ${breakPoints.tabletPortrait} {
        margin: 30px 0 0;
      }
      @media ${breakPoints.desktopSmall} {
        margin: 40px 0 0;
      }
      @media ${breakPoints.desktopXLarge} {
        margin: 100px 0 0;
      }
    `,
    newsContainer: css`
    
    `,
    quote: css`
      margin: 0 auto;
      width: 60%;
      position: relative;
      font-size: 1.5em;
      
      &:before { 
        content: '"';
        display: block;
        position: absolute;
        top: -9px;
        left: 0;
        font-family: ${fonts.f1};
        font-size: 3em;
        color: ${colours.c1};
      }
      
      margin-bottom: 20px;
      @media ${breakPoints.tabletPortrait} {
        margin-bottom: 30px;
      }
      @media ${breakPoints.desktopSmall} {
        margin-bottom: 40px;
      }
    `,
    quoteText: css`
      padding-left: 20px;
      
      font-size: 0.9em;
      @media ${breakPoints.tabletPortrait} {
        font-size: 1em;
      }
      @media ${breakPoints.desktopSmall} {
        font-size: 1.1em;
      }
    `,
    quoteFrom: css`
      font-size: 1em;
      color: ${colours.c4};
      text-align: right;
      
      font-size: 0.8em;
      @media ${breakPoints.tabletPortrait} {
        font-size: 0.9em;
      }
      @media ${breakPoints.desktopSmall} {
        font-size: 1em;
      }
    `,
  };

  return (
      <Layout>
        <SEO title="Fantasy and animal fine art by Panna Zsamba" />
        <Banner />
        <div css={style.sectionCenter}>
          <NewsLetter/>
        </div>
        {/*<div css={style.section}>
          <ArtLinksContainer />
        </div>*/}
        {/*<div css={style.newsContainer}>
          <div css={style.dividerTitle}><h3>News</h3></div>
        </div>*/}
        <div css={style.dividerTitle}>{logo()}<h3>Latest Art</h3></div>
        <MasonryLayout imgData={imgData} imgMeta={imgMeta} path={props.path} />
        <div css={style.sectionLeft}>
          <div css={style.quote}>
            <p css={style.quoteText}>The painting is amazing thank you so much and also
              for your lovely note. I hope to purchase again in the future.</p>
            <p css={style.quoteFrom}>Caroline, Ireland</p>
          </div>
          <div css={style.quote}>
            <p css={style.quoteText}>Just collected the painting from the PO on Monday
              and have just opened it. It is just as beautiful as I imagined it would be.
              What a lovely loose way of painting such natural subjects. The colours are
              sublime! So thank you very much for selling it to me, I am thrilled to
              have it.</p>
            <p css={style.quoteFrom}>Lizzie, UK</p>
          </div>
          <div css={style.quote}>
            <p css={style.quoteText}>From first discovering Panna's beautiful work on Facebook, I’ve become an avid follower!!
              She has such talent and skill and her work is very much 'all her own'... very unique
              style! I’m happy to say I’m recently the proud owner of her original piece 'Robin'
              from her 'feathersoftales'... and I look forward to seeing more!!</p>
            <p css={style.quoteFrom}>Patricia Morrison, Ireland</p>
          </div>
          <div css={style.quote}>
            <p css={style.quoteText}>Just got home from work and seen my package. I love it, thank you so much!
              Love the little message too!</p>
            <p css={style.quoteFrom}>Stephen Kelly, Ireland</p>
          </div>
        </div>
      </Layout>
  );
};

export default App;
