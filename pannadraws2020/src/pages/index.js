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
      the_sunbender: file(relativePath: { eq: "2020/the_sunbender_2020_web.png" }) {
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
      rooster_II: file(relativePath: { eq: "2020/rooster_II_2020_web.png" }) {
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
      wingspan: file(relativePath: { eq: "2020/wingspan_2020_web.png" }) {
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
      prints: 'NOTYET',
      discount: 25,
    },
    peacock_girls: {
      title: 'Peacock Girls',
      year: '2020',
      description: 'Ink and colored pencil on cartridge paper. 420 x 594 mm (16.53 x 23.39 in), 2020.',
      price: 900,
      original: 'AVAILABLE',
      prints: 'NOTYET',
      discount: 25,
    },
    the_sunbender: {
      title: 'The Sunbender',
      year: '2020',
      description: 'Ink, watercolour and coloured pencil on mixed media paper. 297 x 420 mm (11.69 x 16.53 in), 2020.',
      price: 650,
      original: 'AVAILABLE',
      prints: 'NOTYET',
      discount: 25,
    },
    two_geese: {
      title: 'Two Geese',
      year: '2020',
      description: 'Colored pencil on cartridge paper. 420 x 594 mm (16.53 x 23.39 in), 2020.',
      price: 900,
      original: 'AVAILABLE',
      prints: 'AVAILABLE',
      discount: 25,
    },
    hen_and_rooster: {
      title: 'Hen and Rooster',
      year: '2020',
      description: 'Ink and watercolour on cold pressed watercolour paper. 297 x 420 mm (16.53 x 11.69 in), 2020.',
      price: 750,
      original: 'AVAILABLE',
      prints: 'AVAILABLE',
      discount: 25,
    },
    morozovas_stag: {
      title: 'Morozova\'s Stag',
      year: '2020',
      description: 'Ink and watercolour on cold pressed watercolour paper. 420 x 297 mm ( 11.69 x 16.53 in), 2020.',
      price: 800,
      original: 'AVAILABLE',
      prints: 'SOLD',
      discount: 25,
    },
    reindeer_and_dragonflies: {
      title: 'Reindeer and Dragonflies',
      year: '2020',
      description: 'Coloured pencil on cartridge paper. 297 x 210 mm ( 11.69 x 8.27 in), 2020.',
      price: 250,
      original: 'AVAILABLE',
      prints: 'SOLD',
      discount: 25,
    },
    rooster_II: {
      title: 'Rooster II',
      year: '2020',
      description: 'Coloured pencil on paper. 210 x 297 mm ( 8.27 x 11.69 in), 2020.',
      price: 450,
      original: 'AVAILABLE',
      prints: 'AVAILABLE',
      discount: 25,
    },
    statement: {
      title: 'Statement',
      year: '2020',
      description: 'Ink and coloured pencil on paper. 420 x 297 mm ( 16.53 x 11.69 in), 2020.',
      price: 650,
      original: 'AVAILABLE',
      prints: 'SOLD',
      discount: 25,
    },
    the_dragon_and_the_kirin: {
      title: 'The Dragon and The Kirin',
      year: '2020',
      description: 'Ink and watercolour on cold pressed watercolour paper. 297 x 420 mm (16.53 x 11.69 in), 2020.',
      price: 650,
      original: 'AVAILABLE',
      prints: 'AVAILABLE',
      discount: 25,
    },
    wingspan: {
      title: 'Wingspan',
      year: '2020',
      description: 'Ink and watercolour on acrylic paper. 508 x 405 mm (20 x 16 in), 2020.',
      price: 650,
      original: 'AVAILABLE',
      prints: 'AVAILABLE',
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
