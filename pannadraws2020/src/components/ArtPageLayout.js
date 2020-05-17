import React from 'react';
import PropTypes from 'prop-types';
import { css } from "@emotion/core"
import { breakPoints } from '../resources/breakpoints';
import { colours } from '../resources/colors';
import { fonts } from '../resources/fonts';
import '@reach/dialog/styles.css';
import '../resources/index.css';

const ArtPageLayout = (props) => {
  const style = {
    pageContainer: css`
      margin: 0 auto;
      font-family: ${fonts.f2};
      padding-top: 20px;
      
      max-width: 800px;
      padding-left: 10px;
      padding-right: 10px;
      @media ${breakPoints.tabletPortrait} {
        padding-left: 15px;
        padding-right: 15px;
      }
      @media ${breakPoints.desktopSmall} {
        max-width: 1000px;
        padding-left: 0;
        padding-right: 0;
      }
    `,
    topNav: css`
      padding: 10px 10px 0;
      @media ${breakPoints.tabletPortrait} {
        padding: 15px 15px 0;
      }
      @media ${breakPoints.desktopSmall} {
        padding: 20px 20px 0;
      }
      
      span {
        display: inline-block;
        background: ${colours.c2};
        color: ${colours.c3};
        font-family: ${fonts.f1};
        text-transform: uppercase;
        padding: 5px 10px;
        
        &:hover,
        &:active {
          background: ${colours.c2_h};
          cursor: pointer;
        }
      }
    `,
  };

  return (
    <>
      <div css={style.topNav}>
        <span onClick={() => {window.location = props.prevPath;}}>{`< Back`}</span>
      </div>
      <div css={style.pageContainer}>{props.children}</div>
    </>
  )
};

ArtPageLayout.propTypes = {
  prevPath: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default ArtPageLayout;
