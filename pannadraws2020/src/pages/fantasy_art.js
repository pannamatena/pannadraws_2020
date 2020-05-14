import React from 'react';
import {graphql, useStaticQuery} from "gatsby";
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import MasonryLayout from "../components/MasonryLayout";

const FantasyArt = () => {
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
      },
      ellen_trechend: file(relativePath: { eq: "2019/ellen_trechend_2019_web.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      rising_wisdom: file(relativePath: { eq: "2019/rising_wisdom_2019_web.png" }) {
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
      story: 'Sometimes I don\'t feel like using reference images. This painting was born on such an occasion, I just started drawing straight on the blank paper, and the result is this little illustration.',
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
      story: 'Normally I don\'t procrastinate when it comes to my art life. But when I do, I procrastinate by making another painting :). This piece was created while I was working on "The Summoning", a piece that took quite long to finish.',
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
      story: 'Considering the preparations, this painting took me the longest ever to finish. When I had the idea of the subject, I knew I had to go to Phoenix Park to take reference photos of the deer there. But even when I started planning the painting I had no idea about the composition... it all came to life on the paper eventually, no matter how many sketches I made to plan it.',
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
      story: 'I was travelling when the idea of this image came to me. I wanted to create a dragon that shines on the sky with bright, joyful colours.',
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
      story: 'This drawing was made to be used as a lead image on my website.',
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
      story: 'I played around with chinese style dragon drawings so much I ended up painting a fighting scene. I wanted to show the dynamic movement and energy of a moment before collision.',
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
      story: 'Art inspired by Leigh Bardugo\'s "Shadow and bone".',
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
      story: 'Practicing coloured pencils and ink working together. I used coloured ink for this one.',
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
      story: 'When I was at highschool I had a habit to draw a kirin for every Chinese new year celebration. I wanted to bring back this habit by painting a real fairy-tale like scene featuring that creature.',
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
      story: 'Quick painting from a period when I was reluctant to paint real-life subjects.',
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
      story: 'I had great scenery of a forest that I took on a hiking (apparently I shot through my sunglasses as I liked the colours better that way), and to add a twist to it I incorporated a little Hungarian mythology to it. The white stag plays an important role in the myths of the origins of Hungarians.',
    },
    ellen_trechend: {
      title: 'Ellén Trechend',
      year: '2019',
      description: 'Ink and watercolour on cold-pressed watercolour paper. 297 x 420 mm (16.53 x 11.69 in), 2019.',
      price: 650,
      original: 'SOLD',
      prints: 'SOLD',
      printUrl: '',
      discount: 0,
      story: '',
    },
    rising_wisdom: {
      title: 'Rising Wisdom 2019',
      year: '2019',
      description: 'Watercolour on cold-pressed watercolour paper. 210 x 297 mm ( 8.27 x 11.69 in), 2019.',
      price: 400,
      original: 'SOLD',
      prints: 'SOLD',
      printUrl: '',
      discount: 0,
      story: '',
    },
  };

  return (
      <Layout>
        <SEO title="Art of Panna Zsamba in 2019" />
        <script>
          fbq('track', 'Art_2019');
        </script>
        <MasonryLayout imgData={imgData} imgMeta={imgMeta} />
      </Layout>
  );
};

export default FantasyArt;
