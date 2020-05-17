import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import ArtPageLayout from '../components/ArtPageLayout';
import ArtPage from '../components/ArtPage';

const peacock_girls_2020 = (props) => {
  return (
      <Layout>
        <SEO title="Peacock Girls coloured pencil bird art" />
        <ArtPageLayout prevPath={props.location.state ? props.location.state.prevPath : '/'}>
          <ArtPage imgData={props.location.state ? props.location.state.imgData : []} imgMeta={props.location.state ? props.location.state.imgMeta : {}} />
        </ArtPageLayout>
      </Layout>
  );
};

export default peacock_girls_2020;
