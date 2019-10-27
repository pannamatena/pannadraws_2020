import React from "react"
import { Link } from "gatsby"
import Layout from '../components/Layout';
import Image from '../components/Image';
import SEO from '../components/Seo';

const App = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/about/">About</Link>
  </Layout>
);

export default App;
