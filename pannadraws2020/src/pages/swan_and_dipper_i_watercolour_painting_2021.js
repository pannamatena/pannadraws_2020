import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import ArtPageLayout from '../components/ArtPageLayout';
import ArtPage from '../components/ArtPage';
import animalArtMeta from '../resources/animalArtMeta';

const SwanAndDipperI = (props) => {
  const imgData = useStaticQuery(graphql`
    query {
        queryData: file(relativePath: { eq: "2021/swan_and_dipper_i_2021_web.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        },
      }
   `);
  const imgMeta = animalArtMeta.swan_and_dipper_i;

  return (
      <Layout>
        <SEO title="Swan and Dipper I - Mute Swan watercolour painting" />
        <ArtPageLayout prevPath={props.location.state ? props.location.state.prevPath : '/'}>
          <ArtPage imgData={imgData.queryData} imgMeta={imgMeta} />
        </ArtPageLayout>
      </Layout>
  );
};

export default SwanAndDipperI;
