import React from 'react';
import {graphql, useStaticQuery} from "gatsby";
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import MasonryLayout from '../components/MasonryLayout';
import merchandiseMeta from "../resources/merchandiseMeta";

const Merchandise = (props) => {
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
      sparrowhawk_2020_notebook: file(relativePath: { eq: "merch/sparrowhawk_2020_notebook.jpg" }) {
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
      dragon_dance_2020_bookmark: file(relativePath: { eq: "merch/dragon_dance_2020_bookmark.jpg" }) {
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
      xmas_cards_2020_6set: file(relativePath: { eq: "merch/xmas_cards_2020_6set.jpg" }) {
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

  return (
      <Layout>
        <SEO title="T-shirts and stationary with Panna Zsamba's artwork" />
        <MasonryLayout imgData={imgData} imgMeta={merchandiseMeta} path={props.path} />
      </Layout>
  );
};

export default Merchandise;
