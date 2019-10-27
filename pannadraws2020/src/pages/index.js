import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import Image from '../components/Image';
import SEO from '../components/Seo';

const App = () => (
  <Layout>
    <SEO title="Art Portfolio of Panna Zsamba" />
    <div>
      <Image />
    </div>
  </Layout>
);

export default App;
