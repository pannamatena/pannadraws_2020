import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import ArtPageLayout from '../components/ArtPageLayout';
import ArtPage from '../components/ArtPage';
import animalArtMeta from '../resources/animalArtMeta';

const ChristmasTits2020 = (props) => {
  const imgData = useStaticQuery(graphql`
    query {
        queryData: file(relativePath: { eq: "2020/christmas_tits_2020.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        },
      }
   `);
  const imgMeta = animalArtMeta.christmas_tits_2020;

  return (
      <Layout>
        <SEO title="Christmas Tits 2020 greeting card design watercolour painting" />
        <ArtPageLayout prevPath={props.location.state ? props.location.state.prevPath : '/'}>
          <ArtPage imgData={imgData.queryData} imgMeta={imgMeta} />
        </ArtPageLayout>
      </Layout>
  );
};

export default ChristmasTits2020;
