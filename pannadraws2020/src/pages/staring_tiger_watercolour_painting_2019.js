import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import ArtPageLayout from '../components/ArtPageLayout';
import ArtPage from '../components/ArtPage';

const staring_tiger_2019 = (props) => {
  return (
      <Layout>
        <SEO title="Staring Tiger watercolour illustration" />
        <ArtPageLayout prevPath={props.location.state ? props.location.state.prevPath : '/'}>
          <ArtPage imgData={props.location.state ? props.location.state.imgData : []} imgMeta={props.location.state ? props.location.state.imgMeta : {}} />
        </ArtPageLayout>
      </Layout>
  );
};

export default staring_tiger_2019;
