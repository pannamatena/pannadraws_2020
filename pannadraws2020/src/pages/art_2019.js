import React from 'react';
import {graphql, useStaticQuery} from "gatsby";
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import MasonryLayout from "../components/MasonryLayout";

const App = () => {
  const imgData = useStaticQuery(graphql`
    query {
      blondie: file(relativePath: { eq: "2019/blondie_2019_web.png" }) {
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
      puffin: file(relativePath: { eq: "2019/puffin_2019_web.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      red_pompoms: file(relativePath: { eq: "2019/red_pompoms_2019_web.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      staring_tiger: file(relativePath: { eq: "2019/staring_tiger_2019_web.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      the_cat: file(relativePath: { eq: "2019/the_cat_2019_web.png" }) {
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
      turkey_portrait: file(relativePath: { eq: "2019/turkey_portrait_2019_web.png" }) {
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
      wet_raven: file(relativePath: { eq: "2019/wet_raven_2019_web.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      bunclody: file(relativePath: { eq: "2019/bunclody_2019_web.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      champion: file(relativePath: { eq: "2019/champion_2019_web.png" }) {
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
      horse_portrait: file(relativePath: { eq: "2019/horse_portrait_2018_web.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      ross_castle_view: file(relativePath: { eq: "2019/ross_castle_view_2019_web.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      phoenix_park: file(relativePath: { eq: "2019/phoenix_park_2019_web.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      dog_portrait: file(relativePath: { eq: "2019/dog_portrait_2018_web.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      bunnies: file(relativePath: { eq: "2019/bunnies_2019_web.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      rooster_portrait: file(relativePath: { eq: "2019/rooster_portrait_2019_web.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      wandering_rooster: file(relativePath: { eq: "2019/wandering_rooster_2019_web.png" }) {
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
      },
      sails: file(relativePath: { eq: "2019/sails_2019_web.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const imgMeta = {
    blondie: {
      title: 'Blondie',
      year: '2019',
      description: 'Ink and watercolour on cold-pressed watercolour paper. 210 x 297 mm ( 8.27 x 11.69 in), 2019.',
      price: 650,
      original: 'AVAILABLE',
      prints: 'SOLD',
    },
    csodaszarvas: {
      title: 'Csodaszarvas',
      year: '2019',
      description: 'Ink and watercolour on cold-pressed watercolour paper. 297 x 420 mm (16.53 x 11.69 in), 2019.',
      price: 950,
      original: 'AVAILABLE',
      prints: 'AVAILABLE',
    },
    ellen_trechend: {
      title: 'Ellén Trechend',
      year: '2019',
      description: 'Ink and watercolour on cold-pressed watercolour paper. 297 x 420 mm (16.53 x 11.69 in), 2019.',
      price: 950,
      original: 'AVAILABLE',
      prints: 'SOLD',
    },
    puffin: {
      title: 'Puffin',
      year: '2019',
      description: 'Charcoal on cartridge paper. 210 x 297 mm ( 8.27 x 11.69 in), 2019.',
      price: 350,
      original: 'AVAILABLE',
      prints: 'SOLD',
    },
    red_pompoms: {
      title: 'Red Pompoms',
      year: '2019',
      description: 'Ink and watercolour on cold-pressed watercolour paper. 210 x 297 mm ( 8.27 x 11.69 in), 2019.',
      price: 650,
      original: 'AVAILABLE',
      prints: 'SOLD',
    },
    staring_tiger: {
      title: 'Staring Tiger',
      year: '2019',
      description: 'Ink and watercolour on cold-pressed watercolour paper. 297 x 420 mm ( 16.53 x 11.69 in), 2019.',
      price: 750,
      original: 'AVAILABLE',
      prints: 'AVAILABLE',
    },
    the_cat: {
      title: 'The Cat',
      year: '2019',
      description: 'Ink and watercolour on cold-pressed watercolour paper. 210 x 297 mm ( 8.27 x 11.69 in), 2019.',
      price: 650,
      original: 'AVAILABLE',
      prints: 'SOLD',
    },
    the_kirin: {
      title: 'The Kirin',
      year: '2019',
      description: 'Ink and watercolour on cold-pressed watercolour paper. 420 x 297 mm ( 11.69 x 16.53 in), 2019.',
      price: 900,
      original: 'AVAILABLE',
      prints: 'AVAILABLE',
    },
    turkey_portrait: {
      title: 'Turkey Portrait',
      year: '2019',
      description: 'Ink and watercolour on cold-pressed watercolour paper. 210 x 297 mm ( 8.27 x 11.69 in), 2019.',
      price: 650,
      original: 'AVAILABLE',
      prints: 'AVAILABLE',
    },
    unicorn_portrait: {
      title: 'Unicorn Portrait',
      year: '2019',
      description: 'Ink and watercolour on cold-pressed watercolour paper. 210 x 297 mm ( 8.27 x 11.69 in), 2019.',
      price: 650,
      original: 'AVAILABLE',
      prints: 'AVAILABLE',
    },
    wet_raven: {
      title: 'Wet Raven',
      year: '2019',
      description: 'Charcoal on cartridge paper. 210 x 297 mm ( 8.27 x 11.69 in), 2019.',
      price: 400,
      original: 'AVAILABLE',
      prints: 'SOLD',
    },
    bunclody: {
      title: 'Bunclody',
      year: '2019',
      description: 'Watercolour on cold-pressed watercolour paper. 250 mm x 250 mm (11.69 x 16.53 in), 2019.',
      price: 500,
      original: 'AVAILABLE',
      prints: 'AVAILABLE',
    },
    champion: {
      title: 'Champion',
      year: '2019',
      description: 'Ink and watercolour on cold-pressed watercolour paper. 210 x 297 mm ( 8.27 x 11.69 in), 2019.',
      price: 650,
      original: 'AVAILABLE',
      prints: 'SOLD',
    },
    grinning_long: {
      title: 'A Grinning Long',
      year: '2019',
      description: 'Ink on cartridge paper. 210 x 297 mm ( 8.27 x 11.69 in), 2019.',
      price: 400,
      original: 'AVAILABLE',
      prints: 'AVAILABLE',
    },
    bunnies: {
      title: 'Bunnies',
      year: '2019',
      description: 'Watercolour on cold-pressed watercolour paper. 260 mm x 360 mm (10 x 14 in), 2019.',
      price: 500,
      original: 'AVAILABLE',
      prints: 'SOLD',
    },
    horse_portrait: {
      title: 'Horse Portrait',
      year: '2019',
      description: 'Watercolour pencils on cartridge paper. 210 x 297 mm ( 8.27 x 11.69 in), 2019.',
      price: 350,
      original: 'AVAILABLE',
      prints: 'SOLD',
    },
    ross_castle_view: {
      title: 'Ross Castle View',
      year: '2019',
      description: 'Watercolour on cold-pressed watercolour paper. 360 mm x 260 mm (14 x 10 in), 2019.',
      price: 750,
      original: 'AVAILABLE',
      prints: 'SOLD',
    },
    phoenix_park: {
      title: 'Phoenix Park',
      year: '2019',
      description: 'Watercolour on cold-pressed watercolour paper. 250 mm x 250 mm (11.69 x 16.53 in), 2019.',
      price: 500,
      original: 'AVAILABLE',
      prints: 'SOLD',
    },
    dog_portrait: {
      title: 'Dog Portrait',
      year: '2019',
      description: 'Watercolour pencils on cartridge paper. 210 x 297 mm ( 8.27 x 11.69 in), 2019.',
      price: 350,
      original: 'AVAILABLE',
      prints: 'SOLD',
    },
    rooster_portrait: {
      title: 'Rooster Portrait',
      year: '2019',
      description: 'Watercolour on cold-pressed watercolour paper. 210 x 297 mm ( 8.27 x 11.69 in), 2019.',
      price: 500,
      original: 'SOLD',
      prints: 'SOLD',
    },
    wandering_rooster: {
      title: 'Wandering Rooster',
      year: '2019',
      description: 'Watercolour on cold-pressed watercolour paper. 210 x 297 mm ( 8.27 x 11.69 in), 2019.',
      price: 500,
      original: 'SOLD',
      prints: 'SOLD',
    },
    rising_wisdom: {
      title: 'Rising Wisdom 2019',
      year: '2019',
      description: 'Watercolour on cold-pressed watercolour paper. 210 x 297 mm ( 8.27 x 11.69 in), 2019.',
      price: 400,
      original: 'AVAILABLE',
      prints: 'SOLD',
    },
    sails: {
      title: 'Sails',
      year: '2019',
      description: 'Watercolour on acrylic paper. 508 x 405 mm (20 x 16 in), 2019.',
      price: 500,
      original: 'SOLD',
      prints: 'SOLD',
    },
  };

  return (
      <Layout>
        <SEO title="Art of Panna Zsamba in 2019" />
        <MasonryLayout imgData={imgData} imgMeta={imgMeta} />
      </Layout>
  );
};

export default App;
