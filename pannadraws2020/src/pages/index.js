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
      wood_screecher: file(relativePath: { eq: "2021/wood_screecher_2021_web.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      domesticated_nomad: file(relativePath: { eq: "2021/domesticated_nomad_2021_web.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      kingfisher: file(relativePath: { eq: "2021/kingfisher_2021_web.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      hoodie: file(relativePath: { eq: "2021/hoodie_2021_web.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      before_the_explosion: file(relativePath: { eq: "2021/before_the_explosion_2021_web.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      thirsty_chough: file(relativePath: { eq: "2021/thirsty_chough_2021_web.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      ivy_gentleman: file(relativePath: { eq: "2021/ivy_gentleman_2021_web.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      red_kite: file(relativePath: { eq: "2021/red_kite_2021_web.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const imgMeta = {
    wood_screecher: {
      title: 'Wood Screecher',
      year: '2021',
      description: 'Ink and watercolour on hot-pressed watercolour paper. 297 x 420 mm, 2021.',
      price: 130,
      original: 'AVAILABLE',
      prints: 'NOTYET',
      printPrice: 0,
      buyUrl: 'https://www.etsy.com/ie/listing/1068745539/',
      ship: 'FREE_IRL',
      printUrl: '',
      discount: 0,
      discountPrint: 0,
      type: 'watercolour_painting',
      story: 'Although jays are secretive birds, they visit the feeders in many garden. As for being considered a passerine, well... The latin name "Garrulus Glandarius" roughly means "noisy acorn bird". Jays love stashing acorns, and their singing capabilities you can guess from the latin name, and also from the title of my painting, which is based on their Irish name, Scréachóg choille.<br /><br />This painting is part of my Corvid series along with the Rook, Jackdaw and the Hooded Crow!',
    },
    domesticated_nomad: {
      title: 'Domesticated Nomad',
      year: '2021',
      description: 'Ink and watercolour on Fabriano HP 640g. 280 x 380 mm, 2021.',
      price: 130,
      original: 'SOLD',
      prints: 'NOTYET',
      printPrice: 0,
      buyUrl: 'https://www.etsy.com/ie/listing/1050988933/',
      ship: 'FREE_IRL',
      printUrl: '',
      discount: 0,
      discountPrint: 0,
      type: 'watercolour_painting',
      story: 'Sometimes I venture away from painting birds because I see something extraordinary in other animals in nature. Such a topic that can make me do that is the search for the wild in all creatures. I believe even the cutest little puppy, humble livestock, and our beloved songbirds have that inner, untamed core deep down that connects them to the wilderness.<br /><br />I see sheep wandering around on any mountain in Ireland. Just when I finish climbing up a steep slope in some drizzle while the wind is constantly making me feel like I\'m freezing, I face these creatures. They don\'t seem to mind the conditions that make me feel so uncomfortable, just stare at me like they\'ve never seen a human being. But certainly they have, I can see the tags in the ears, the marking on the coat... Yet at that moment I cannot name a living thing that is more adapted to that wild environment. The domesticated nomads of Ireland.',
    },
    kingfisher: {
      title: 'Kingfisher',
      year: '2021',
      description: 'Ink and watercolour on paper. 297 x 420 mm, 2021.',
      price: 145,
      original: 'SOLD',
      prints: 'NOTYET',
      printPrice: 0,
      buyUrl: '',
      ship: 'FREE_IRL',
      printUrl: '',
      discount: 0,
      discountPrint: 0,
      type: 'watercolour_painting',
      story: 'This piece was a commissioned birthday present. In the background you can see the hints of the ruins by the River Dalyan in Turkey, and the reeds were inspired by that beautiful environment. By painting this I had to realise again what I felt while painting a blackbird and listening to their song was the same connection that this painting means to the receiver: wherever we live, the birds of our childhood, our place of origin connects us to our roots.<br /><br />That won\'t show on these photos, but I used a tiny bit of metallic watercolours on the bird, just to add to its shine, since this bird looks like a jewel. This remains a feature reserved for the original.',
    },
    hoodie: {
      title: 'Hoodie',
      year: '2021',
      description: 'Ink and watercolour on paper. 380 x 580 mm, 2021.',
      price: 265,
      original: 'AVAILABLE',
      prints: 'NOTYET',
      printPrice: 0,
      buyUrl: 'https://www.etsy.com/ie/listing/1041416667/',
      ship: 'FREE_IRL',
      printUrl: '',
      discount: 0,
      discountPrint: 0,
      type: 'watercolour_painting',
      story: 'The hooded crow, unlike the rook, is associated with misfortune and death. Morrigan or Badhbh the Celtic war goddess takes the form of this bird, and that deity is no joke. To live up to that heritage hooded crows are not like the kind rooks foraging on the ground, meaning harm to no one. They are cunning and dangerous. They hunt (apparently their method includes BEHEADING their prey). And they are large. You\'d better not mess with hoodies.',
    },
    before_the_explosion: {
      title: 'Before the Explosion',
      year: '2021',
      description: 'Ink and watercolour on paper. 568 x 290 mm, 2021.',
      price: 220,
      original: 'SOLD',
      prints: 'NOTYET',
      printPrice: 0,
      buyUrl: '',
      ship: 'FREE_IRL',
      printUrl: '',
      discount: 0,
      discountPrint: 0,
      type: 'watercolour_painting',
      story: 'I wanted to represent power and speed here. That energy! Look at this creature, it\'s exploding. At this time the target is a ball, but rewind this a few thousand years and think about how that prey felt... When you have less than a second to spare before that explosion, before this manifested energy burst is at you.<br /><br />Thanks <a href="https://www.instagram.com/max_border_collie27" target="_blank" rel="noopener noreferrer">Max</a> and <a href="https://www.instagram.com/akutyafotos.hu" target="_blank" rel="noopener noreferrer">akutyafotos.hu</a> for the resources!',
    },
    thirsty_chough: {
      title: 'Thirsty Chough',
      year: '2021',
      description: 'Ink and watercolour on paper. 380 x 280 mm, 2021.',
      price: 100,
      original: 'SOLD',
      prints: 'NOTYET',
      printPrice: 0,
      buyUrl: '',
      ship: 'FREE_IRL',
      printUrl: '',
      discount: 0,
      discountPrint: 0,
      type: 'watercolour_painting',
      story: 'This painting came to be because a fellow bird lover offered me to use her lovely photos of a chough drinking from a stream, on the Isle of Man. I loved the vivid colours on the photos, especially the many little pebbles and stones!<br /><br />I love painting corvids and this was the first time I could paint a chough. It\'s not a common bird, here in Dublin I\'ve never seen one. Maybe because of that not too much lore is built around them. But for us birdwatchers it\'s definitely a sight to cheer us up with that bright red beak and legs! This is a wonderful bird.',
    },
    ivy_gentleman: {
      title: 'Ivy Gentleman',
      year: '2021',
      description: 'Ink and watercolour on paper. 285 x 285 mm, 2021.',
      price: 125,
      original: 'AVAILABLE',
      prints: 'NOTYET',
      printPrice: 0,
      buyUrl: 'https://www.etsy.com/ie/listing/1013343201/',
      ship: 'FREE_IRL',
      printUrl: '',
      discount: 0,
      discountPrint: 0,
      merch: [
        {
          name: 'Women\'s short sleeved tee',
          url: 'https://www.etsy.com/ie/listing/1007951583/',
          price: 30.50,
          discount: 0,
        }
      ],
      type: 'watercolour_painting',
      story: 'I promised I would paint more blackbirds, and I was constantly reminded of that promise thanks to the beautiful song they perform every day in the garden. This painting was made as a t-shirt print, and once I made the t-shirt available I asked people if they would have liked to see more background. Well, they wouldn\'t have!<br /><br />I picked the ivy as the floral part of the image. It\'s a common plant, yet it has a real character: I immediately associate it with woodland ground. And to add a little spice to it, why not include some fairy mushrooms?',
    },
    red_kite: {
      title: 'Red Kite',
      year: '2021',
      description: 'Ink and watercolour on paper. 190 x 280 mm, 2021. Framed.',
      price: 183,
      original: 'AVAILABLE',
      prints: 'NOTYET',
      printPrice: 0,
      buyUrl: 'https://www.etsy.com/ie/listing/1003130725/',
      ship: 'FREE_IRL',
      printUrl: '',
      discount: 0,
      discountPrint: 0,
      type: 'watercolour_painting',
      story: 'Part of my Irish birds of prey portrait study series.<br /><br />As one of the success stories of reintroducing a species to Ireland, I had to include the Red Kite in my raptor series. This beautiful red coated bird is now quite common in the Eastern part of the isle. An eagle-like bird, but its tail is very distinctive with its V-shape. Most raptors are disliked by some because they take garden birds or pigeons, but the Red Kite prefers cleaning up after road kills, even though they hunt if needed.<br /><br />A fun fact: they like to steal human clothes, especially underwear, to decorate their nests! Who wouldn\'t adore such a bird? :D',
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
