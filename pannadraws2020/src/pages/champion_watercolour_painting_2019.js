import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import ArtPageLayout from '../components/ArtPageLayout';
import ArtPage from '../components/ArtPage';

const champion_2019 = (props) => {
  return (
      <Layout>
        <SEO title="Champion watercolour horse portrait" />
        <ArtPageLayout prevPath={props.location.state.prevPath}>
          <ArtPage imgData={props.location.state.imgData} imgMeta={props.location.state.imgMeta} />
        </ArtPageLayout>
      </Layout>
  );
};

export default champion_2019;
