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
      peregrine: file(relativePath: { eq: "2021/peregrine_2021_web.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      bistre_doe: file(relativePath: { eq: "2021/bistre_doe_2021_web.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      the_hug: file(relativePath: { eq: "2021/the_hug_2021_web.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      low_tide_tale: file(relativePath: { eq: "2021/low_tide_tale_2021_web.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      spear: file(relativePath: { eq: "2021/spear_2021_web.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      buttercups: file(relativePath: { eq: "2021/buttercups_2021_web.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      sandworts: file(relativePath: { eq: "2020/sandworts_2020_web.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      cuckooflowers: file(relativePath: { eq: "2020/cuckooflowers_2020_web.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const imgMeta = {
    peregrine: {
      title: 'Peregrine',
      year: '2021',
      description: 'Ink and watercolour on paper. 216 x 278 mm, 2021.',
      price: 85,
      original: 'MSG',
      prints: 'NOTYET',
      printPrice: 0,
      buyUrl: '',
      printUrl: '',
      discount: 0,
      discountPrint: 0,
      type: 'watercolour_painting',
      story: 'The Peregrine, the fastest bird in the world (and apparently the fastest creature as well).<br /><br />I knew sooner or later I needed to honour this bird, but to capture the personality of a raptor is not easy. You can\'t see them from your window, and observe them while you daydream. You need to go after them, look for them, and hunting a hunter is anything but easy.',
    },
    bistre_doe: {
      title: 'Bistre Doe',
      year: '2021',
      description: 'Ink and watercolour on paper. 405 x 508 mm, 2021.',
      price: 215,
      original: 'MSG',
      prints: 'NOTYET',
      printPrice: 0,
      buyUrl: '',
      printUrl: '',
      discount: 0,
      discountPrint: 0,
      type: 'watercolour_painting',
      story: 'This is a doe I saw at Phoenix Park, Dublin. I was there early in the morning when the park was still empty, in early autumn, and the sun was still warm and bright. This dark coloured one caught my eye, as her coat was almost glowing in that morning sunlight.<br /><br />How captivating is that eye? Such a gentle expression, but the light glows in there just the same. The star of the show. How can you stand out from the crowd when you are just a doe, and everyone is looking for those antlers? Just stand up and shine!',
    },
    the_hug: {
      title: 'The Hug',
      year: '2021',
      description: 'Ink and watercolour on paper. 112 x 278 mm, 2021.',
      price: 55,
      original: 'SOLD',
      prints: 'NOTYET',
      printPrice: 0,
      buyUrl: 'https://www.etsy.com/ie/listing/944412998/the-hug-original-watercolour-painting',
      printUrl: '',
      discount: 0,
      discountPrint: 0,
      type: 'watercolour_painting',
      story: 'Mute swans became symbols of love because they mate for years. It might last for life, but the truth is the pair can separate. Doesn\'t that bring them even closer to human relationships?<br /><br />I\'m so amazed by the sight of affection being displayed among animals, especially birds. They are fundamentally so different than us, yet these gestures are so similar. You can immediately tell if those birds form a pair.',
    },
    low_tide_tale: {
      title: 'Low Tide Tale',
      year: '2021',
      description: 'Ink and watercolour on paper. 195 x 255 mm, 2021.',
      price: 75,
      original: 'MSG',
      prints: 'NOTYET',
      merch: [
        {
          name: 'Greeting Card',
          url: 'https://www.etsy.com/ie/listing/953617477/low-tide-tale-greeting-card-with',
          price: 3.50,
          discount: 0,
        },
      ],
      printPrice: 0,
      buyUrl: '',
      printUrl: '',
      discount: 0,
      discountPrint: 0,
      type: 'watercolour_painting',
      story: 'When I was working on the drawing, it just started to look more and more like an illustration that reminded me of my childhood adventures in the wilderness of lakes, sneaking in the swampy parts without a care, discovering nests and catching lizards and frogs...<br /><br />I could tell a hundred tales from those times, and maybe subconsciously I illustrated that experience in this painting. When I encounter such a beautiful bird standing like a statue, I dare not move, I just watch, as this white angel is looking for prey.',
    },
    spear: {
      title: 'Spear',
      year: '2021',
      description: 'Ink and watercolour on acrylic paper. 508 x 405 mm, 2021.',
      price: 200,
      original: 'SOLD',
      prints: 'NOTYET',
      printPrice: 0,
      buyUrl: '',
      printUrl: '',
      discount: 0,
      discountPrint: 0,
      type: 'watercolour_painting',
      story: 'I never really thought any bird would be scary, at least I\'ve never been scared of any. But look at that eye. I see the beast from horror movies, that frame that gets frozen just before it strikes and you know how it will end. Herons are no cuddly little chicks, and while I was painting this portrait I thought for the first time this bird is scary.<br /><br />I got the chance to have a close look at the beak, too. It\'s full of scratches from all the strikes that went down in water, and probably came out with a catch. This bird is like the old hunter who still has some tricks up in his sleeves!',
    },
    buttercups: {
      title: 'Buttercups',
      year: '2021',
      description: 'Ink and watercolour on watercolour paper. 210 x 297 mm, 2021.',
      price: 94,
      original: 'AVAILABLE',
      prints: 'NOTYET',
      printPrice: 0,
      ship: 'FREE_IRL',
      buyUrl: 'https://www.etsy.com/ie/listing/947459543/buttercups-original-watercolour-painting',
      printUrl: '',
      merch: [
        {
          name: 'Unisex t-shirt',
          url: 'https://www.etsy.com/ie/listing/941546699/buttercups-unisex-short-sleeve-t-shirt',
          price: 32,
          discount: 0,
        },
        {
          name: 'Greeting cards',
          url: 'https://www.etsy.com/ie/listing/943508801/birds-in-love-greeting-card-set-songbird',
          price: 3.50,
          discount: 0,
        },
        {
          name: 'Postcard set',
          url: 'https://www.etsy.com/ie/listing/928314268/birds-in-love-postcard-set-songbird',
          price: 5,
          discount: 0,
        },
      ],
      discount: 0,
      discountPrint: 0,
      type: 'watercolour_painting',
      story: 'This is the third of my spring collection prints: a pair of robins and an Irish wildflower, Buttercups. Also my first artwork in 2021! Inspired by the courting habits of the European Robin: the male offers treats to the female, and feeds her.<br /><br />This painting was created as a t-shirt print, but postcards and greeting cards are also made with it!',
    },
    sandworts: {
      title: 'Sandworts',
      year: '2020',
      description: 'Ink and watercolour on watercolour paper. 210 x 297 mm, 2020.',
      price: 94,
      original: 'AVAILABLE',
      prints: 'NOTYET',
      printPrice: 0,
      ship: 'FREE_IRL',
      buyUrl: 'https://www.etsy.com/ie/listing/933507942/sandworts-original-watercolour-painting',
      printUrl: '',
      merch: [
        {
          name: 'Unisex t-shirt',
          url: 'https://www.etsy.com/ie/listing/941546297/sandworts-unisex-short-sleeve-t-shirt',
          price: 32.50,
          discount: 0,
        },
        {
          name: 'Greeting cards',
          url: 'https://www.etsy.com/ie/listing/943508801/birds-in-love-greeting-card-set-songbird',
          price: 3.50,
          discount: 0,
        },
        {
          name: 'Postcard set',
          url: 'https://www.etsy.com/ie/listing/928314268/birds-in-love-postcard-set-songbird',
          price: 5,
          discount: 0,
        },
      ],
      discount: 0,
      discountPrint: 0,
      type: 'watercolour_painting',
      story: 'This is the second of my spring collection prints: a pair of blue tits and an Irish wildflower, Sandworts. This painting was created as a t-shirt print, but postcards and greeting cards are also made with it!',
    },
    cuckooflowers: {
      title: 'Cuckooflowers',
      year: '2020',
      description: 'Ink and watercolour on watercolour paper. 297 x 420 mm, 2020.',
      price: 144,
      original: 'AVAILABLE',
      prints: 'NOTYET',
      printPrice: 0,
      ship: 'FREE_IRL',
      buyUrl: 'https://www.etsy.com/ie/listing/933499334/cuckooflowers-original-watercolour',
      printUrl: '',
      merch: [
        {
          name: 'Unisex t-shirt',
          url: 'https://www.etsy.com/ie/listing/941545811/cuckooflowers-unisex-short-sleeve-t',
          price: 34.50,
          discount: 0,
        },
        {
          name: 'Greeting cards',
          url: 'https://www.etsy.com/ie/listing/943508801/birds-in-love-greeting-card-set-songbird',
          price: 3.50,
          discount: 0,
        },
        {
          name: 'Postcard set',
          url: 'https://www.etsy.com/ie/listing/928314268/birds-in-love-postcard-set-songbird',
          price: 5,
          discount: 0,
        },
      ],
      discount: 0,
      discountPrint: 0,
      type: 'watercolour_painting',
      story: 'This is the first of my spring collection prints: a pair of grey herons in their courting dance, and some cuckooflowers to get that spring vibe going. Herons start courting in mid-February, taking on their party looks: bright orange beaks and fresh plumage.<br /><br />There are t-shirts, greeting cards and postcards available with this print!',
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
