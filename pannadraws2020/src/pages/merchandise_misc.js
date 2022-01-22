import React from 'react';
import {graphql, useStaticQuery} from "gatsby";
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import MasonryLayout from '../components/MasonryLayout';

const MerchandiseMisc = (props) => {
  const imgData = useStaticQuery(graphql`
    query {
      birds_of_ireland_2021_stickers: file(relativePath: { eq: "merch/birds_of_ireland_2021_stickers.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      xmas_tits_2020_printset: file(relativePath: { eq: "merch/xmas_tits_2020_printset.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      xmas_robins_2020_printset: file(relativePath: { eq: "merch/xmas_robins_2020_printset.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      sparrowhawk_2020_notebook: file(relativePath: { eq: "merch/sparrowhawk_2020_notebook.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      sparrowhawk_2020_magnet: file(relativePath: { eq: "merch/sparrowhawk_2020_magnet.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      farewell_2020_notebook: file(relativePath: { eq: "merch/farewell_2020_notebook.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      rascals_2020_sketchbook: file(relativePath: { eq: "merch/rascals_2020_sketchbook.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const MerchandiseMiscMeta = {
    birds_of_ireland_2021_stickers: {
      title: 'Birds of Ireland Sticker Sheet',
      year: '2021',
      description: 'A set of 6 vinyl bird stickers',
      price: 5.50,
      original: 'AVAILABLE',
      buyUrl: 'https://www.etsy.com/ie/listing/1104312816/',
      discount: 0,
      type: 'merchandise',
    },
    xmas_tits_2020_printset: {
      title: 'Tit art print set',
      year: '2021',
      description: 'A set of 3 tit watercolours. Available individually or in a set.',
      price: 15.95,
      original: 'AVAILABLE',
      buyUrl: 'https://www.etsy.com/ie/listing/1022714495/',
      discount: 0,
      type: 'merchandise',
    },
    xmas_robins_2020_printset: {
      title: 'Robin art print set',
      year: '2021',
      description: 'A set of 3 robin watercolours. Available individually or in a set.',
      price: 15.95,
      original: 'AVAILABLE',
      buyUrl: 'https://www.etsy.com/ie/listing/1008727456/',
      discount: 0,
      type: 'merchandise',
    },
    sparrowhawk_2020_notebook: {
      title: 'Sparrowhawk Artist\'s Notebook',
      year: '2020',
      description: 'Artist\'s spiral notebook with blank pages for sketching.',
      price: 20.95,
      original: 'AVAILABLE',
      buyUrl: 'https://www.etsy.com/ie/listing/911212429/',
      discount: 0,
      type: 'merchandise',
    },
    sparrowhawk_2020_magnet: {
      title: 'Sparrowhawk Fridge Magnet',
      year: '2020',
      description: 'Rectangular, 78x53 mm fridge magnet with my "Sparrowhawk" watercolour printed on it.',
      price: 5.15,
      original: 'AVAILABLE',
      buyUrl: 'https://www.etsy.com/ie/listing/882191122/',
      discount: 0,
      type: 'merchandise',
    },
    farewell_2020_notebook: {
      title: 'Farewell Hardcover Notebook',
      year: '2020',
      description: 'Hardcover, blank notebook with "Farewell" printed on the front. Orange colouring on edges and matching rubber band to secure cover.',
      price: 14.95,
      original: 'AVAILABLE',
      buyUrl: 'https://www.etsy.com/ie/listing/895826951/',
      discount: 0,
      type: 'merchandise',
    },
    rascals_2020_sketchbook: {
      title: 'Rascals Artist\'s Sketchbook',
      year: '2020',
      description: 'Soft cover, spiral bound artist\'s sketchbook with 48 blank pages (260gsm).',
      price: 23,
      original: 'AVAILABLE',
      buyUrl: 'https://www.etsy.com/ie/listing/888840913/',
      discount: 0,
      type: 'merchandise',
    },
  };

  return (
    <Layout>
      <SEO title="Notebooks, magnets and stickers with Panna Zsamba's artwork" />
      <MasonryLayout imgData={imgData} imgMeta={MerchandiseMiscMeta} path={props.path} />
    </Layout>
  );
};

export default MerchandiseMisc;
