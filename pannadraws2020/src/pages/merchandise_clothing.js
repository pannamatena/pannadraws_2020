import React from 'react';
import {graphql, useStaticQuery} from "gatsby";
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import MasonryLayout from '../components/MasonryLayout';

const MerchandiseClothing = (props) => {
  const imgData = useStaticQuery(graphql`
    query {
      raptors_of_ireland_2021_womens_tank: file(relativePath: { eq: "merch/raptors_of_ireland_2021_womens_tank.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      raptors_of_ireland_2021_mens_tee: file(relativePath: { eq: "merch/raptors_of_ireland_2021_mens_tee.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      ivy_gentleman_2021_womens_tee: file(relativePath: { eq: "merch/ivy_gentleman_2021_womens_tee.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      bone_raven_2021_womens_tee: file(relativePath: { eq: "merch/bone_raven_2021_womens_tee.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      buttercups_2021_unisex_tee: file(relativePath: { eq: "merch/buttercups_2021_unisex_tee.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      sandworts_2020_unisex_tee: file(relativePath: { eq: "merch/sandworts_2020_unisex_tee.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      cuckooflowers_2020_unisex_tee: file(relativePath: { eq: "merch/cuckooflowers_2020_unisex_tee.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      alfalfa_2020_womens_tee: file(relativePath: { eq: "merch/alfalfa_2020_womens_tee.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      rascals_2020_mens_tee: file(relativePath: { eq: "merch/rascals_2020_mens_tee.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      rascals_2020_womens_tee: file(relativePath: { eq: "merch/rascals_2020_womens_tee.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      farewell_2020_mens_tee: file(relativePath: { eq: "merch/farewell_2020_mens_tee.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      farewell_2020_womens_tee: file(relativePath: { eq: "merch/farewell_2020_womens_tee.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const merchandiseClothingMeta = {
    raptors_of_ireland_2021_womens_tank: {
      title: 'Raptors of Ireland Women\'s Racerback Tank',
      year: '2021',
      description: 'Racerback tank top with a print made from my Irish Raptors series.',
      price: 26,
      original: 'AVAILABLE',
      buyUrl: 'https://www.etsy.com/ie/listing/1030477080/',
      discount: 0,
      type: 'merchandise',
    },
    raptors_of_ireland_2021_mens_tee: {
      title: 'Raptors of Ireland Men\'s Tee',
      year: '2021',
      description: 'Short sleeved men\'s or unisex t-shirt with a print made from my Irish Raptors series.',
      price: 32,
      original: 'AVAILABLE',
      buyUrl: 'https://www.etsy.com/ie/listing/1030480114/',
      discount: 0,
      type: 'merchandise',
    },
    ivy_gentleman_2021_womens_tee: {
      title: 'Ivy Gentleman Women\'s Short Sleeved Tee',
      year: '2021',
      description: 'Short sleeved women\'s fit t-shirt with my artwork "Ivy Gentleman" printed on it.',
      price: 30.50,
      original: 'AVAILABLE',
      buyUrl: 'https://www.etsy.com/ie/listing/1007951583/',
      discount: 0,
      type: 'merchandise',
    },
    bone_raven_2021_womens_tee: {
      title: 'Bone Raven Women\'s Short Sleeved Tee',
      year: '2021',
      description: 'Short sleeved women\'s fit t-shirt with my artwork "Bone Raven" printed on it.',
      price: 32.50,
      original: 'AVAILABLE',
      buyUrl: 'https://www.etsy.com/ie/listing/995282674/',
      discount: 0,
      type: 'merchandise',
    },
    buttercups_2021_unisex_tee: {
      title: 'Buttercups Unisex Tee',
      year: '2021',
      description: 'Unisex short sleeved t-shirt with a robin pair print.',
      price: 32,
      original: 'AVAILABLE',
      buyUrl: 'https://www.etsy.com/ie/listing/941546699/',
      discount: 0,
      type: 'merchandise',
    },
    sandworts_2020_unisex_tee: {
      title: 'Sandworts Unisex Tee',
      year: '2020',
      description: 'Unisex short sleeved t-shirt with a blue tit pair print.',
      price: 32.50,
      original: 'AVAILABLE',
      buyUrl: 'https://www.etsy.com/ie/listing/941546297/',
      discount: 0,
      type: 'merchandise',
    },
    cuckooflowers_2020_unisex_tee: {
      title: 'Cuckooflowers Unisex Tee',
      year: '2020',
      description: 'Unisex short sleeved t-shirt with a grey heron pair print.',
      price: 34.50,
      original: 'AVAILABLE',
      buyUrl: 'https://www.etsy.com/ie/listing/941545811/',
      discount: 0,
      type: 'merchandise',
    },
    alfalfa_2020_womens_tee: {
      title: 'Alfalfa Women\'s Short Sleeved Tee',
      year: '2020',
      description: 'Short sleeved women\'s fit t-shirt with my artwork "Farewell" printed on it.',
      price: 32,
      original: 'AVAILABLE',
      buyUrl: 'https://www.etsy.com/ie/listing/906857911/',
      discount: 0,
      type: 'merchandise',
    },
    rascals_2020_mens_tee: {
      title: 'Rascals Men\'s Short Sleeved Tee',
      year: '2020',
      description: 'Short sleeved men\'s or unisex t-shirt with my artwork "Rascals" printed on it.',
      price: 31.50,
      original: 'AVAILABLE',
      buyUrl: 'https://www.etsy.com/ie/listing/875381994/',
      discount: 0,
      type: 'merchandise',
    },
    rascals_2020_womens_tee: {
      title: 'Rascals Women\'s Short Sleeved Tee',
      year: '2020',
      description: 'Short sleeved women\'s fit t-shirt with my artwork "Rascals" printed on it.',
      price: 32,
      original: 'AVAILABLE',
      buyUrl: 'https://www.etsy.com/ie/listing/1021281161/',
      discount: 0,
      type: 'merchandise',
    },
    farewell_2020_mens_tee: {
      title: 'Farewell Men\'s Short Sleeved Tee',
      year: '2020',
      description: 'Short sleeved men\'s or unisex t-shirt with my artwork "Farewell" printed on it.',
      price: 28.50,
      original: 'AVAILABLE',
      buyUrl: 'https://www.etsy.com/ie/listing/875079870/',
      discount: 0,
      type: 'merchandise',
    },
    farewell_2020_womens_tee: {
      title: 'Farewell Women\'s Short Sleeved Tee',
      year: '2020',
      description: 'Short sleeved women\'s fit t-shirt with my artwork "Farewell" printed on it.',
      price: 28,
      original: 'AVAILABLE',
      buyUrl: 'https://www.etsy.com/ie/listing/864817848/',
      discount: 0,
      type: 'merchandise',
    },
  };

  return (
    <Layout>
      <SEO title="T-shirts and other apparel with Panna Zsamba's artwork" />
      <MasonryLayout imgData={imgData} imgMeta={merchandiseClothingMeta} path={props.path} />
    </Layout>
  );
};

export default MerchandiseClothing;
