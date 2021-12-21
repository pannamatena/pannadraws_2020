import React from 'react';
import { css } from '@emotion/core';
// import { Gallery } from 'gatsby-theme-gallery';
import Layout from '../components/Layout';
import SEO from '../components/Seo';

const SketchbookPage = () => {
  const style = {
    galleryContainer: css`
      max-width: 1500px;
      margin: 0 auto;
    `,
  };


  return (
  <Layout>
    <SEO title="Sketches of animals, dragons and fantasy creatures by PannDraws" />
    <script>
      fbq('track', 'Art_sketch');
    </script>
    <div css={style.galleryContainer}>
      {/*<Gallery />*/}
    </div>
  </Layout>
)};

export default SketchbookPage
