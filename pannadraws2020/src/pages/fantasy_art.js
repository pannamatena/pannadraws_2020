import React from 'react';
import {graphql, useStaticQuery} from "gatsby";
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import MasonryLayout from '../components/MasonryLayout';
import fantasyArtMeta from "../resources/fantasyArtMeta";

const FantasyArt = (props) => {
  const imgData = useStaticQuery(graphql`
    query {
      almost_invincible: file(relativePath: { eq: "2020/almost_invincible_2020_web.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      bonds: file(relativePath: { eq: "2020/bonds_2020_web.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      mother_bear: file(relativePath: { eq: "2020/mother_bear_2020_web.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      entering_the_red_forest: file(relativePath: { eq: "2020/entering_the_red_forest_2020_web.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
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
      unicorn_portrait: file(relativePath: { eq: "2019/unicorn_portrait_2019_web.png" }) {
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
        <SEO title="Fantasy fine art, dragon paintings, unicorn paintings" />
        <MasonryLayout imgData={imgData} imgMeta={fantasyArtMeta} path={props.path} />
      </Layout>
  );
};

export default FantasyArt;
