import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import ArtPageLayout from '../components/ArtPageLayout';
import ArtPage from '../components/ArtPage';

const wingspan_2020 = (props) => {
  return (
      <Layout>
        <SEO title="Wingspan watercolour bird painting" />
        <ArtPageLayout prevPath={props.location.state.prevPath}>
          <ArtPage imgData={props.location.state.imgData} imgMeta={props.location.state.imgMeta} />
        </ArtPageLayout>
      </Layout>
  );
};

export default wingspan_2020;
