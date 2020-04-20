import React from 'react';
import {graphql, useStaticQuery} from "gatsby";
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import Banner from "../components/Banner";
import MasonryLayout from "../components/MasonryLayout";

const App = () => {
  const imgData = useStaticQuery(graphql`
    query {
      deer_in_phoenix_park: file(relativePath: { eq: "2020/deer_in_phoenix_park_2020_web.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      peacock_girls: file(relativePath: { eq: "2020/peacock_girls_2020_web.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      two_geese: file(relativePath: { eq: "2020/two_geese_2020_web.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      hen_and_rooster: file(relativePath: { eq: "2020/hen_and_rooster_2020_web.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      rooster_II: file(relativePath: { eq: "2020/rooster_II_2020_web.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      wingspan: file(relativePath: { eq: "2020/wingspan_2020_web.png" }) {
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
      champion: file(relativePath: { eq: "2019/champion_2019_web.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      blondie: file(relativePath: { eq: "2019/blondie_2019_web.png" }) {
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
      turkey_portrait: file(relativePath: { eq: "2019/turkey_portrait_2019_web.png" }) {
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
      horse_portrait: file(relativePath: { eq: "2019/horse_portrait_2018_web.png" }) {
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
      }
    }
  `);

  const imgMeta = {
    deer_in_phoenix_park: {
      title: 'Deer in Phoenix Park',
      year: '2020',
      description: 'Ink and watercolour on mixed media paper. 297 x 420 mm (11.69 x 16.53 in), 2020.',
      price: 550,
      original: 'AVAILABLE',
      prints: 'AVAILABLE',
      printUrl: 'https://society6.com/product/deer-in-phoenix-park_print',
      discount: 25,
    },
    peacock_girls: {
      title: 'Peacock Girls',
      year: '2020',
      description: 'Ink and colored pencil on cartridge paper. 420 x 594 mm (16.53 x 23.39 in), 2020.',
      price: 900,
      original: 'AVAILABLE',
      prints: 'AVAILABLE',
      printUrl: 'https://society6.com/product/peacock-girls_print',
      discount: 25,
    },
    two_geese: {
      title: 'Two Geese',
      year: '2020',
      description: 'Colored pencil on cartridge paper. 420 x 594 mm (16.53 x 23.39 in), 2020.',
      price: 900,
      original: 'AVAILABLE',
      prints: 'AVAILABLE',
      printUrl: 'https://society6.com/product/two-geese2700843_print',
      discount: 25,
    },
    hen_and_rooster: {
      title: 'Hen and Rooster',
      year: '2020',
      description: 'Ink and watercolour on cold pressed watercolour paper. 297 x 420 mm (16.53 x 11.69 in), 2020.',
      price: 750,
      original: 'AVAILABLE',
      prints: 'AVAILABLE',
      printUrl: 'https://society6.com/product/hen-and-rooster2700884_print',
      discount: 25,
    },
    rooster_II: {
      title: 'Rooster II',
      year: '2020',
      description: 'Coloured pencil on paper. 210 x 297 mm ( 8.27 x 11.69 in), 2020.',
      price: 450,
      original: 'AVAILABLE',
      prints: 'AVAILABLE',
      printUrl: 'https://society6.com/product/rooster-ii2702198_print',
      discount: 25,
    },
    wingspan: {
      title: 'Wingspan',
      year: '2020',
      description: 'Ink and watercolour on acrylic paper. 508 x 405 mm (20 x 16 in), 2020.',
      price: 650,
      original: 'AVAILABLE',
      prints: 'AVAILABLE',
      printUrl: 'https://society6.com/product/wingspan2702266_print',
      discount: 25,
    },
    red_pompoms: {
      title: 'Red Pompoms',
      year: '2019',
      description: 'Ink and watercolour on cold-pressed watercolour paper. 210 x 297 mm ( 8.27 x 11.69 in), 2019.',
      price: 550,
      original: 'AVAILABLE',
      prints: 'SOLD',
      printUrl: '',
      discount: 25,
    },
    staring_tiger: {
      title: 'Staring Tiger',
      year: '2019',
      description: 'Ink and watercolour on cold-pressed watercolour paper. 297 x 420 mm ( 16.53 x 11.69 in), 2019.',
      price: 650,
      original: 'AVAILABLE',
      prints: 'AVAILABLE',
      printUrl: 'https://society6.com/product/staring-tiger_print',
      discount: 25,
    },
    champion: {
      title: 'Champion',
      year: '2019',
      description: 'Ink and watercolour on cold-pressed watercolour paper. 210 x 297 mm ( 8.27 x 11.69 in), 2019.',
      price: 550,
      original: 'AVAILABLE',
      prints: 'SOLD',
      printUrl: '',
      discount: 25,
    },
    blondie: {
      title: 'Blondie',
      year: '2019',
      description: 'Ink and watercolour on cold-pressed watercolour paper. 210 x 297 mm ( 8.27 x 11.69 in), 2019.',
      price: 550,
      original: 'AVAILABLE',
      prints: 'SOLD',
      printUrl: '',
      discount: 25,
    },
    wet_raven: {
      title: 'Wet Raven',
      year: '2019',
      description: 'Charcoal on cartridge paper. 210 x 297 mm ( 8.27 x 11.69 in), 2019.',
      price: 300,
      original: 'AVAILABLE',
      prints: 'SOLD',
      printUrl: '',
      discount: 25,
    },
    turkey_portrait: {
      title: 'Turkey Portrait',
      year: '2019',
      description: 'Ink and watercolour on cold-pressed watercolour paper. 210 x 297 mm ( 8.27 x 11.69 in), 2019.',
      price: 550,
      original: 'AVAILABLE',
      prints: 'AVAILABLE',
      printUrl: 'https://society6.com/product/turkey-portrait2702379_print',
      discount: 25,
    },
    puffin: {
      title: 'Puffin',
      year: '2019',
      description: 'Charcoal on cartridge paper. 210 x 297 mm ( 8.27 x 11.69 in), 2019.',
      price: 200,
      original: 'AVAILABLE',
      prints: 'SOLD',
      printUrl: '',
      discount: 25,
    },
    horse_portrait: {
      title: 'Horse Portrait',
      year: '2019',
      description: 'Watercolour pencils on cartridge paper. 210 x 297 mm ( 8.27 x 11.69 in), 2019.',
      price: 100,
      original: 'AVAILABLE',
      prints: 'SOLD',
      printUrl: '',
      discount: 25,
    },
    dog_portrait: {
      title: 'Dog Portrait',
      year: '2019',
      description: 'Watercolour pencils on cartridge paper. 210 x 297 mm ( 8.27 x 11.69 in), 2019.',
      price: 100,
      original: 'AVAILABLE',
      prints: 'SOLD',
      printUrl: '',
      discount: 25,
    },
    bunnies: {
      title: 'Bunnies',
      year: '2019',
      description: 'Watercolour on cold-pressed watercolour paper. 260 mm x 360 mm (10 x 14 in), 2019.',
      price: 250,
      original: 'AVAILABLE',
      prints: 'SOLD',
      printUrl: '',
      discount: 25,
    },
    rooster_portrait: {
      title: 'Rooster Portrait',
      year: '2019',
      description: 'Watercolour on cold-pressed watercolour paper. 210 x 297 mm ( 8.27 x 11.69 in), 2019.',
      price: 500,
      original: 'SOLD',
      prints: 'SOLD',
      printUrl: '',
      discount: 25,
    },
    wandering_rooster: {
      title: 'Wandering Rooster',
      year: '2019',
      description: 'Watercolour on cold-pressed watercolour paper. 210 x 297 mm ( 8.27 x 11.69 in), 2019.',
      price: 500,
      original: 'SOLD',
      prints: 'SOLD',
      printUrl: '',
      discount: 25,
    },
  };

  return (
      <Layout>
        <SEO title="Art Portfolio of Panna Zsamba" />
        <Banner />
        <MasonryLayout imgData={imgData} imgMeta={imgMeta} />
      </Layout>
  );
};

export default App;
