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
      },
      may: file(relativePath: { eq: "2020/may_2020_web.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      furcula: file(relativePath: { eq: "2020/furcula_2020_web.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      the_ousel_of_cilgwri: file(relativePath: { eq: "2020/the_ousel_of_cilgwri_2020_web.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      almost_invincible: file(relativePath: { eq: "2020/almost_invincible_2020_web.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      the_robin: file(relativePath: { eq: "2020/the_robin_2020_web.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      sparrowhawk: file(relativePath: { eq: "2020/sparrowhawk_2020_web.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
    }
  `);

  const imgMeta = {
    queen_of_the_wasteland: {
      title: 'Queen of the Wasteland (Feathers of Tales IX)',
      year: '2020',
      description: 'Ink and watercolour on watercolour paper. 508 x 405 mm (20 x 16 in), 2020.',
      price: 200,
      original: 'AVAILABLE',
      prints: 'NOTYET',
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
      original: 'SOLD',
      prints: 'NOTYET',
      buyUrl: '',
      printUrl: '',
      discount: 0,
      discountPrint: 0,
      type: 'watercolour_painting',
      story: '"But as they were so tame, persons fetching water from the pond on a dark night—so the legend goes on to say—sometimes by an unlucky chance brought one of them away in the vessel without knowing it, and threw the contents, bird and all, into a pot over a fire to be boiled. Whenever this happened no matter how the people heaped on wood, or how long the fire was kept up, the water still remained as cold as when it was taken from the pond; and in the end the little duck was found not in the least harmed, swimming about unconcernedly on the top." (the legend of St Colman\'s ducks)<br /><br />If you\'re exploring Irish stories you can\'t avoid a reference to the church. That\'s the case with the duck, the 8th part of my Feathers of Tales series, where I just couldn\'t ignore the story of St Colman\'s ducks.<br /><br />There are many legends around these ducks, all telling about how invincible they were. Some sources even add that they were actually wild ducks, not the domestic ones, so it just fits that I chose this handsome mallard for this picture.<br /><br />Being a common bird (just visit any pond in any park in Dublin) I haven\'t thought too much about ducks before, but painting the wonderful shiny details on this one I realised, as always, how beautiful these birds are. And because they are used to human presence they make a convenient photo subject as well! The reference photo was taken during lockdown and this boy posed quite happily for me. I also love the earth colours this painting required, it turned out to be a nice heartwarming artwork.<br /><br />Part 8 of the series Feathers of Tales.',
    },
    may: {
      title: 'May',
      year: '2020',
      description: 'Ink and watercolour on watercolour paper. 210 x 297 mm (8.27 x 11.69 in), 2020.',
      price: 75,
      original: 'AVAILABLE',
      prints: 'SOLD',
      buyUrl: 'https://www.etsy.com/ie/listing/868678085/may-original-watercolour-painting-robin',
      printUrl: '',
      discount: 0,
      discountPrint: 0,
      type: 'watercolour_painting',
      story: 'This robin painting is free to download for my newsletter subscribers! It\'s an A4 size high quality PDF that you can print for yourself. You can sign up on the <a title="PannaDraws home" href="/">home page</a>!<br /><br />I spotted this little fellow back in May 2020, in the middle of the worst of the lockdown in our local park, when I couldn\'t really go any further for bird photography. He was totally ignorant of course, singing his heart out as it was the breeding season. Now that it\'s September I thought it\'s a nice memory to think back of the blooming trees. For that matter it\'s nice to think of spring at any time of the year, so I chose this image as a reference for the new printable gift for newsletter subscribers.',
    },
    furcula: {
      title: 'Furcula the First',
      year: '2020',
      description: 'Ink and watercolour on watercolour paper. 405 x 508 mm (16 x 20 in), 2020.',
      price: 200,
      original: 'SOLD',
      prints: 'NOTYET',
      buyUrl: 'https://www.etsy.com/ie/listing/864105935/furcula-the-first-feathers-of-tales-vii',
      printUrl: '',
      discount: 0,
      discountPrint: 0,
      type: 'watercolour_painting',
      story: '"If you get the wishbone on a chicken, catch one end of it and tell somebody else to catch the other end and whoever gets the right side after pulling you may wish for whatever you like." (<a href="http://irisharchaeology.ie/2016/11/animal-sacrifice-and-blood-letting-saint-martins-feast-in-ireland/" target="_blank" rel="noopener noreferrer">Irish superstition</a>)<br/><br/>Chickens might be the most important birds in our lives, yet when it comes to "bird art" I doubt a chicken is what everyone thinks about. Probably most nations in the world have some sort of connection with this animal and hens and roosters are represented in many beliefs and tales. Irish folklore is not an exception, there are many superstitions around chickens, many including the sacrifice of the bird. I just picked one of the less bloody ones as the opening quote, but here\'s another one:<br/><br/>"Some kind of fowl is killed such as chicken or goose and then the blood is sprinkled in the four corners of the kitchen. In some houses there is a cross formed with the blood, or three drops. It is believed if this is done no member of the family will meet with a violent death during the year."<br/><br/>I wanted to show this bird being more than just a wishbone or a sacrifice. If you have different eyes for it, a rooster is a beautiful ornate bird, the king of the yard. He should be portrayed as a king!<br/><br/>This painting is the 7th in my Feathers of Tales series, which features birds of Irish myths and folklore.',
    },
    the_ousel_of_cilgwri: {
      title: 'The Ousel of Cilgwri',
      year: '2020',
      description: 'Ink and watercolour on cold-pressed watercolour paper. 297 x 420 mm ( 11.69 x 16.53 in), 2020.',
      price: 115,
      original: 'AVAILABLE',
      prints: 'NOTYET',
      buyUrl: 'https://www.etsy.com/ie/listing/845872130/the-ousel-of-cilgwri-feathers-of-tales',
      printUrl: '',
      discount: 0,
      discountPrint: 0,
      type: 'watercolour_painting',
      story: '"And the Ousel answered, \'When I first came here, there was a smith\'s anvil in this place, and I was then a young bird; and from that time no work has been done upon it, save the pecking of my beak every evening, and now there is not so much as the size of a nut remaining thereof; yet the vengeance of Heaven be upon me, if during all that time I have ever heard of the man for whom you inquire. Nevertheless I will do that which is right, and that which it is fitting that I should do for an embassy from Arthur. There is a race of animals who were formed before me, and I will be your guide to them.\'" (from the myth <i>Culhwch and Olwen</i>)<br /><br />The blackbird is believed to be one of the oldest animals in the world, along with the stag and the trout, and he\'s the advisor of many great mythical heroes. I see the blackbird as one of the kindest birds I know, there\'s a pair nesting in my garden every year. Their second batch of fledglings left the nest early August, but that doesn\'t mean they don\'t need their parents attention after. That\'s why I could get the reference photos of them as both parents were frequent visitors around the feeders at that time.<br /><br />I used two photos in this painting: the posture was provided by the mum, while the texture of the plumage is coming from a picture of the proud dad. This is the 6th piece in my Feathers of Tales series depicting birds in Irish myth and folklore.',
    },
    almost_invincible: {
      title: 'Almost Invincible',
      year: '2020',
      description: 'Ink, graphite and watercolour pencil on mixed media paper. 297 x 420 mm ( 11.69 x 16.53 in), 2020.',
      price: 90,
      original: 'AVAILABLE',
      prints: 'AVAILABLE',
      buyUrl: 'https://www.etsy.com/ie/listing/855625433/almost-invincible-original-mixed-media',
      printUrl: 'https://www.etsy.com/ie/listing/855629301/almost-invincible-fantasy-poster-print',
      discount: 0,
      discountPrint: 0,
      type: 'watercolour_painting',
      story: 'We need a dragon. That western-type, fierce, all the years and battles visible on his scales. No, don\'t illustrate "The Hobbit" (you\'re not a fan of the story anyway, the dragon DIES :\'( ), let\'s just place this guy in a composition, like a coat of arms. All right, not an illustration, but at least can I take that monstrous spear as an inspiration? Looks ok in a coat of arms, doesn\'t it? Let\'s make it two spears then. Fire and smoke. Let\'s add some of the latter, that always makes a nice background. This is still too relaxed. When you\'re this fierce and a badass, you can\'t just hang around in the air, can you? You can hang around in a swarm of arrows! Not that you care, you\'re invincible. Almost.<br /><br />That sums up my line of thoughts while creating my contribution to this year\'s #smaugust on Instagram. Despite my doubts I finished it eventually. And my thoughts in the end? Well it\'s better than I thought it would be, and I figured I actually like this monochromatic approach (also much quicker to work with only one colour on your palette).',
    },
    the_robin: {
      title: 'The Robin',
      year: '2020',
      description: 'Ink and watercolour on cold-pressed watercolour paper. 297 x 420 mm ( 11.69 x 16.53 in), 2020.',
      price: 120,
      original: 'SOLD',
      prints: 'AVAILABLE',
      buyUrl: '',
      printUrl: 'https://www.etsy.com/ie/listing/839003450/the-robin-feathers-of-tales-v-matte',
      discount: 0,
      discountPrint: 0,
      type: 'watercolour_painting',
      story: '"Well how the boy tried to stay awake! He hadn\'t really slept while lying on the frozen ground and he was still exhausted from the walk. His eyes got lower. His head got lower.  The fire got lower. So low in fact that a starving wolf began to inch near the sleeping pair. However, there was one who was awake. There was one who saw everything from the middle of an old bush; a little bird who was as gray as the brambly wood." (<a href="http://irishhedgerows.weebly.com/folklore.html" target="_blank" rel="noopener noreferrer">Irish folk tale</a>)<br /><br />Although he\'s a common sight, it\'s always a pleasure to meet the little robin. When we moved into our new house he was the first to approach while we were digging up the whole garden. While other birds scatter in a blink of an eye, he stays asking for some snacks. And when he sings, all the other birds seem silent as if they were listening to the melancholic tunes. The robin is truly a kind little companion in my backyard. That\'s why I had to include him in Feathers of Tales.<br /><br />And in case you were wondering how the story ends, how this friendly bird got his distinctive red chest, here you go:<br /><br />"The bird hopped down and began fanning the flickering embers until the flames began to lick out hungrily; nor did the little bird stop, despite the pain on his breast, until the flames were dancing with strength. The heat from the flames changed the colour of his breast feathers and from that day onwards the Robin has proudly worn a red breast." (same folk tale)<br /><br />This is #5 in my Feathers of Tales series, based on birds of Irish folklore. Other pieces are also available in the shop, including the heron, goose, magpie and dove!',
    },
    sparrowhawk: {
      title: 'Sparrowhawk',
      year: '2020',
      description: 'Ink and watercolour on cold-pressed watercolour paper. 297 x 420 mm ( 11.69 x 16.53 in), 2020.',
      price: 180,
      original: 'SOLD',
      prints: 'AVAILABLE',
      buyUrl: '',
      printUrl: 'https://www.etsy.com/ie/listing/841725878/sparrowhawk-bird-art-poster-print-birds',
      discount: 0,
      discountPrint: 0,
      type: 'watercolour_painting',
      story: 'They say the eyes are the windows to the soul. Look at the eyes of this creature, he couldn\'t even deny his predatory nature! The sparrowhawk, a small bird of prey, but fast, agile and deadly. This one here is a male, which is smaller than the female and has the orange markings. Their skills sparkle most in woodlands, where they cross between the smallest gaps with great speed, and they can chase down prey on foot (?!). Now I\'d love to see THAT!<br /><br />I\'m always so fond of the variety of birds visiting my garden to feed. And it actually never occurred to me that by attracting so many breeds there\'s a consequencial visitor as well... I wasn\'t even aware there are hawks nearby.<br /><br />So I was doing my morning workout and between sets I stared out the kitchen window. Suddenly all the birds took off, and something spiralled down like an arrow. My wandering brain didn\'t even register what was happening, I remember thinking "oh, what kind of bird is this, how interesting" before the shock settled in. "*@$&! He got a sparrow!! Omg! It\'s a hawk!" He sat for 3 seconds in the grass with his prey, then took off. I stood there in complete shock for another minute, thinking I wouldn\'t have stood a chance. By the time I realised what was happening, that sparrow was dead. That\'s how I met my sparrowhawk.',
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
