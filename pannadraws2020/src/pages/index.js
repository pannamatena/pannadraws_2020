import React from 'react';
import Layout from '../components/Layout';
import Gallery from '../components/Gallery';
import SEO from '../components/Seo';

const App = () => {
  return (
      <Layout>
        <SEO title="Art Portfolio of Panna Zsamba" />
        <Gallery />
      </Layout>
  );
};

export default App;
