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
      },
      alfalfa: file(relativePath: { eq: "2020/alfalfa_2020_web.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      lirs_daughter: file(relativePath: { eq: "2020/lirs_daughter_2020_web.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      treasures: file(relativePath: { eq: "2020/treasures_2020_web.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      christmas_tits_2020: file(relativePath: { eq: "2020/christmas_tits_2020.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const imgMeta = {
    we_belong: {
      title: 'We Belong',
      year: '2020',
      description: 'Ink and watercolour on acrylic paper. 405 x 508 mm, 2020.',
      price: 200,
      original: 'SOLD',
      prints: 'NOTYET',
      printPrice: 0,
      buyUrl: '',
      printUrl: '',
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
    alfalfa: {
      title: 'Alfalfa',
      year: '2020',
      description: 'Ink and watercolour on mixed media paper. 297 x 420 mm (11.7 x 16.5 in), 2020.',
      price: 180,
      original: 'SOLD',
      prints: 'NOTYET',
      buyUrl: '',
      printUrl: '',
      merch: [
        {
          name: 'Women\'s t-shirt',
          url: 'https://www.etsy.com/ie/listing/906857911/alfalfa-womens-short-sleeve-t-shirt-with',
          price: 32,
          discount: 0,
        },
      ],
      discount: 0,
      discountPrint: 0,
      type: 'watercolour_painting',
      story: 'This is a commissioned t-shirt print for <a href="https://www.instagram.com/max_border_collie27/" target="_blank" rel="noopener noreferrer">Max</a>, a blue merle border collie. The t-shirts are now available at <a href="https://pannadraws.etsy.com/" target="_blank" rel="noopener noreferrer">Etsy store</a>!',
    },
    lirs_daughter: {
      title: 'Lir\'s Daughter (Feathers of Tales X)',
      year: '2020',
      description: 'Ink and watercolour on watercolour paper. 405 x 508 mm (16 x 20 in), 2020.',
      price: 180,
      original: 'SOLD',
      prints: 'AVAILABLE',
      ship: 'FREE_IRL_UK_USA',
      buyUrl: 'https://www.etsy.com/ie/listing/902422157/lirs-daughter-feathers-of-tales-x',
      printUrl: 'https://www.etsy.com/ie/listing/911737817/lirs-daughter-feathers-of-tales-x-bird',
      printPrice: 26.95,
      discount: 0,
      discountPrint: 0,
      type: 'watercolour_painting',
      story: '"...so she drove the children of Lir into the lake to bathe, and they did as Oifa told them. As soon as they were upon the lake she struck them with a Druid\'s wand of spells and wizardry and put them into the forms of four beautiful, perfectly white swans..." (The Fate of The Children of Lir)<br /><br />So the series ends with this story, one of the most famous ones from Celtic mythology. Oifa, their stepmother, in her jealousy turned Lir\'s children into swans for 900 years just to see the decline of the Tuatha De Danann and their family. When Oifa\'s crime was discovered she was turned into an air-demon, a creature she loathed the most. But that didn\'t break the magic on the children who remained swans with the gift of speech and songs.<br /><br />This painting is the 10th and final piece in Feathers of Tales, my series on birds of Irish folklore.',
    },
    treasures: {
      title: 'Treasures',
      year: '2020',
      description: 'Ink and watercolour on mixed media paper. 297 x 420 mm ( 11.69 x 16.53 in), 2020.',
      price: 120,
      original: 'AVAILABLE',
      prints: 'AVAILABLE',
      printPrice: 21.95,
      ship: 'FREE_IRL_UK_USA',
      buyUrl: 'https://www.etsy.com/ie/listing/896513203/treasures-original-watercolour-painting',
      printUrl: 'https://www.etsy.com/ie/listing/889404732/treasures-bird-art-poster-print-sea-bird',
      discount: 0,
      discountPrint: 0,
      type: 'watercolour_painting',
      story: 'While drawing this I was so so tempted to move it towards a contemporary issue and add plastic waste among the seashells and logs. That would have been the reality, this in my painting is the fairy tale guys...<br /><br />I took the reference photo on Bull Island and on some days its shore is a disgrace. Plastic everywhere, bottles, scraps, all the little colourful bits that doesn\'t fit in the greyish green on the shore. Sad.<br /><br />So this piece is kept as an imaginary scene, a dream, without the rubbish, just the natural elements. A bit of comfort and escape from reality.',
    },
    christmas_tits_2020: {
      title: 'Christmas Tits 2020',
      year: '2020',
      description: 'Ink and watercolour on watercolour paper. 210 x 297 mm (8.27 x 11.69 in), 2020.',
      price: 110,
      original: 'SOLD',
      prints: 'NOTYET',
      buyUrl: 'https://www.etsy.com/ie/listing/878489796/holiday-tits-set-of-3-original',
      merch: [
        {
          name: 'Christmas Cards (set of 3 or 6)',
          url: 'https://www.etsy.com/ie/listing/891942385/robins-and-tits-greeting-card-set',
          price: 8,
          discount: 0,
        },
      ],
      ship: 'FREE_IRL_UK_USA',
      printUrl: '',
      discount: 0,
      discountPrint: 0,
      type: 'watercolour_painting',
      story: 'These little tits were painted to become prints for a set of Christmas greeting cards. The original paintings are a set of 3 paintings, while the cards can be bought in sets of 3 or 6 (together with the Robin cards). The 3 paintings picture two coal tits and a blue tit showcasing fantastic acrobatic skills!<br /><br />In the picture here you can see the set of holiday greeting cards, but if you head over to my shop (use the link below to the original) you can see the paintings in detail. The cards come with gold envelopes. The paintings are unframed, but mounted in 16 x 20" photo mounts and they fit in standard size frames.',
    }
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
