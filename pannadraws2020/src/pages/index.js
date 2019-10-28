import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/Layout';
import Image from '../components/Image';
import SEO from '../components/Seo';

const App = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
      <Layout>
        <SEO title="Art Portfolio of Panna Zsamba" />
        <div>
          <Image img={data.placeholderImage.childImageSharp.fluid}/>
        </div>
      </Layout>
  );
};

export default App;
