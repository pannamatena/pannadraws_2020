import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import ArtPageLayout from '../components/ArtPageLayout';
import ArtPage from '../components/ArtPage';
import animalArtMeta from '../resources/animalArtMeta';

const StColmansDuck = (props) => {
  const imgData = useStaticQuery(graphql`
    query {
        queryData: file(relativePath: { eq: "2020/st_colmans_duck_2020_web.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        },
      }
   `);
  const imgMeta = animalArtMeta.st_colmans_duck;

  return (
      <Layout>
        <SEO title="St Colman's Duck (Feathers of Tales VIII) watercolour painting" />
        <ArtPageLayout prevPath={props.location.state ? props.location.state.prevPath : '/'}>
          <ArtPage imgData={imgData.queryData} imgMeta={imgMeta} />
        </ArtPageLayout>
      </Layout>
  );
};

export default StColmansDuck;
