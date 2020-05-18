import React from 'react';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Image = ({ img, alt, caption }) => {
  const style = {
    imgContainer: css`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: #f3f3f3;
      border: 1px solid #e6e6e6;
      
      .gatsby-image-wrapper {
        width: 100%;
      }
      
      img {
        display: inline-block;
        padding: 5px;
      }
      
      span {
        font-size: 0.8em;
        padding: 5px;
      }
    `,
  };

  return (
      <div css={style.imgContainer}>
        <Img fluid={img} alt={alt} />
        {caption !== '' && (<span>{caption}</span>)}
      </div>
  );
};

Image.propTypes = {
  img: PropTypes.object || PropTypes.string,
  alt: PropTypes.string,
  caption: PropTypes.string,
};

Image.defaultProps = {
  img: {},
  alt: '',
  caption: '',
};

export default Image
