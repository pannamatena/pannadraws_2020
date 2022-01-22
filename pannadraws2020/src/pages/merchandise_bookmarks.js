import React from 'react';
import {graphql, useStaticQuery} from "gatsby";
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import MasonryLayout from '../components/MasonryLayout';

const MerchandiseBookmarks = (props) => {
  const imgData = useStaticQuery(graphql`
    query {
      swans_of_ireland_2021_bookmark: file(relativePath: { eq: "merch/swans_of_ireland_2021_bookmark.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      dragon_dance_2020_bookmark: file(relativePath: { eq: "merch/dragon_dance_2020_bookmark.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
    }
  `);

  const merchandiseBookmarksMeta = {
    swans_of_ireland_2021_bookmark: {
      title: 'Swans of Ireland Bookmark Set',
      year: '2021',
      description: 'Set of 3 paper bookmarks with tassel and rose charm.',
      price: 4.50,
      original: 'AVAILABLE',
      buyUrl: 'https://www.etsy.com/ie/listing/964814293/',
      discount: 0,
      type: 'merchandise',
    },
    dragon_dance_2020_bookmark: {
      title: 'Dragon Dance Bookmark Set',
      year: '2020',
      description: 'Set of 3 paper bookmarks with tassel and feather charm.',
      price: 4.50,
      original: 'AVAILABLE',
      buyUrl: 'https://www.etsy.com/ie/listing/904511925/',
      discount: 0,
      type: 'merchandise',
    },
  };

  return (
    <Layout>
      <SEO title="T-shirts and stationary with Panna Zsamba's artwork" />
      <MasonryLayout imgData={imgData} imgMeta={merchandiseBookmarksMeta} path={props.path} />
    </Layout>
  );
};

export default MerchandiseBookmarks;
