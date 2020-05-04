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
    },
    the_sunbender: {
      title: 'The Sunbender',
      year: '2020',
      description: 'Ink, watercolour and coloured pencil on mixed media paper. 297 x 420 mm (11.69 x 16.53 in), 2020.',
      price: 650,
      original: 'AVAILABLE',
      prints: 'AVAILABLE',
      printUrl: 'https://society6.com/product/the-sunbender_print',
      discount: 0,
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
    },
    the_kirin: {
      title: 'The Kirin',
      year: '2019',
      description: 'Ink and watercolour on cold-pressed watercolour paper. 420 x 297 mm ( 11.69 x 16.53 in), 2019.',
      price: 100,
      original: 'AVAILABLE',
      prints: 'AVAILABLE',
      printUrl: 'https://society6.com/product/the-kirin2702415_print',
      discount: 0,
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
