import React from 'react';
import {graphql, useStaticQuery} from "gatsby";
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import MasonryLayout from '../components/MasonryLayout';

const MerchandiseCards = (props) => {
  const imgData = useStaticQuery(graphql`
    query {
      low_tide_tale_2021_greeting_card: file(relativePath: { eq: "merch/low_tide_tale_2021_greeting_card.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      greeting_cards_2021_spring: file(relativePath: { eq: "merch/greeting_cards_2021_spring.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      postcards_2021_spring: file(relativePath: { eq: "merch/postcards_2021_spring.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      xmas_cards_2020_6set: file(relativePath: { eq: "merch/xmas_cards_2020_6set.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const merchandiseCardsMeta = {
    low_tide_tale_2021_greeting_card: {
      title: 'Low Tide Tale Greeting Card',
      year: '2021',
      description: 'Greeting card with white envelope.',
      price: 3.50,
      original: 'AVAILABLE',
      buyUrl: 'https://www.etsy.com/ie/listing/953617477/',
      discount: 0,
      type: 'merchandise',
    },
    greeting_cards_2021_spring: {
      title: 'Birds in Love Greeting Cards',
      year: '2021',
      description: 'Greeting cards with white envelopes.',
      price: 3.50,
      original: 'AVAILABLE',
      buyUrl: 'https://www.etsy.com/ie/listing/943508801/',
      discount: 0,
      type: 'merchandise',
    },
    postcards_2021_spring: {
      title: 'Birds in Love Postcard set',
      year: '2021',
      description: 'Set of 3 postcards with bird pair prints.',
      price: 5,
      original: 'AVAILABLE',
      buyUrl: 'https://www.etsy.com/ie/listing/928314268/',
      discount: 0,
      type: 'merchandise',
    },
    xmas_cards_2020_6set: {
      title: 'Christmas Card set',
      year: '2020',
      description: 'Set of 6 or 3 Christmas cards with robin and tit prints, with gold envelopes.',
      price: 8,
      original: 'AVAILABLE',
      buyUrl: 'https://www.etsy.com/ie/listing/891942385/',
      discount: 0,
      type: 'merchandise',
    },
  };

  return (
    <Layout>
      <SEO title="Irish handmade cards by Irish artist Panna Zsamba" />
      <MasonryLayout imgData={imgData} imgMeta={merchandiseCardsMeta} path={props.path} />
    </Layout>
  );
};

export default MerchandiseCards;
