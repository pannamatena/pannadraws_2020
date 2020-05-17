import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import ArtPageLayout from '../components/ArtPageLayout';
import ArtPage from '../components/ArtPage';

const red_pompoms_2019 = (props) => {
  return (
      <Layout>
        <SEO title="Red Pompoms watercolour painting" />
        <ArtPageLayout prevPath={props.location.state ? props.location.state.prevPath : '/'}>
          <ArtPage imgData={props.location.state ? props.location.state.imgData : []} imgMeta={props.location.state ? props.location.state.imgMeta : {}} />
        </ArtPageLayout>
      </Layout>
  );
};

export default red_pompoms_2019;
