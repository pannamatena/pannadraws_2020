import React from 'react';
import {graphql, useStaticQuery} from "gatsby";
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import MasonryLayout from "../components/MasonryLayout";

const FantasyArt = (props) => {
  const imgData = useStaticQuery(graphql`
    query {
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
      },
      the_sunbender: file(relativePath: { eq: "2020/the_sunbender_2020_web.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      statement: file(relativePath: { eq: "2020/statement_2020_web.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      the_dragon_and_the_kirin: file(relativePath: { eq: "2020/the_dragon_and_the_kirin_2020_web.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      morozovas_stag: file(relativePath: { eq: "2020/morozovas_stag_2020_web.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      reindeer_and_dragonflies: file(relativePath: { eq: "2020/reindeer_and_dragonflies_2020_web.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      grinning_long: file(relativePath: { eq: "2019/grinning_long_2019_web.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      the_kirin: file(relativePath: { eq: "2019/the_kirin_2019_web.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      unicorn_portrait: file(relativePath: { eq: "2019/unicorn_portrait_2019_web.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      csodaszarvas: file(relativePath: { eq: "2019/csodaszarvas_2019_web.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const imgMeta = {
    the_old_blind_worm_of_the_swamp: {
      title: 'The Old Blind Worm of the Swamp',
      year: '2020',
      description: 'Ink and watercolour on cold pressed watercolour paper. 210 x 297 mm ( 8.27 x 11.69 in), 2020.',
      price: 300,
      original: 'AVAILABLE',
      prints: 'NOTYET',
      printUrl: '',
      discount: 25,
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
      printUrl: '',
      discount: 0,
      type: 'watercolour_painting',
      story: 'Normally I don\'t procrastinate when it comes to my art life. But when I do, I procrastinate by making another painting! This artwork was created while I was working on "The Summoning".<br /><br />When I work on a larger painting that takes more time to finish I have to take a break from it time to time, and come back with fresh eyes. Usually in these intervals I like to doodle things that don\'t require reference or research, just a blank paper and me. This is how this unicorn started, but it grew so close to my heart by the end that I made her into a finished painting.',
    },
    the_summoning: {
      title: 'The Summoning',
      year: '2020',
      description: 'Ink and watercolour on cold pressed watercolour paper. 420 x 594 mm (16.53 x 23.39 in), 2020.',
      price: 650,
      original: 'AVAILABLE',
      prints: 'AVAILABLE',
      printUrl: 'https://society6.com/product/the-summoning2790424_print',
      discount: 0,
      type: 'watercolour_painting',
      story: 'Considering the preparations, this painting took me the longest ever to finish. When I had the idea of the subject, I knew I had to go to Phoenix Park to take reference photos of the deer there. But even when I started planning the painting I had no idea about the composition... it all came to life on the paper eventually, no matter how many sketches I made to plan it.<br /><br />I wanted to create a dream-like scene, where some of the details might get lost. So I added a greenish grey wash to create a foggy background. Some quirky elements were also sneaked into the picture, like the eyeball staff of the deer spirit. I really enjoyed drawing such weird things, so I might explore this path a bit more in the future.',
    },
    the_sunbender: {
      title: 'The Sunbender',
      year: '2020',
      description: 'Ink, watercolour and coloured pencil on mixed media paper. 297 x 420 mm (11.69 x 16.53 in), 2020.',
      price: 320,
      original: 'AVAILABLE',
      prints: 'AVAILABLE',
      printUrl: 'https://society6.com/product/the-sunbender_print',
      discount: 0,
      type: 'mixed_media_painting',
      story: 'I was on a trip to the UK when the idea of this image came to me. I wanted to create a dragon that shines on the sky with bright, joyful colours.<br /><br />I used a <a href="https://unsplash.com/photos/28ZbKOWiZfs" title="The Sunbender background reference photo" target="_blank" rel="noopener noreferrer" >reference photo</a> for the sky, which I wanted to look carefree with pink clouds.',
    },
    statement: {
      title: 'Statement',
      year: '2020',
      description: 'Ink and coloured pencil on paper. 420 x 297 mm ( 16.53 x 11.69 in), 2020.',
      price: 300,
      original: 'AVAILABLE',
      prints: 'SOLD',
      printUrl: '',
      discount: 0,
      type: 'mixed_media_painting',
      story: 'This drawing was made to be used as a lead image on my website. I wanted to create an image that looks a bit like as if my inner creativity burst out in some materialised form. My passion for mythical animals like the stag or the eagle, along with the serpent and a unicorn representing the realm of fantasy, which I love. And also the roses, my favourite flowers, that gives a romantic kick to the set.<br /><br />I used several reference photos for this image: <a href="https://unsplash.com/photos/7m_7H0tYFhk" title="Statement: eagle reference photo" target="_blank" rel="noopener noreferrer" >the eagle</a>, <a href="https://unsplash.com/photos/ZDg1IZr0TLg" title="Statement: horse reference photo" target="_blank" rel="noopener noreferrer" >the horse</a>, and <a href="https://images.unsplash.com/photo-1440698662311-f1c775c2ba4a" title="Statement: stag reference photo" target="_blank" rel="noopener noreferrer" >the stag</a>.',
    },
    the_dragon_and_the_kirin: {
      title: 'The Dragon and The Kirin',
      year: '2020',
      description: 'Ink and watercolour on cold pressed watercolour paper. 297 x 420 mm (16.53 x 11.69 in), 2020.',
      price: 300,
      original: 'AVAILABLE',
      prints: 'AVAILABLE',
      printUrl: 'https://society6.com/product/the-dragon-and-the-kirin_print',
      discount: 0,
      type: 'watercolour_painting',
      story: 'I played around with a Chinese style dragon concept so much I ended up painting a fighting scene. I wanted to show the dynamic movement and energy of a moment before collision.<br /><br />The story I imagined behind the scene is something like David and Goliath. The confidence of superiority is reflected on the dragon\'s face, while the little kirin is facing the beast with unseen bravery.',
    },
    morozovas_stag: {
      title: 'Morozova\'s Stag',
      year: '2020',
      description: 'Ink and watercolour on cold pressed watercolour paper. 420 x 297 mm ( 11.69 x 16.53 in), 2020.',
      price: 800,
      original: 'AVAILABLE',
      prints: 'SOLD',
      printUrl: '',
      discount: 0,
      type: 'watercolour_painting',
      story: 'Art inspired by Leigh Bardugo\'s <i>Shadow and bone</i>. Morozova\'s stag was a white magical stag, who was incredibly difficult to track down. When the heroes eventually encountered him, he turned up on a snowy field at night. The little light there was made him look like he was shining in the darkness. I liked the scene so much I wanted to paint it how I saw the scene in my head.',
    },
    reindeer_and_dragonflies: {
      title: 'Reindeer and Dragonflies',
      year: '2020',
      description: 'Coloured pencil on cartridge paper. 297 x 210 mm ( 11.69 x 8.27 in), 2020.',
      price: 150,
      original: 'AVAILABLE',
      prints: 'AVAILABLE',
      printUrl: 'https://society6.com/product/reindeer-and-dragonflies_print',
      discount: 0,
      type: 'coloured_pencil_drawing',
      story: 'Practicing coloured pencils and ink working together. I used coloured ink for this one.<br /><br />Reference photo I used for the deer is <a href="https://unsplash.com/photos/34kJZIDqKtw" title="Reindeer and Dragonflies reference photo" target="_blank" rel="noopener noreferrer" >here</a>.',
    },
    grinning_long: {
      title: 'A Grinning Long',
      year: '2019',
      description: 'Ink on cartridge paper. 210 x 297 mm ( 8.27 x 11.69 in), 2019.',
      price: 100,
      original: 'AVAILABLE',
      prints: 'AVAILABLE',
      printUrl: 'https://society6.com/product/a-grinning-long_print',
      discount: 0,
      type: 'ink_drawing',
      story: 'I have a big pile of thin cartridge paper, and I really wanted to create something on it. Since the paper is thin all kinds of wet media was out of the question, so I decided to use coloured fine liners I have from my college years.',
    },
    the_kirin: {
      title: 'The Kirin',
      year: '2019',
      description: 'Ink and watercolour on cold-pressed watercolour paper. 420 x 297 mm ( 11.69 x 16.53 in), 2019.',
      price: 300,
      original: 'AVAILABLE',
      prints: 'AVAILABLE',
      printUrl: 'https://society6.com/product/the-kirin2702415_print',
      discount: 0,
      type: 'watercolour_painting',
      story: 'When I was at highschool I had a habit of drawing a kirin for every Chinese new year celebration. I wanted to bring back this habit by painting a real fairy-tale like scene featuring this creature.<br /><br />Reference photo I used for the forest is <a href="https://unsplash.com/photos/jFCViYFYcus" title="The Kirin reference photo" target="_blank" rel="noopener noreferrer" >here</a>.',
    },
    unicorn_portrait: {
      title: 'Unicorn Portrait',
      year: '2019',
      description: 'Ink and watercolour on cold-pressed watercolour paper. 210 x 297 mm ( 8.27 x 11.69 in), 2019.',
      price: 120,
      original: 'AVAILABLE',
      prints: 'AVAILABLE',
      printUrl: 'https://society6.com/product/unicorn-portrait2702350_print',
      discount: 0,
      type: 'watercolour_painting',
      story: 'Quick painting from a period when I was reluctant to paint real-life subjects.<br /><br />Reference photo I used for the head is <a href="https://unsplash.com/photos/UlAYsmjgauc" title="Unicorn Portrait reference photo" target="_blank" rel="noopener noreferrer" >here</a>.',
    },
    csodaszarvas: {
      title: 'Csodaszarvas',
      year: '2019',
      description: 'Ink and watercolour on cold-pressed watercolour paper. 297 x 420 mm (16.53 x 11.69 in), 2019.',
      price: 350,
      original: 'AVAILABLE',
      prints: 'AVAILABLE',
      printUrl: 'https://society6.com/product/csodaszarvas-white-stag_print',
      discount: 0,
      type: 'watercolour_painting',
      story: 'I had great shot of a forest scene I took on a hiking (apparently I shot through my sunglasses as I liked the colours better that way), and to add a twist to it I incorporated a little Hungarian mythology to it.<br /><br />The white stag plays an important role in the myths of the origins of Hungarians. According to the legends our ancestors chased a white stag to hunt him down, but the stag lead them to their future wives. So that was the beginning of our people, ancestors of the two hunters.',
    },
  };

  return (
      <Layout>
        <SEO title="Fantasy fine art, dragon paintings, unicorn paintings" />
        <MasonryLayout imgData={imgData} imgMeta={imgMeta} path={props.path} />
      </Layout>
  );
};

export default FantasyArt;
