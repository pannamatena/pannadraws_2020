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
      },
      christmas_robins_2020: file(relativePath: { eq: "2020/christmas_robins_2020.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      rascals: file(relativePath: { eq: "2020/rascals_2020_web.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      farewell: file(relativePath: { eq: "2020/farewell_2020_web.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      queen_of_the_wasteland: file(relativePath: { eq: "2020/queen_of_the_wasteland_2020_web.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      st_colmans_duck: file(relativePath: { eq: "2020/st_colmans_duck_2020_web.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const imgMeta = {
    lirs_daughter: {
      title: 'Lir\'s Daughter (Feathers of Tales X)',
      year: '2020',
      description: 'Ink and watercolour on watercolour paper. 405 x 508 mm (16 x 20 in), 2020.',
      price: 180,
      original: 'AVAILABLE',
      prints: 'NOTYET',
      ship: 'FREE_IRL_UK_USA',
      buyUrl: 'https://www.etsy.com/ie/listing/902422157/lirs-daughter-feathers-of-tales-x',
      printUrl: '',
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
      original: 'AVAILABLE',
      prints: 'NOTYET',
      buyUrl: 'https://www.etsy.com/ie/listing/878489796/holiday-tits-set-of-3-original',
      merch: [
        {
          name: 'Christmas Cards (set of 3 or 6)',
          url: 'https://www.etsy.com/ie/listing/891942385/robins-and-tits-greeting-card-set',
          price: 8
        },
      ],
      ship: 'FREE_IRL_UK_USA',
      printUrl: '',
      discount: 0,
      discountPrint: 0,
      type: 'watercolour_painting',
      story: 'These little tits were painted to become prints for a set of Christmas greeting cards. The original paintings are a set of 3 paintings, while the cards can be bought in sets of 3 or 6 (together with the Robin cards). The 3 paintings picture two coal tits and a blue tit showcasing fantastic acrobatic skills!<br /><br />In the picture here you can see the set of holiday greeting cards, but if you head over to my shop (use the link below to the original) you can see the paintings in detail. The cards come with gold envelopes. The paintings are unframed, but mounted in 16 x 20" photo mounts and they fit in standard size frames.',
    },
    christmas_robins_2020: {
      title: 'Christmas Robins 2020',
      year: '2020',
      description: 'Ink and watercolour on watercolour paper. 210 x 297 mm (8.27 x 11.69 in), 2020.',
      price: 110,
      original: 'AVAILABLE',
      prints: 'NOTYET',
      buyUrl: 'https://www.etsy.com/ie/listing/892422311/holiday-robins-set-of-3-original',
      ship: 'FREE_IRL_UK_USA',
      printUrl: '',
      merch: [
        {
          name: 'Christmas Cards (set of 3 or 6)',
          url: 'https://www.etsy.com/ie/listing/891942385/robins-and-tits-greeting-card-set',
          price: 8
        },
      ],
      discount: 0,
      discountPrint: 0,
      type: 'watercolour_painting',
      story: 'These handsome robins were painted to become prints for a set of Christmas greeting cards. The original paintings are a set of 3 paintings, while the cards can be bought in sets of 3 or 6 (together with the Tit cards). The 3 paintings picture the birds in different poses, all familiar to those who love these photogenic little birds.<br /><br />In the picture here you can see the set of holiday greeting cards, but if you head over to my shop (use the link below to the original) you can see the paintings in detail. The cards come with gold envelopes. The paintings are unframed, but mounted in 16 x 20" photo mounts and they fit in standard size frames.',
    },
    rascals: {
      title: 'Rascals',
      year: '2020',
      description: 'Ink and watercolour on watercolour paper. 297 x 420 mm ( 11.69 x 16.53 in), 2020.',
      price: 135,
      printPrice: 21.95,
      original: 'SOLD',
      prints: 'AVAILABLE',
      merch: [
        {
          name: 'Artist\'s Sketchbook',
          url: 'https://www.etsy.com/ie/listing/888840913/rascals-artists-sketchbook-spiral',
          price: 23
        },
        {
          name: 'Women\'s t-shirt',
          url: 'https://www.etsy.com/ie/listing/889316355/rascals-womens-short-sleeve-t-shirt-with',
          price: 32
        },
        {
          name: 'Men\'s t-shirt',
          url: 'https://www.etsy.com/ie/listing/875381994/rascals-mens-short-sleeve-t-shirt-with',
          price: 31.50
        },
      ],
      buyUrl: '',
      printUrl: 'https://www.etsy.com/ie/listing/870126360/rascals-bird-art-poster-print-garden',
      discount: 0,
      discountPrint: 0,
      type: 'watercolour_painting',
      story: 'Originally created as at-shirt design, this painting of two mischievous starlings became one of my favourites. If anything, starlings are real characters in the garden. They appear in a group out of nowhere, raid all the bird feeders, then most of them leave. Some might remain, and then you can listen to their chit-chat in the bushes... A pleasant sound I couldn\'t believe was coming from these rascals! In this painting I also wanted to show their beauty, the amazing greenish shine in their plumage with the golden dots along their body.<br /><br />This painting was made as a t-shirt design. T-shirts and notebooks printed with this pattern are available in my <a href="https://pannadraws.etsy.com/" target="_blank" rel="noopener noreferrer">Etsy store</a>!',
    },
    farewell: {
      title: 'Farewell',
      year: '2020',
      description: 'Ink and watercolour on watercolour paper. 297 x 420 mm ( 11.69 x 16.53 in), 2020.',
      price: 115,
      printPrice: 21.95,
      original: 'AVAILABLE',
      prints: 'AVAILABLE',
      ship: 'FREE_IRL_UK_USA',
      buyUrl: 'https://www.etsy.com/ie/listing/871870682/farewell-original-watercolour-painting',
      printUrl: 'https://www.etsy.com/ie/listing/870127742/farewell-bird-art-poster-print-swallow',
      merch: [
        {
          name: 'Women\'s t-shirt',
          url: 'https://www.etsy.com/ie/listing/864817848/farewell-womens-short-sleeve-t-shirt',
          price: 28
        },
        {
          name: 'Men\'s t-shirt',
          url: 'https://www.etsy.com/ie/listing/875079870/farewell-mens-short-sleeve-t-shirt-with',
          price: 28.50
        },
        {
          name: 'Notebook',
          url: 'https://www.etsy.com/ie/listing/895826951/farewell-hardcover-journal-bird-art',
          price: 14.95
        },
      ],
      discount: 0,
      discountPrint: 0,
      type: 'watercolour_painting',
      story: 'When it\'s summer, you hardly think about the time when nature starts to change colours, and some of the usual habitants of your environment leave for the winter. When I painted this swallow, originally intended it as a t-shirt design, the little birds already left, leaving behind the autumn colours of leaves. I know they\'ll return once it\'s spring time again. Until then, farewell!<br /><br />This painting was made as a t-shirt design. T-shirts and notebooks printed with this pattern are available in my <a href="https://pannadraws.etsy.com/" target="_blank" rel="noopener noreferrer">Etsy store</a>!',
    },
    queen_of_the_wasteland: {
      title: 'Queen of the Wasteland (Feathers of Tales IX)',
      year: '2020',
      description: 'Ink and watercolour on watercolour paper. 508 x 405 mm (20 x 16 in), 2020.',
      price: 200,
      original: 'AVAILABLE',
      prints: 'NOTYET',
      ship: 'FREE',
      buyUrl: 'https://www.etsy.com/ie/listing/877615323/queen-of-the-wasteland-feathers-of-tales',
      printUrl: '',
      discount: 0,
      discountPrint: 0,
      type: 'watercolour_painting',
      story: '“Wherever there was war, either among gods or men, she, the great queen, was present, either in her own shape or on her favorite disguise, that of a hoodie or carrion crow. An old poem shows her inciting a warrior: Over his head is shrieking, A lean hag, quickly hopping, Over the points of the weapons and shields, She is the grey-haired Morrigii!” (from <a href="https://livinglibraryblog.com/the-raven-and-crow-of-the-celts-part-i-myth-and-legend/" target="_blank" rel="noopener noreferrer">Celtic Myth and Legend</a> by Charles Squires)<br /><br />The Morrigan is maybe the most well-known character of Irish myths. She sometimes appears as a goddess, but sometimes as a trio of goddesses named Macha, Babd and Namain. These badass women took the form a crow or raven and went to battle, leaving a wasteland behind.<br /><br />I\'m not a seaside kid, the largest body of water I was accustomed to as a child was a big lake. Sweet water has a very different environment than the sea, the smells, animals, and the routine is different (lack of tides!). So to me that vast empty flat field left behind after the tide with the smell of fish and seaweed looks like a wasteland: treasure hunter birds are foraging upon it, and there\'s the smell of rot and salt, but it\'s still full of life, shells and driftwood.<br /><br />That\'s where I\'ve seen this hooded crow digging the weeds in search of something to eat, at low tide near Bull Island. That wasteland is like a battlefield after the battle, you don\'t know what treasures you might find among the waste! And this is how this bird became the muse for part 9 of Feathers of Tales, my art series about birds in Irish myth and folklore.',
    },
    st_colmans_duck: {
      title: 'St Colman\'s Duck (Feathers of Tales VIII)',
      year: '2020',
      description: 'Ink and watercolour on watercolour paper. 297 x 420 mm ( 11.69 x 16.53 in), 2020.',
      price: 180,
      original: 'AVAILABLE',
      prints: 'AVAILABLE',
      printPrice: 22.50,
      ship: 'FREE',
      buyUrl: 'https://www.etsy.com/ie/listing/871888495/st-colmans-duck-feathers-of-tales-viii',
      printUrl: 'https://www.etsy.com/ie/listing/889392704/st-colmans-duck-feathers-of-tales-viii',
      discount: 0,
      discountPrint: 0,
      type: 'watercolour_painting',
      story: '"But as they were so tame, persons fetching water from the pond on a dark night—so the legend goes on to say—sometimes by an unlucky chance brought one of them away in the vessel without knowing it, and threw the contents, bird and all, into a pot over a fire to be boiled. Whenever this happened no matter how the people heaped on wood, or how long the fire was kept up, the water still remained as cold as when it was taken from the pond; and in the end the little duck was found not in the least harmed, swimming about unconcernedly on the top." (the legend of St Colman\'s ducks)<br /><br />If you\'re exploring Irish stories you can\'t avoid a reference to the church. That\'s the case with the duck, the 8th part of my Feathers of Tales series, where I just couldn\'t ignore the story of St Colman\'s ducks.<br /><br />There are many legends around these ducks, all telling about how invincible they were. Some sources even add that they were actually wild ducks, not the domestic ones, so it just fits that I chose this handsome mallard for this picture.<br /><br />Being a common bird (just visit any pond in any park in Dublin) I haven\'t thought too much about ducks before, but painting the wonderful shiny details on this one I realised, as always, how beautiful these birds are. And because they are used to human presence they make a convenient photo subject as well! The reference photo was taken during lockdown and this boy posed quite happily for me. I also love the earth colours this painting required, it turned out to be a nice heartwarming artwork.<br /><br />Part 8 of the series Feathers of Tales.',
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
            <p css={style.quoteText}>From first discovering Pannas beautiful work on Facebook, I’ve become an avid follower!!
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
