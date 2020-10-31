/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import React, { useEffect } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import ArtActionControls from './ArtActionControls';
import { colours } from '../resources/colors';
import { fonts } from '../resources/fonts';
import Image from './Image';

const MasonryLayout = (props) => {
  const style = {
    artGrid: css`
      display: grid;
      grid-gap: 10px;
      grid-template-columns: repeat(auto-fill, minmax(300px,1fr));
      grid-auto-rows: 50px;
    `,
    artGridItem: css`
      margin: 10px;
      padding: 10px;
      background: ${colours.c5};
    `,
    artGridImg: css`
      display: block;
      width: 100%;
      border: 2px solid transparent;
      transition: border-color 0.3s ease-out;
      
      &:hover {
        cursor: pointer;
        border-color: ${colours.c1}
      }
    `,
    artGridMeta: css`
      padding: 10px 0;
      
      h5 {
        font-size: 1.2em;
        font-family: ${fonts.f1};
        text-transform: uppercase;
      }
    `,
    artGridMetaDesc: css`
      font-size: 0.9em;
    `,
  };

  const resizeGridItem = (item, index) => {
    if (window) {
      const grid = document.getElementById('artGridContainer');
      const rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
      const rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
      const rowSpan = Math.ceil(
          (item.querySelector('.artGridItem__content').getBoundingClientRect().height + rowGap)
          / (rowHeight + rowGap)
      );
      item.style.gridRowEnd = 'span ' + rowSpan;
    }
  };

  const resizeAllGridItems = () => {
    const allItems = document.getElementsByClassName('artGridItem');
    for(let i = 0; i < allItems.length; i++){
      resizeGridItem(allItems[i], i);
    }
  };

  useEffect(() => {
    resizeAllGridItems();

    window.addEventListener('resize', resizeAllGridItems);
    return () => {
      window.removeEventListener('resize', resizeAllGridItems);
    }
  });

  const renderGridItems = () => {
    const imgNames = Object.keys(props.imgData);

    return props.imgData && imgNames.map((img, index) => {

      if (props.imgMeta[img].type === 'merchandise') {
        return (
            <div className="artGridItem" css={style.artGridItem} key={index}>
              <div className="artGridItem__content">
                <Image img={props.imgData[img].childImageSharp.fluid}/>
                <div css={style.artGridMeta}>
                  <h5>{props.imgMeta[img].title}</h5>
                  <p css={style.artGridMetaDesc}>{props.imgMeta[img].description}</p>
                  <ArtActionControls imgMeta={props.imgMeta[img]} />
                </div>
              </div>
            </div>
        );
      }

      return (
          <div className="artGridItem" css={style.artGridItem} key={index}>
            <div className="artGridItem__content">
              <Link
                  css={style.artGridImg}
                  to={`/${imgNames[index]}_${props.imgMeta[img].type}_${props.imgMeta[img].year}`}
                  state={{ prevPath: props.path }}
              >
                <Image img={props.imgData[img].childImageSharp.fluid}/>
              </Link>
              <div css={style.artGridMeta}>
                <h5>{props.imgMeta[img].title}</h5>
                <p css={style.artGridMetaDesc}>{props.imgMeta[img].description}</p>
                <ArtActionControls imgMeta={props.imgMeta[img]} />
              </div>
            </div>
          </div>
      )
    });
  };

  return (
      <div id="artGridContainer" css={style.artGrid}>
        {renderGridItems()}
      </div>
  );
};

MasonryLayout.propTypes = {
  imgData: PropTypes.object.isRequired,
  imgMeta: PropTypes.object.isRequired,
  path: PropTypes.string.isRequired,
};

MasonryLayout.defaultProps = {
  imgData: {},
  imgMeta: {},
  path: '',
};

export default MasonryLayout;
