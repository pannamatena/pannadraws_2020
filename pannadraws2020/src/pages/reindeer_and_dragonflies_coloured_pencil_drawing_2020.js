import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import ArtPageLayout from '../components/ArtPageLayout';
import ArtPage from '../components/ArtPage';

const reindeer_and_dragonflies_2020 = (props) => {
  return (
      <Layout>
        <SEO title="Reindeer and Dragonflies coloured pencil illustration" />
        <ArtPageLayout prevPath={props.location.state.prevPath}>
          <ArtPage imgData={props.location.state.imgData} imgMeta={props.location.state.imgMeta} />
        </ArtPageLayout>
      </Layout>
  );
};

export default reindeer_and_dragonflies_2020;
