import React from 'react';
import { Gallery } from 'gatsby-theme-gallery';
import { css } from '@emotion/core';
import Layout from '../components/Layout';
import SEO from '../components/Seo';

const App = () => {
  const style = {
    galleryContainer: css`
      max-width: 1500px;
      margin: 0 auto;
    `,
  };

  return (
      <Layout>
        <SEO title="Art Portfolio of Panna Zsamba" />
        <div css={style.galleryContainer}>
          <Gallery />
        </div>
      </Layout>
  );
};

export default App;
