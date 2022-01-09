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
      the_five_ladies: file(relativePath: { eq: "2021/the_five_ladies_2021_web.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      swan_and_dipper_ii: file(relativePath: { eq: "2021/swan_and_dipper_ii_2021_web.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      swan_and_dipper_i: file(relativePath: { eq: "2021/swan_and_dipper_i_2021_web.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      wicklows_eldest: file(relativePath: { eq: "2021/wicklows_eldest_2021_web.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      winter_birds_2021: file(relativePath: { eq: "2021/winter_birds_2021_2021_web.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      black_swan: file(relativePath: { eq: "2021/black_swan_2021_web.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      flamingo: file(relativePath: { eq: "2021/flamingo_2021_web.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      queen_of_hearts: file(relativePath: { eq: "2021/queen_of_hearts_2021_web.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const imgMeta = {
    the_five_ladies: {
      title: 'The Five Ladies',
      year: '2021',
      description: 'Ink and watercolour on Arches HP 300gsm watercolour paper. 580 x 380 mm, 2021.',
      price: 260,
      original: 'SOLD',
      prints: 'NOTYET',
      printPrice: 0,
      buyUrl: '',
      ship: 'FREE_IRL',
      printUrl: '',
      discount: 0,
      discountPrint: 0,
      type: 'watercolour_painting',
      story: 'These ladies are Dorothy, Mary-Lou, Pinky, Borris and Potty, 5 pet sheep I had the pleasure to paint!<br /><br />The painting was commissioned as a birthday gift. The five ladies are living at a farm in Ireland, and they each have their own personalities. This determined the composition of the picture: Borris is the leader, Potty and Pinky are usually side by side, Mary-Lou is right behind Borris, and Dorothy wisely remains in the background, observing.',
    },
    swan_and_dipper_ii: {
      title: 'Swan and Dipper II - Dipper',
      year: '2021',
      description: 'Ink and watercolour on cold-pressed watercolour paper. 150 x 240 mm, 2021.',
      price: 80,
      original: 'SOLD',
      prints: 'NOTYET',
      printPrice: 0,
      buyUrl: '',
      ship: 'FREE_IRL',
      printUrl: '',
      discount: 0,
      discountPrint: 0,
      type: 'watercolour_painting',
      story: 'A commissioned painting that was part of a set: two paintings of the same size, one portraying a dipper, the other one a mute swan.<br /><br />For this piece the commissioner described deep greens along with the depth of river waters, as the dipper lives by this rushing streams. The vegetation is different, it\'s denser and instead of reeds you see more trees, bushes and ivy.',
    },
    swan_and_dipper_i: {
      title: 'Swan and Dipper I - Mute Swan',
      year: '2021',
      description: 'Ink and watercolour on cold-pressed watercolour paper. 150 x 240 mm, 2021.',
      price: 80,
      original: 'SOLD',
      prints: 'NOTYET',
      printPrice: 0,
      buyUrl: '',
      ship: 'FREE_IRL',
      printUrl: '',
      discount: 0,
      discountPrint: 0,
      type: 'watercolour_painting',
      story: 'A commissioned painting that was part of a set: two paintings of the same size, one portraying a dipper, the other a mute swan.<br /><br />The commissioner wanted bright colours for this one, inspired by the lake and local swans at Cork city. Lots of blue and the sparkle of sunshine makes this painting a fresh, sunny view of this majestic bird!',
    },
    wicklows_eldest: {
      title: 'Wicklow\'s Eldest',
      year: '2021',
      description: 'Ink, watercolour, gauche and acrylics on acrylic paper. 405 x 508 mm, 2021.',
      price: 206,
      original: 'AVAILABLE',
      prints: 'NOTYET',
      printPrice: 0,
      buyUrl: 'https://www.etsy.com/ie/listing/1097952734/',
      ship: 'FREE_IRL',
      printUrl: '',
      discount: 0,
      discountPrint: 0,
      type: 'watercolour_painting',
      story: 'There are some creatures in this world who don\'t have to do a thing to give the impression of a deity. Or some kind of godfather of the mountains. Here\'s this old goat surrounded by the younger generation. He\'s half blind, and limping. If I step closer he tries to crawl away, but he would make an easy catch.<br /><br />Yet when he raises that head with his crown, I still see the patriarch, the beast that still demands respect. Time left its mark on him, but he\'s still there, still the eldest of the mountain!',
    },
    winter_birds_2021: {
      title: 'Winter Birds 2021',
      year: '2021',
      description: 'Ink and watercolour on watercolour paper. 210 x 210 mm each, 2021.',
      price: 135,
      original: 'NOTYET',
      prints: 'NOTYET',
      printPrice: 0,
      buyUrl: '',
      ship: 'FREE_IRL',
      printUrl: '',
      discount: 0,
      discountPrint: 0,
      merch: [
        {
          name: 'Christmas Cards',
          url: 'https://www.etsy.com/ie/listing/1114482253/',
          price: 3.50,
          discount: 0,
        }
      ],
      type: 'watercolour_painting',
      story: 'Artworks for my 2021 Christmas card collection. The set consists of 4 bird paintings: the bullfinch, the robin, the chaffinch and the wren.<br /><br />I wanted to pick garden birds that I haven\'t painted before, that\'s why my choice fell upon these less commonly known garden visitors. But of course you can\'t have a Christmas collection without the Robin Redbreast!',
    },
    black_swan: {
      title: 'Black Swan',
      year: '2021',
      description: 'Ink and watercolour on cold-pressed watercolour paper. 297 x 420 mm, 2021.',
      price: 120,
      original: 'SOLD',
      prints: 'AVAILABLE',
      printPrice: 21.95,
      buyUrl: '',
      ship: 'FREE_IRL',
      printUrl: 'https://www.etsy.com/ie/listing/1098620588/',
      discount: 0,
      discountPrint: 0,
      type: 'watercolour_painting',
      story: 'Another example of my mantra, "black is never black, white is never white". There are so many shades and colours in here as the light is reflected on the feathers.<br /><br />For this painting I used my oldest reference to date, a photo I took in London with a super old phone, at least 5-6 years ago. The image was quite blurry, so I had to come up with most of the details by myself. So this painting is half imagination!<br /><br />I think this is my most elegant painting so far. Quite minimalist, yet full of details. The simple beauty of a bird.',
    },
    flamingo: {
      title: 'Flamingo',
      year: '2021',
      description: 'Ink and watercolour on Arches HP 300gsm paper. 420 x 297 mm, 2021.',
      price: 130,
      original: 'AVAILABLE',
      prints: 'NOTYET',
      printPrice: 0,
      buyUrl: 'https://www.etsy.com/ie/listing/1069020336/',
      ship: 'FREE_IRL',
      printUrl: '',
      discount: 0,
      discountPrint: 0,
      type: 'watercolour_painting',
      story: 'The idea of the flamingo came from an Instagram pollI ran back in the spring of 2021 to ask what people\'s favourite birds were. And the flamingo was among the answers. I saw that, and thought yay, that would be fun! But I had to wait until I could get a really good reference (due to Covid I couldn\'t get into the flamingo enclosure in Dublin Zoo) but I finally managed to get some from FOTA in Cork. Awesome, I thought, it was time to use pinks!<br /><br />And emerald green, rose, crimson red and scarlet... Very unusual colour choices for me. But it was such a great change to paint a not very Irish, but exciting bird. Working on this piece inspired me to plan some macaws or other colourful bird paintings. And because it was so different in the colours, I really feel like I was on an exotic holiday as far as you can get when you\'re submerged in art.',
    },
    queen_of_hearts: {
      title: 'Queen of Hearts',
      year: '2021',
      description: 'Ink and watercolour on Arches HP 300gsm paper. 380 x 580 mm, 2021.',
      price: 350,
      original: 'AVAILABLE',
      prints: 'NOTYET',
      printPrice: 0,
      buyUrl: 'https://www.etsy.com/ie/listing/1076496289/',
      ship: 'FREE_IRL',
      printUrl: '',
      discount: 0,
      discountPrint: 0,
      type: 'watercolour_painting',
      story: 'This painting is a record breaker. To date, it spent far the most time stretched on my drawing board as it\'s one of the most complex paintings I\'ve done.<br /><br />The concept is based on a dream I had about swans under cherry blossoms. I don\'t remember too much of the whole thing, but I liked the feeling of the scene. I started sketching it, and since all the details were so blurry I thought maybe something abstract would work here. Dreams are pretty abstract anyway, most of the time they don\'t really make any sense! So I said all right, let\'s paint the feeling.<br /><br />And what was that feeling? The feeling is mostly the only thing that remains after dreams, after all the details are lost. And it was just simply pleasant. Something beautiful, something that doesn\'t want to be more than that. I had the idea of the two swans circling each other first, and started adding the blossoms. But the picture was still so empty (it\'s a big sheet of paper!) and at that point I decided to go crazy with details. I wanted something that was difficult, challenging to paint. So I added the roses and swallows, because why not? Anything goes that\'s pretty!',
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
