import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import ArtPageLayout from '../components/ArtPageLayout';
import ArtPage from '../components/ArtPage';
import animalArtMeta from '../resources/animalArtMeta';

const ChristmasRobins2020 = (props) => {
  const imgData = useStaticQuery(graphql`
    query {
        queryData: file(relativePath: { eq: "2020/christmas_robins_2020.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        },
      }
   `);
  const imgMeta = animalArtMeta.christmas_robins_2020;

  return (
      <Layout>
        <SEO title="Christmas Robins 2020 greeting card design watercolour painting" />
        <ArtPageLayout prevPath={props.location.state ? props.location.state.prevPath : '/'}>
          <ArtPage imgData={imgData.queryData} imgMeta={imgMeta} />
        </ArtPageLayout>
      </Layout>
  );
};

export default ChristmasRobins2020;
