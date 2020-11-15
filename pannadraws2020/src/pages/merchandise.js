import React from 'react';
import {graphql, useStaticQuery} from "gatsby";
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import MasonryLayout from '../components/MasonryLayout';
import merchandiseMeta from "../resources/merchandiseMeta";

const Merchandise = (props) => {
  const imgData = useStaticQuery(graphql`
    query {
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
