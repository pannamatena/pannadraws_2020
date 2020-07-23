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
      angelic_hunt: file(relativePath: { eq: "2020/angelic_hunt_2020_web.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      entering_the_red_forest: file(relativePath: { eq: "2020/entering_the_red_forest_2020_web.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
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
      }
    }
  `);

  const imgMeta = {
    the_fishermans_son: {
      title: 'The Fisherman\'s Son (Feathers of Tales IV)',
      year: '2020',
      description: 'Ink and watercolour on acrylic paper. 405 x 508 mm (20 x 16 in), 2020.',
      price: 200,
      original: 'AVAILABLE',
      prints: 'NOTYET',
      buyUrl: 'https://www.etsy.com/ie/listing/827929980/the-fishermans-son-feathers-of-tales-iv',
      printUrl: '',
      discount: 0,
      type: 'watercolour_painting',
      story: '"Well" said the Gruagach "you won\'t see your son to-day. At noon-to-morrow I\'ll put a whistle in my mouth and call together all the birds in my place, and they\'ll come. Among others will be twelve doves. I\'ll put my hand in my pocket, this way, and take out wheat and throw it before them on the ground. The doves will eat the wheat, and you must pick your son out of the twelve. If you find him, you\'ll have him; if you don\'t, you\'ll never have him again." (From "Myths and Folk Tales of Ireland" by Jeremiah Curtin)<br /><br />It wasn\'t easy to pick one tale where the white dove plays a major role, but I chose "The Fisherman\'s Son and The Gruagach of Tricks" because it had these typical folk tale elements in it that everyone knows: a fisherman, a boy, a "man of high degree" as a villain, and magic, and the dove.<br /><br />In the painting I wanted to create that gloomy atmosphere that folk tales have, when you know in the end everyone will live happily ever after, but the story is scary, and the fate of the heroes is to suffer and go through trials. I might not tell you a big spoiler when I say the fisherman will save his boy, but the route to that moment is full of darkness and hardships.<br /><br />This is #4 in my Feathers of Tales series, based on birds of Irish folklore. Fun fact: the model I used is a common grey pigeon you see in every city, but I "bleached" her while painting.',
    },
    one_for_sorrow: {
      title: 'One for Sorrow (Feathers of Tales III)',
      year: '2020',
      description: 'Ink and watercolour on acrylic paper. 405 x 508 mm (20 x 16 in), 2020.',
      price: 450,
      original: 'AVAILABLE',
      prints: 'NOTYET',
      buyUrl: 'https://www.etsy.com/ie/listing/834290581/one-for-sorrow-feathers-of-tales-iii',
      printUrl: '',
      discount: 0,
      type: 'watercolour_painting',
      story: '"One for sorrow,<br />Two for joy,<br />Three for a girl,<br />Four for a boy,<br />Five for silver,<br />Six for gold,<br />Seven for a secret,<br />Never to be told.<br />Eight for a wish,<br />Nine for a kiss,<br />Ten for a bird,<br />You must not miss<br />Eleven is worse<br />Twelve for a dastardly curse."<br /><br />The mischievous magpie. You can hear his unmistakable chatter everywhere, and you may wonder how many you\'ll come across this time? As this nursery rhyme goes, you might get lucky, but what if there\'s only one? Quickly, ask him how his wife is! Then you might have a chance to avoid misfortune.<br /><br />I chose the magpie for this painting because there\'s scarcely any bird with more superstition around it than this black and white fellow. Although magpies have a pretty negative reputation overall, they are quite intelligent and good looking. You can try get rid of them, but they still figure out a way to get what they want, and then their distinctive chatter sounds like laughter. A common bird in every garden, still a real icon. You might be superstitious or not, but you surely know the magpie.<br /><br />This painting is the 3rd in Feathers of Tales, my series on birds of Irish folklore. Previous artworks in the series are "Old Nog" and "The King\'s Friend", both available in my shop.',
    },
    bonds: {
      title: 'Bonds',
      year: '2020',
      description: 'Ink and coloured pencil on mixed media paper. 297 x 420 mm (11.69 x 16.53 in), 2020.',
      price: 300,
      original: 'AVAILABLE',
      prints: 'AVAILABLE',
      buyUrl: 'https://www.etsy.com/ie/listing/815319864/bonds-original-ink-and-coloured-pencil',
      printUrl: 'https://www.etsy.com/ie/listing/831518669/bonds-fantasy-poster-print-fantasy-art',
      discount: 0,
      type: 'mixed_media_painting',
      story: 'How does fatigue bond the mind and prevent it from flying free? I was exhausted both mentally and physically when this drawing was born, as I had a long cycling exercise before. I didn\'t have a concept in mind, I only had the blank sheet and just drew. When pushed to the limits, this is what remains to my mind: my favourite flower, birds and dragons, tangled together.<br /><br />The artwork was created using traditional inking with sepia acrylic ink and a coloured pencil. This was the first time I tried this transparent ink on a separate piece and I like how it ended up giving this aged look to the image.',
    },
    mother_bear: {
      title: 'Mother Bear',
      year: '2020',
      description: 'Watercolour and pen on watercolour paper. 420 x 297 mm ( 11.69 x 16.53 in), 2020.',
      price: 300,
      original: 'AVAILABLE',
      prints: 'AVAILABLE',
      buyUrl: 'https://www.etsy.com/ie/listing/813397798/mother-bear-original-watercolour',
      printUrl: 'https://www.etsy.com/ie/listing/831515347/mother-bear-fantasy-poster-print-bear',
      discount: 0,
      type: 'watercolour_painting',
      story: 'All the crows are leading the way to one spot in the forest. They are the messengers, eyes and ears of Mother Bear, dwelling deep in the woods. Mother Bear doesn\'t leave the forest, but she knows everything that is going on around the world... so she doesn\'t get surprised when you reach the clearing filled with mossy rocks to see her. You just had to follow the crows and here you are. But Mother Bear just smiles, she already knows you.<br /><br />The idea of Mother Bear came to me when I was browsing through my older reference photos. I had a shot of a bear looking so friendly, taken at the Lisbon zoo when I was on a holiday there. As I usually focus more on birds or dragons I just didn\'t have any good ideas for the picture, but one night I just sketched the bear as practice, when this whole scene just occurred to me, as if I\'d known this since forever. I just had to discover her! And so it felt like Mother Bear already knew about me, and our encounter was a surprise only to me.',
    },
    angelic_hunt: {
      title: 'Angelic Hunt',
      year: '2020',
      description: 'Coloured pencils and pen on paper. 420 x 594 mm (16.53 x 23.39 in), 2020.',
      price: 600,
      original: 'AVAILABLE',
      prints: 'NOTYET',
      buyUrl: 'https://www.etsy.com/ie/listing/825365941/angelic-hunt-original-coloured-pencil',
      printUrl: '',
      discount: 0,
      type: 'coloured_pencil_drawing',
      story: 'Little egrets are fascinating. An angelic appearance with the snow white plumage that gently moves in the wind like some kind of jewellery on the bird. Little egrets are never in a hurry, they move with the elegance of a lady. But when you blink, in that second they catch and kill. They are brilliant predators in the skin of an angel.<br /><br />I met the egret serving as my reference for this drawing during one of my walks. She was busy with her catch so I could capture her in a pose that shows the wild in this beautiful bird. The morning breeze on the seashore was lifting the lighter feathers on her body as she turned towards me, holding her fresh kill. That fish reminded me the egret might look like an angel, but she\'s a deadly one.<br /><br />This drawing was created to enter the art competition "Drawn to Nature" hosted by the <a href="https://ukcps.org.uk" title="UK Coloured Pencil Society" target="_blank" rel="noopener noreferrer" >UK Coloured Pencil Society</a>. The objective of the contest was to capture the wildness of nature, which I found in this hunting egret.',
    },
    entering_the_red_forest: {
      title: 'Entering the Red Forest',
      year: '2020',
      description: 'Ink and watercolour on watercolour paper. 420 x 297 mm ( 11.69 x 16.53 in), 2020.',
      price: 300,
      original: 'AVAILABLE',
      prints: 'AVAILABLE',
      buyUrl: 'https://www.etsy.com/ie/listing/807843812/entering-the-red-forest-original',
      printUrl: 'https://www.etsy.com/ie/listing/817616252/entering-the-red-forest-fantasy-poster',
      discount: 0,
      type: 'watercolour_painting',
      story: 'Not all ancient forests have to be dark and damp... Here\'s the colourful Red Forest, but when you enter you\'ll face the same mystique as in the dark ones. And from the mist a long white body emerges, with a mane and antlers of crimson, holding a golden orb that casts a blurry yellow glow over its keeper. Here\'s the guardian spirit of the woods, and you may wonder, should you run?<br /><br />I never really felt as comfortable in forests as in big open plains. The trees are just towering over you, and it\'s silent and noisy at the same time. It\'s motionless and full of little movements. It\'s peaceful and threatening. This is the kind of duality I wanted to show in this painting. It\'s up to the viewer to decide if they want to run, or stay. Because the forest is both welcoming and hostile.<br /><br />Reference photo I used for the forest is <a href="https://unsplash.com/photos/CoD2Q92UaEg" title="Red Forest reference photo" target="_blank" rel="noopener noreferrer" >here</a>.',
    },
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
