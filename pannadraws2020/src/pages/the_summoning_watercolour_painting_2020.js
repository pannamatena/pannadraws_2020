import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import ArtPageLayout from '../components/ArtPageLayout';
import ArtPage from '../components/ArtPage';

const old_nog_2020 = (props) => {
  return (
      <Layout>
        <SEO title="The Summoning fantasy watercolour painting" />
        <ArtPageLayout prevPath={props.location.state.prevPath}>
          <ArtPage imgData={props.location.state.imgData} imgMeta={props.location.state.imgMeta} />
        </ArtPageLayout>
      </Layout>
  );
};

export default old_nog_2020;
