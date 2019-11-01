/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import React from 'react';
import PropTypes from 'prop-types';
import { css } from "@emotion/core"
import '../resources/index.css';
import Header from './Header';

const Layout = ({ children }) => {
  const style = {
    layoutContainer: css`
      flex: 1;
    `,
    footerContainer: css`
      
    `,
  };

  return (
    <div css={style.layoutContainer}>
      <Header />
      <div>
        <main>{children}</main>
        <div css={style.footerContainer}>
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
