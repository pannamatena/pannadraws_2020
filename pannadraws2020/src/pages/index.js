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
import NewsLetter from '../components/Newsletter';

const App = (props) => {
  const imgData = useStaticQuery(graphql`
    query {
      the_kings_friend: file(relativePath: { eq: "2020/the_kings_friend_2020_web.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
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
      }
    }
  `);

  const imgMeta = {
    the_kings_friend: {
      title: 'The King\'s Friend (Feathers of Tales II)',
      year: '2020',
      description: 'Ink and watercolour on watercolour paper. 420 x 594 mm (16.53 x 23.39 in), 2020.',
      price: 600,
      original: 'AVAILABLE',
      prints: 'AVAILABLE',
      buyUrl: 'https://www.etsy.com/ie/listing/803980602/the-kings-friend-feathers-of-tales-ii',
      printUrl: 'https://www.etsy.com/ie/listing/804085940/the-kings-friend-feathers-of-tales-ii',
      discount: 0,
      type: 'watercolour_painting',
      story: '"You see, the goose used to swim across the lake, and go diving for trout, and catch fish on a Friday for the king, and flew every other day round about the lake, diverting the poor king." from the story <i>King O\'Toole and His Goose</i>.<br /><br />How much time I spent hunting down these timid birds! I was a bit troubled what breed of goose I should choose for the second artwork in my Feathers of Tales project (an art series featuring birds of Irish folklore). I\'d naturally go with one that is resident in Ireland, a true Irish breed. But guess what, most geese are here only for the winter, and they migrate to other places to breed during the summer. So do they count as Irish? And there came the lockdown in the spring, so I had to stick to my closest goose neighbours: the light bellied Brent geese.<br /><br />By the time I finished this painting the last of the Brents left for the summer. But this one will remain here to make me long for the freedom they now have. Geese represent a special kind of freedom and adventure for me thanks to my childhood memories of Nils Holgersson. I wonder if we get back to normal by that time this goose comes back for the winter. Until then here\'s the painting!',
    },
    old_nog: {
      title: 'Old Nog (Feathers of Tales I)',
      year: '2020',
      description: 'Ink and watercolour on watercolour paper. 420 x 594 mm (16.53 x 23.39 in), 2020.',
      price: 600,
      original: 'AVAILABLE',
      prints: 'AVAILABLE',
      buyUrl: 'https://www.etsy.com/ie/listing/795163346/old-nog-feathers-of-tales-i-original',
      printUrl: 'https://www.etsy.com/ie/listing/803200144/old-nog-feathers-of-tales-i-matte-poster',
      discount: 0,
      type: 'watercolour_painting',
      story: '"And so it was that Old Nog, the wisest heron of the Two Rivers, heard the noise of bubbles breaking on the water as he alighted by the pool side" <i>(from Tarka the Otter by Henry Williamson)</i>.<br /><br />During the lockdown I was restricted to the 2km area of my home, so every Saturday early morning I went for a walk to the nearby seashore at Clontarf to photograph the Brent geese that were still lingering around. I was just about to leave with my legs sore from all the squatting with the camera, when something stirred the Brents, who scattered immediately. And then a big shadow descended: the grey heron arrived. I quickly ducked behind the bushes and grabbed my camera again, just in time to take the photo that served as a reference for this painting.<br /><br />This is the opening artwork for my art series "Feathers of Tales". I chose the heron as the kick-off for this major work because how could you be more majestic than this boss?! With his every slow and measured movement he demands the respect. You see him and you helplessly stop and stare. Elegant and deadly, and a real icon of the Irish waterscapes.',
    },
    the_old_blind_worm_of_the_swamp: {
      title: 'The Old Blind Worm of the Swamp',
      year: '2020',
      description: 'Ink and watercolour on cold pressed watercolour paper. 210 x 297 mm ( 8.27 x 11.69 in), 2020.',
      price: 225,
      original: 'AVAILABLE',
      prints: 'NOTYET',
      buyUrl: 'https://www.etsy.com/ie/listing/799874088/the-old-blind-worm-of-the-swamp-original',
      printUrl: '',
      discount: 0,
      type: 'watercolour_painting',
      story: 'Sometimes I don\'t feel like using reference images. This painting was born on such an occasion, I just started drawing straight on the blank paper, and the result was this little illustration.<br /><br />I imagined a scene as if I was illustrating a fairy tale, where this ancient beast suddenly emerges from the dark water, looking like she has been sleeping down there for hundreds of years. Despite she scared the rider, she meant no harm, on the contrary, she was excited to have a visitor at last!',
    },
    the_climbing_rose_gate: {
      title: 'The Climbing Rose Gate',
      year: '2020',
      description: 'Ink and watercolour on cold pressed watercolour paper. 210 x 297 mm ( 8.27 x 11.69 in), 2020.',
      price: 220,
      original: 'AVAILABLE',
      prints: 'NOTYET',
      buyUrl: 'https://www.etsy.com/ie/listing/813763953/the-climbing-rose-gate-original',
      printUrl: '',
      discount: 0,
      type: 'watercolour_painting',
      story: 'When I work on a larger painting that takes more time to finish I have to take a break from it time to time, and come back with fresh eyes. Usually in these intervals I like to doodle things that don\'t require reference or research, just a blank paper and me. This is how this unicorn started, but it grew so close to my heart by the end that I made her into a finished painting.<br /><br />Maybe that need for a break gave this painting its romantic atmosphere. My favourite flower is the rose, and I wanted to create something really pleasant for me to look at. Like a true dream world. There is a little girl still in me, who likes rainbows and unicorns, and sometimes all she needs is a good old-fashioned fairy tale. She definitely got that when I was painting this artwork.',
    },
    the_summoning: {
      title: 'The Summoning',
      year: '2020',
      description: 'Ink and watercolour on cold pressed watercolour paper. 420 x 594 mm (16.53 x 23.39 in), 2020.',
      price: 650,
      original: 'AVAILABLE',
      prints: 'AVAILABLE',
      buyUrl: 'https://www.etsy.com/ie/listing/799936804/the-summoning-original-watercolour',
      printUrl: 'https://www.etsy.com/ie/listing/804184536/the-summoning-matte-paper-poster-fantasy',
      discount: 0,
      type: 'watercolour_painting',
      story: 'Considering the preparations, this painting took me the longest ever to finish. When I had the idea of the subject, I knew I had to go to Phoenix Park to take reference photos of the deer there. But even when I started planning the painting I had no idea about the composition... it all came to life on the paper eventually, no matter how many sketches I made to plan it.<br /><br />I wanted to create a dream-like scene, where some of the details might get lost. So I added a greenish grey wash to create a foggy background. Some quirky elements were also sneaked into the picture, like the eyeball staff of the deer spirit. I really enjoyed drawing such weird things, so I might explore this path a bit more in the future.<br /><br />This is the first painting in a long while where I really ignored outside opinions. To most people the subject is not common and too weird. But this time I let my creativity roam free and just drew and paint whatever occurred to me, not being concerned with feedback. Therefore I would recommend it only to those people who are open to curiosity, who like to meet things they don\'t understand. If you want your guests ask "oh, what is this artwork about?". And you\'re absolutely free to answer whatever you think it is about!',
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
    section: css`
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
    newsContainer: css`
    
    `,
  };

  return (
      <Layout>
        <SEO title="Fantasy and animal fine art by Panna Zsamba" />
        <Banner />
        <div css={style.section}>
          <NewsLetter/>
        </div>
        <div css={style.section}>
          <ArtLinksContainer />
        </div>
        {/*<div css={style.newsContainer}>
          <div css={style.dividerTitle}><h3>News</h3></div>
        </div>*/}
        <div css={style.dividerTitle}>{logo()}<h3>Latest Art</h3></div>
        <MasonryLayout imgData={imgData} imgMeta={imgMeta} path={props.path} />
      </Layout>
  );
};

export default App;
