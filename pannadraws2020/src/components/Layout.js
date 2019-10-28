/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { css } from "@emotion/core"
import '../resources/index.css';
import { colours } from '../resources/colors';
import { fonts } from '../resources/fonts';
import Header from './Header';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const style = {
    layoutContainer: css`
      flex: 1;
    `,
    footerContainer: css`
      
    `,
  };

  return (
    <div className={style.layoutContainer}>
      <Header />
      <div>
        <main>{children}</main>
        <div className={style.footerContainer}>
          &copy; {new Date().getFullYear()} Panna Zsamba
        </div>
      </div>
    </div>
  )
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout
