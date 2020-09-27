import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import ArtPageLayout from '../components/ArtPageLayout';
import ArtPage from '../components/ArtPage';
import animalArtMeta from '../resources/animalArtMeta';

const QueenOfTheWasteland = (props) => {
  const imgData = useStaticQuery(graphql`
    query {
        queryData: file(relativePath: { eq: "2020/queen_of_the_wasteland_2020_web.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        },
      }
   `);
  const imgMeta = animalArtMeta.queen_of_the_wasteland;

  return (
      <Layout>
        <SEO title="Queen of the Wasteland (Feathers of Tales IX) watercolour painting" />
        <ArtPageLayout prevPath={props.location.state ? props.location.state.prevPath : '/'}>
          <ArtPage imgData={imgData.queryData} imgMeta={imgMeta} />
        </ArtPageLayout>
      </Layout>
  );
};

export default QueenOfTheWasteland;
