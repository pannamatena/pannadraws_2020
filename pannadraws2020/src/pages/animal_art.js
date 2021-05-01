import React from 'react';
import {graphql, useStaticQuery} from "gatsby";
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import MasonryLayout from '../components/MasonryLayout';
import animalArtMeta from "../resources/animalArtMeta";

const AnimalArt = (props) => {
  const imgData = useStaticQuery(graphql`
    query {
      thirsty_chough: file(relativePath: { eq: "2021/thirsty_chough_2021_web.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      ivy_gentleman: file(relativePath: { eq: "2021/ivy_gentleman_2021_web.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      red_kite: file(relativePath: { eq: "2021/red_kite_2021_web.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      greyhead: file(relativePath: { eq: "2021/greyhead_2021_web.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      kestrel: file(relativePath: { eq: "2021/kestrel_2021_web.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      caladrius: file(relativePath: { eq: "2021/caladrius_2021_web.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      sunny_december_day: file(relativePath: { eq: "2021/sunny_december_day_2021_web.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      musket: file(relativePath: { eq: "2021/musket_2021_web.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      hawk_of_st_annes: file(relativePath: { eq: "2021/hawk_of_st_annes_2021_web.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      the_birdfeeder: file(relativePath: { eq: "2021/the_birdfeeder_2021_web.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      bone_raven: file(relativePath: { eq: "2021/bone_raven_2021_web.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      peregrine: file(relativePath: { eq: "2021/peregrine_2021_web.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      bistre_doe: file(relativePath: { eq: "2021/bistre_doe_2021_web.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      the_hug: file(relativePath: { eq: "2021/the_hug_2021_web.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      low_tide_tale: file(relativePath: { eq: "2021/low_tide_tale_2021_web.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      spear: file(relativePath: { eq: "2021/spear_2021_web.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      buttercups: file(relativePath: { eq: "2021/buttercups_2021_web.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      sandworts: file(relativePath: { eq: "2020/sandworts_2020_web.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      cuckooflowers: file(relativePath: { eq: "2020/cuckooflowers_2020_web.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      we_belong: file(relativePath: { eq: "2020/we_belong_2020_web.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      muruchaill: file(relativePath: { eq: "2020/muruchaill_2020_web.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      jacks: file(relativePath: { eq: "2020/jacks_2020_web.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      curlew: file(relativePath: { eq: "2020/curlew_2020_web.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      alfalfa: file(relativePath: { eq: "2020/alfalfa_2020_web.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      lirs_daughter: file(relativePath: { eq: "2020/lirs_daughter_2020_web.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      treasures: file(relativePath: { eq: "2020/treasures_2020_web.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      christmas_tits_2020: file(relativePath: { eq: "2020/christmas_tits_2020.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      christmas_robins_2020: file(relativePath: { eq: "2020/christmas_robins_2020.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      rascals: file(relativePath: { eq: "2020/rascals_2020_web.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      queen_of_the_wasteland: file(relativePath: { eq: "2020/queen_of_the_wasteland_2020_web.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      farewell: file(relativePath: { eq: "2020/farewell_2020_web.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      may: file(relativePath: { eq: "2020/may_2020_web.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      st_colmans_duck: file(relativePath: { eq: "2020/st_colmans_duck_2020_web.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      furcula: file(relativePath: { eq: "2020/furcula_2020_web.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      the_ousel_of_cilgwri: file(relativePath: { eq: "2020/the_ousel_of_cilgwri_2020_web.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      the_robin: file(relativePath: { eq: "2020/the_robin_2020_web.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      sparrowhawk: file(relativePath: { eq: "2020/sparrowhawk_2020_web.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      the_fishermans_son: file(relativePath: { eq: "2020/the_fishermans_son_2020_web.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      one_for_sorrow: file(relativePath: { eq: "2020/one_for_sorrow_2020_web.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      angelic_hunt: file(relativePath: { eq: "2020/angelic_hunt_2020_web.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      the_kings_friend: file(relativePath: { eq: "2020/the_kings_friend_2020_web.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      old_nog: file(relativePath: { eq: "2020/old_nog_2020_web.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
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
      red_pompoms: file(relativePath: { eq: "2019/red_pompoms_2019_web.png" }) {
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
      }
    }
  `);

  return (
      <Layout>
        <SEO title="Animal fine art, bird watercolour paintings by Panna Zsamba" />
        <MasonryLayout imgData={imgData} imgMeta={animalArtMeta} path={props.path} />
      </Layout>
  );
};

export default AnimalArt;
