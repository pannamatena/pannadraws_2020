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
      price: 225,
      original: 'AVAILABLE',
      prints: 'AVAILABLE',
      printUrl: 'https://society6.com/product/deer-in-phoenix-park_print',
      discount: 0,
      story: 'I created this quick study of a stag to practice the deer head for "The Summoning". I ended up liking the linework so much I decided to finish it as a standalone piece.',
    },
    peacock_girls: {
      title: 'Peacock Girls',
      year: '2020',
      description: 'Ink and colored pencil on cartridge paper. 420 x 594 mm (16.53 x 23.39 in), 2020.',
      price: 600,
      original: 'AVAILABLE',
      prints: 'AVAILABLE',
      printUrl: 'https://society6.com/product/peacock-girls_print',
      discount: 0,
      story: 'Two peahens I captured on camera at Dublin Zoo. The composition is made from two separate photos. The title is wrong on purpose: in my head I tend to simplify terms and I always thought if these birds as "girl peacocks". ',
    },
    two_geese: {
      title: 'Two Geese',
      year: '2020',
      description: 'Colored pencil on cartridge paper. 420 x 594 mm (16.53 x 23.39 in), 2020.',
      price: 600,
      original: 'AVAILABLE',
      prints: 'AVAILABLE',
      printUrl: 'https://society6.com/product/two-geese2700843_print',
      discount: 0,
      story: 'This was my first coloured pencil attempt, hence my strong linework is missing here, as I was only exploring this medium.',
    },
    hen_and_rooster: {
      title: 'Hen and Rooster',
      year: '2020',
      description: 'Ink and watercolour on cold pressed watercolour paper. 297 x 420 mm (16.53 x 11.69 in), 2020.',
      price: 350,
      original: 'AVAILABLE',
      prints: 'AVAILABLE',
      printUrl: 'https://society6.com/product/hen-and-rooster2700884_print',
      discount: 0,
      story: 'The source for this painting are two photos I took at the Lisbon Zoo. I wanted to create a vintage feeling with this one, something that really reminds me of country lifestyle.',
    },
    rooster_II: {
      title: 'Rooster II',
      year: '2020',
      description: 'Coloured pencil on paper. 210 x 297 mm ( 8.27 x 11.69 in), 2020.',
      price: 150,
      original: 'AVAILABLE',
      prints: 'AVAILABLE',
      printUrl: 'https://society6.com/product/rooster-ii2702198_print',
      discount: 0,
      story: 'Another quick practice with coloured pencils.',
    },
    wingspan: {
      title: 'Wingspan',
      year: '2020',
      description: 'Ink and watercolour on acrylic paper. 508 x 405 mm (20 x 16 in), 2020.',
      price: 300,
      original: 'AVAILABLE',
      prints: 'AVAILABLE',
      printUrl: 'https://society6.com/product/wingspan2702266_print',
      discount: 0,
      story: 'When I was visiting my friend in Manchester, UK, I came across a duck pond, on that very day when I thought I won\'t need my camera anyway... So reference photo was taken with my mobile. As you can guess there are details missing in the image, so I had to fill in those from imagination, like the feather details on the wings.',
    },
    red_pompoms: {
      title: 'Red Pompoms',
      year: '2019',
      description: 'Ink and watercolour on cold-pressed watercolour paper. 210 x 297 mm ( 8.27 x 11.69 in), 2019.',
      price: 200,
      original: 'AVAILABLE',
      prints: 'SOLD',
      printUrl: '',
      discount: 0,
      story: '',
    },
    staring_tiger: {
      title: 'Staring Tiger',
      year: '2019',
      description: 'Ink and watercolour on cold-pressed watercolour paper. 297 x 420 mm ( 16.53 x 11.69 in), 2019.',
      price: 300,
      original: 'AVAILABLE',
      prints: 'AVAILABLE',
      printUrl: 'https://society6.com/product/staring-tiger_print',
      discount: 0,
      story: 'The tiger at Lisbon Zoo happened to make a performance for us! He was walking back and forth to the observation window, and every time he came close to it he made a piruette while staring upwards. I managed to take a photo of his attraction, which became the inspiration for this painting.',
    },
    champion: {
      title: 'Champion',
      year: '2019',
      description: 'Ink and watercolour on cold-pressed watercolour paper. 210 x 297 mm ( 8.27 x 11.69 in), 2019.',
      price: 200,
      original: 'AVAILABLE',
      prints: 'SOLD',
      printUrl: '',
      discount: 0,
      story: '',
    },
    blondie: {
      title: 'Blondie',
      year: '2019',
      description: 'Ink and watercolour on cold-pressed watercolour paper. 210 x 297 mm ( 8.27 x 11.69 in), 2019.',
      price: 250,
      original: 'AVAILABLE',
      prints: 'SOLD',
      printUrl: '',
      discount: 0,
      story: '',
    },
    wet_raven: {
      title: 'Wet Raven',
      year: '2019',
      description: 'Charcoal on cartridge paper. 210 x 297 mm ( 8.27 x 11.69 in), 2019.',
      price: 300,
      original: 'SOLD',
      prints: 'SOLD',
      printUrl: '',
      discount: 0,
      story: '',
    },
    turkey_portrait: {
      title: 'Turkey Portrait',
      year: '2019',
      description: 'Ink and watercolour on cold-pressed watercolour paper. 210 x 297 mm ( 8.27 x 11.69 in), 2019.',
      price: 120,
      original: 'AVAILABLE',
      prints: 'AVAILABLE',
      printUrl: 'https://society6.com/product/turkey-portrait2702379_print',
      discount: 0,
      story: '',
    },
    puffin: {
      title: 'Puffin',
      year: '2019',
      description: 'Charcoal on cartridge paper. 210 x 297 mm ( 8.27 x 11.69 in), 2019.',
      price: 200,
      original: 'SOLD',
      prints: 'SOLD',
      printUrl: '',
      discount: 0,
      story: '',
    },
    horse_portrait: {
      title: 'Horse Portrait',
      year: '2019',
      description: 'Watercolour pencils on cartridge paper. 210 x 297 mm ( 8.27 x 11.69 in), 2019.',
      price: 100,
      original: 'SOLD',
      prints: 'SOLD',
      printUrl: '',
      discount: 0,
      story: '',
    },
    dog_portrait: {
      title: 'Dog Portrait',
      year: '2019',
      description: 'Watercolour pencils on cartridge paper. 210 x 297 mm ( 8.27 x 11.69 in), 2019.',
      price: 100,
      original: 'SOLD',
      prints: 'SOLD',
      printUrl: '',
      discount: 0,
      story: '',
    },
    bunnies: {
      title: 'Bunnies',
      year: '2019',
      description: 'Watercolour on cold-pressed watercolour paper. 260 mm x 360 mm (10 x 14 in), 2019.',
      price: 250,
      original: 'SOLD',
      prints: 'SOLD',
      printUrl: '',
      discount: 0,
      story: '',
    },
    rooster_portrait: {
      title: 'Rooster Portrait',
      year: '2019',
      description: 'Watercolour on cold-pressed watercolour paper. 210 x 297 mm ( 8.27 x 11.69 in), 2019.',
      price: 500,
      original: 'SOLD',
      prints: 'SOLD',
      printUrl: '',
      discount: 0,
      story: '',
    },
    wandering_rooster: {
      title: 'Wandering Rooster',
      year: '2019',
      description: 'Watercolour on cold-pressed watercolour paper. 210 x 297 mm ( 8.27 x 11.69 in), 2019.',
      price: 500,
      original: 'SOLD',
      prints: 'SOLD',
      printUrl: '',
      discount: 0,
      story: '',
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
