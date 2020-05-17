import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import ArtPageLayout from '../components/ArtPageLayout';
import ArtPage from '../components/ArtPage';

const the_dragon_and_the_kirin_2020 = (props) => {
  return (
      <Layout>
        <SEO title="The Dragon and The Kirin fantasy watercolour painting" />
        <ArtPageLayout prevPath={props.location.state.prevPath}>
          <ArtPage imgData={props.location.state.imgData} imgMeta={props.location.state.imgMeta} />
        </ArtPageLayout>
      </Layout>
  );
};

export default the_dragon_and_the_kirin_2020;
