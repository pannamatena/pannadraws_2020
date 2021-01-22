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
      },
      we_belong: file(relativePath: { eq: "2020/we_belong_2020_web.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      muruchaill: file(relativePath: { eq: "2020/muruchaill_2020_web.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      jacks: file(relativePath: { eq: "2020/jacks_2020_web.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      curlew: file(relativePath: { eq: "2020/curlew_2020_web.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const imgMeta = {
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
    we_belong: {
      title: 'We Belong',
      year: '2020',
      description: 'Ink and watercolour on acrylic paper. 405 x 508 mm, 2020.',
      price: 200,
      original: 'SOLD',
      prints: 'AVAILABLE',
      printPrice: 26.95,
      buyUrl: '',
      printUrl: 'https://www.etsy.com/ie/listing/925362562/we-belong-swan-pair-poster-print-celtic',
      discount: 0,
      discountPrint: 0,
      type: 'watercolour_painting',
      story: '"I will not sell thee indeed," said Ecohaid, "but let him put his arms round thee in the middle of the house as thou art." "It shall be done," said Midir. He takes his weapons in his left hand, and the woman he took under his right arm, and bore her away through the skylight of the house. The hosts rose up in shame around the king. They beheld two swans in flight around Tara. (from the <i>Wooing of Étaín</i>)<br /><br />It\'s hard to summarize this story as it\'s a crazy one, and easily beats any soap opera! So in short, Midir takes Étaín, the most beautiful woman as his wife. But his first wife turns Étaín into a pool of water, from which she evaporates and becomes a fly, and after many adventures she lands in the drink of the wife of Étar, a warrior. She swallows the fly and becomes pregnant, giving birth to Étain again after 1012 years of her first birth. She gets wed to Eochu, high king of Ireland. Meanwhile Midir learns his long lost love is alive, and challenges Eochu in a chess game to get a kiss from Étaín if he wins. Of course he won, and when embracing Étaín they both turn into swans and escape.<br /><br />This painting was commissioned to contain a folklore element and swans, so I chose this love story from Celtic mythology to serve as my inspiration.',
    },
    muruchaill: {
      title: 'Murúchaill',
      year: '2020',
      description: 'Ink and watercolour on cold-pressed watercolour paper. 297 x 420 mm, 2020.',
      price: 120,
      original: 'AVAILABLE',
      ship: 'FREE_IRL_UK',
      prints: 'NOTYET',
      printPrice: 0,
      buyUrl: 'https://www.etsy.com/ie/listing/932337371/muruchaill-original-watercolour-painting',
      printUrl: '',
      discount: 0,
      discountPrint: 0,
      type: 'watercolour_painting',
      story: 'Cormorants are quite a common view as they are drying themselves on rocks, turning their wings to face the sun, but I still find something exotic in their groups. They were seen as mermaids, and one Irish name I chose as the title of this painting means exactly that: mermaid.<br /><br />I saw this Cormorant drying his wings and grooming at Howth, Dublin.',
    },
    jacks: {
      title: 'Jacks',
      year: '2020',
      description: 'Ink and watercolour on hot pressed watercolour paper. 400 x 570 mm, 2020.',
      price: 200,
      original: 'SOLD',
      prints: 'AVAILABLE',
      printPrice: 25.50,
      buyUrl: '',
      printUrl: 'https://www.etsy.com/ie/listing/923304031/jacks-bird-art-poster-print-garden-bird',
      discount: 0,
      discountPrint: 0,
      type: 'watercolour_painting',
      story: 'This artwork is mostly inspired by the magpies that visit my garden every day, but I also incorporated something from tropical natural history illustrations. The character of the birds really reminded me of an Irish tale, "Jack, the cunning thief". The hero of the story can steal anything from anywhere, and outsmarts everyone. Just like these rascals! Thieves they might be, but smart ones. I have to admit I do like magpies, even though I had my share of conflict with them!',
    },
    curlew: {
      title: 'Curlew',
      year: '2020',
      description: 'Ink and watercolour on mixed media paper. 297 x 420 mm (11.7 x 16.5 in), 2020.',
      price: 180,
      original: 'SOLD',
      prints: 'AVAILABLE',
      printPrice: 24.95,
      buyUrl: '',
      printUrl: 'https://www.etsy.com/ie/listing/895285512/curlew-bird-art-poster-print-shore-bird',
      discount: 0,
      discountPrint: 0,
      type: 'watercolour_painting',
      story: 'I took the reference photo on Bull Island, and I really like the beach vibe this painting radiates, the same feeling I had when I was on the beach photographing the birds. Even though it\'s definitely not summer any more this painting still reminds me of the gentle sea breeze and I can hear the murmur of the waves.',
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
