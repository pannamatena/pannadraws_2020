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
      the_fishermans_son: file(relativePath: { eq: "2020/the_fishermans_son_2020_web.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      one_for_sorrow: file(relativePath: { eq: "2020/one_for_sorrow_2020_web.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      bonds: file(relativePath: { eq: "2020/bonds_2020_web.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      mother_bear: file(relativePath: { eq: "2020/mother_bear_2020_web.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
    }
  `);

  const imgMeta = {
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
      discountPrint: 10,
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
      discountPrint: 10,
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
      discountPrint: 10,
      type: 'watercolour_painting',
      story: 'They say the eyes are the windows to the soul. Look at the eyes of this creature, he couldn\'t even deny his predatory nature! The sparrowhawk, a small bird of prey, but fast, agile and deadly. This one here is a male, which is smaller than the female and has the orange markings. Their skills sparkle most in woodlands, where they cross between the smallest gaps with great speed, and they can chase down prey on foot (?!). Now I\'d love to see THAT!<br /><br />I\'m always so fond of the variety of birds visiting my garden to feed. And it actually never occurred to me that by attracting so many breeds there\'s a consequencial visitor as well... I wasn\'t even aware there are hawks nearby.<br /><br />So I was doing my morning workout and between sets I stared out the kitchen window. Suddenly all the birds took off, and something spiralled down like an arrow. My wandering brain didn\'t even register what was happening, I remember thinking "oh, what kind of bird is this, how interesting" before the shock settled in. "*@$&! He got a sparrow!! Omg! It\'s a hawk!" He sat for 3 seconds in the grass with his prey, then took off. I stood there in complete shock for another minute, thinking I wouldn\'t have stood a chance. By the time I realised what was happening, that sparrow was dead. That\'s how I met my sparrowhawk.',
    },
    the_fishermans_son: {
      title: 'The Fisherman\'s Son (Feathers of Tales IV)',
      year: '2020',
      description: 'Ink and watercolour on acrylic paper. 405 x 508 mm (20 x 16 in), 2020.',
      price: 200,
      original: 'AVAILABLE',
      prints: 'AVAILABLE',
      buyUrl: 'https://www.etsy.com/ie/listing/827929980/the-fishermans-son-feathers-of-tales-iv',
      printUrl: 'https://www.etsy.com/ie/listing/841722676/the-fishermans-son-feathers-of-tales-iv',
      discount: 0,
      discountPrint: 10,
      type: 'watercolour_painting',
      story: '"Well" said the Gruagach "you won\'t see your son to-day. At noon-to-morrow I\'ll put a whistle in my mouth and call together all the birds in my place, and they\'ll come. Among others will be twelve doves. I\'ll put my hand in my pocket, this way, and take out wheat and throw it before them on the ground. The doves will eat the wheat, and you must pick your son out of the twelve. If you find him, you\'ll have him; if you don\'t, you\'ll never have him again." (From "Myths and Folk Tales of Ireland" by Jeremiah Curtin)<br /><br />It wasn\'t easy to pick one tale where the white dove plays a major role, but I chose "The Fisherman\'s Son and The Gruagach of Tricks" because it had these typical folk tale elements in it that everyone knows: a fisherman, a boy, a "man of high degree" as a villain, and magic, and the dove.<br /><br />In the painting I wanted to create that gloomy atmosphere that folk tales have, when you know in the end everyone will live happily ever after, but the story is scary, and the fate of the heroes is to suffer and go through trials. I might not tell you a big spoiler when I say the fisherman will save his boy, but the route to that moment is full of darkness and hardships.<br /><br />This is #4 in my Feathers of Tales series, based on birds of Irish folklore. Fun fact: the model I used is a common grey pigeon you see in every city, but I "bleached" her while painting.',
    },
    one_for_sorrow: {
      title: 'One for Sorrow (Feathers of Tales III)',
      year: '2020',
      description: 'Ink and watercolour on acrylic paper. 405 x 508 mm (20 x 16 in), 2020.',
      price: 450,
      original: 'AVAILABLE',
      prints: 'AVAILABLE',
      buyUrl: 'https://www.etsy.com/ie/listing/834290581/one-for-sorrow-feathers-of-tales-iii',
      printUrl: 'https://www.etsy.com/ie/listing/841718518/one-for-sorrow-feathers-of-tales-iii',
      discount: 0,
      discountPrint: 10,
      type: 'watercolour_painting',
      story: '"One for sorrow,<br />Two for joy,<br />Three for a girl,<br />Four for a boy,<br />Five for silver,<br />Six for gold,<br />Seven for a secret,<br />Never to be told.<br />Eight for a wish,<br />Nine for a kiss,<br />Ten for a bird,<br />You must not miss<br />Eleven is worse<br />Twelve for a dastardly curse."<br /><br />The mischievous magpie. You can hear his unmistakable chatter everywhere, and you may wonder how many you\'ll come across this time? As this nursery rhyme goes, you might get lucky, but what if there\'s only one? Quickly, ask him how his wife is! Then you might have a chance to avoid misfortune.<br /><br />I chose the magpie for this painting because there\'s scarcely any bird with more superstition around it than this black and white fellow. Although magpies have a pretty negative reputation overall, they are quite intelligent and good looking. You can try get rid of them, but they still figure out a way to get what they want, and then their distinctive chatter sounds like laughter. A common bird in every garden, still a real icon. You might be superstitious or not, but you surely know the magpie.<br /><br />This painting is the 3rd in Feathers of Tales, my series on birds of Irish folklore. Previous artworks in the series are "Old Nog" and "The King\'s Friend", both available in my shop.',
    },
    bonds: {
      title: 'Bonds',
      year: '2020',
      description: 'Ink and coloured pencil on mixed media paper. 297 x 420 mm (11.69 x 16.53 in), 2020.',
      price: 115,
      original: 'AVAILABLE',
      prints: 'AVAILABLE',
      buyUrl: 'https://www.etsy.com/ie/listing/815319864/bonds-original-ink-and-coloured-pencil',
      printUrl: 'https://www.etsy.com/ie/listing/831518669/bonds-fantasy-poster-print-fantasy-art',
      discount: 0,
      discountPrint: 10,
      type: 'mixed_media_painting',
      story: 'How does fatigue bond the mind and prevent it from flying free? I was exhausted both mentally and physically when this drawing was born, as I had a long cycling exercise before. I didn\'t have a concept in mind, I only had the blank sheet and just drew. When pushed to the limits, this is what remains to my mind: my favourite flower, birds and dragons, tangled together.<br /><br />The artwork was created using traditional inking with sepia acrylic ink and a coloured pencil. This was the first time I tried this transparent ink on a separate piece and I like how it ended up giving this aged look to the image.',
    },
    mother_bear: {
      title: 'Mother Bear',
      year: '2020',
      description: 'Watercolour and pen on watercolour paper. 420 x 297 mm ( 11.69 x 16.53 in), 2020.',
      price: 120,
      original: 'AVAILABLE',
      prints: 'AVAILABLE',
      buyUrl: 'https://www.etsy.com/ie/listing/813397798/mother-bear-original-watercolour',
      printUrl: 'https://www.etsy.com/ie/listing/831515347/mother-bear-fantasy-poster-print-bear',
      discount: 0,
      discountPrint: 10,
      type: 'watercolour_painting',
      story: 'All the crows are leading the way to one spot in the forest. They are the messengers, eyes and ears of Mother Bear, dwelling deep in the woods. Mother Bear doesn\'t leave the forest, but she knows everything that is going on around the world... so she doesn\'t get surprised when you reach the clearing filled with mossy rocks to see her. You just had to follow the crows and here you are. But Mother Bear just smiles, she already knows you.<br /><br />The idea of Mother Bear came to me when I was browsing through my older reference photos. I had a shot of a bear looking so friendly, taken at the Lisbon zoo when I was on a holiday there. As I usually focus more on birds or dragons I just didn\'t have any good ideas for the picture, but one night I just sketched the bear as practice, when this whole scene just occurred to me, as if I\'d known this since forever. I just had to discover her! And so it felt like Mother Bear already knew about me, and our encounter was a surprise only to me.',
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
