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
import { colours } from '../resources/colors';
import { fonts } from '../resources/fonts';
import { arrow } from '../resources/icons';
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
    originalBuy: css`
      background: ${colours.c5};
      margin: 0 -10px;
      padding: 5px 10px 0;
    `,
    printBuy: css`
      background: ${colours.c5};
      margin: 0 -10px;
      padding: 5px 10px 0;
    `,
    price: css`
      
    `,
    buyOBtn: css`
      display: block;
      color: ${colours.c1};
      transition: color 0.2s ease;
      font-family: ${fonts.f1};
      font-size: 1.2em;
      text-transform: uppercase;
      
      span {
        svg {
          width: 10px;
          height: 10px;
          transform: rotate(-45deg);
          fill: ${colours.c1};
          transition: fill 0.3s ease-out;
          margin-left: 3px;
        }
      }
      
      &:hover {
        cursor: pointer;
        color: ${colours.c1_h}
        
        svg {
          fill: ${colours.c1_h};
        }
      }
    `,
    freeShip: css`
      display: inline-block;
      padding: 3px;
      margin-top: 3px;
      background: ${colours.c_success};
      color: ${colours.c3};
      font-size: .8em;
      float: right;
    `,
    buyPBtn: css`
      display: block;
      color: ${colours.c2};
      transition: color 0.2s ease;
      font-family: ${fonts.f1};
      font-size: 1em;
      text-transform: uppercase;
      
      span {
        svg {
          width: 10px;
          height: 10px;
          transform: rotate(-45deg);
          fill: ${colours.c2};
          transition: fill 0.3s ease-out;
        }
      }
      
      &:hover {
        cursor: pointer;
        color: ${colours.c1};
        
        svg {
          fill: ${colours.c1};
        }
      }
    `,
    oSold: css`
      color: ${colours.c4};
      font-family: ${fonts.f1};
      font-size: 1em;
      text-transform: uppercase;
      
      background: ${colours.c5};
      margin: 0 -10px;
      padding: 0 10px;
    `,
    pSold: css`
      color: ${colours.c4};
      font-family: ${fonts.f1};
      font-size: 1em;
      text-transform: uppercase;
      
      background: ${colours.c5};
      margin: 0 -10px;
      padding: 0 10px;
    `,
    discount: css`
      text-decoration: line-through;
      padding-right: 3px;
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

  const getPrintStatus = (printVal, printUrl) => {
    switch (printVal) {
      case 'AVAILABLE': {
        return (
            <div css={style.printBuy}>
              <a css={style.buyPBtn} href={printUrl} target="_blank" rel="noopener noreferrer" title="PannaDraws on Society6">Buy prints <span>{arrow()}</span></a>
            </div>
        )
      }
      case 'NOTYET': {
        return (
            <p css={style.pSold}>Prints are not released yet.</p>
        )
      }
      default: {
        return (
            <p css={style.pSold}>Prints are no longer available.</p>
        )
      }
    }
  };

  const getPrice = (imgMeta) => {
    const price = imgMeta.price;
    if (imgMeta.discount) {
      return (
          <span>
            <span css={style.discount}>€ {price}</span>
            € {(price / 100) * (100 - imgMeta.discount)}
          </span>
      );
    }
    return `€ ${price}`;
  };

  const renderGridItems = () => {
    const imgNames = Object.keys(props.imgData);
    return props.imgData && imgNames.map((img, index) => (
        <div className="artGridItem" css={style.artGridItem} key={index}>
          <div className="artGridItem__content">
            <Link
                css={style.artGridImg}
                to={`/${imgNames[index]}_${props.imgMeta[img].type}_${props.imgMeta[img].year}`}
                state={{ imgData: props.imgData[img], imgMeta: props.imgMeta[img], prevPath: props.path }}
            >
              <Image img={props.imgData[img].childImageSharp.fluid}/>
            </Link>
            <div css={style.artGridMeta}>
              <h5>{props.imgMeta[img].title}</h5>
              <p css={style.artGridMetaDesc}>{props.imgMeta[img].description}</p>
              {props.imgMeta[img].original === 'AVAILABLE' ? (
                  <div css={style.originalBuy}>
                    <span css={style.freeShip}>+ FREE shipping</span>
                    <a
                        css={style.buyOBtn}
                        href={props.imgMeta[img].buyUrl}
                        title={`${props.imgMeta[img].title} original artwork for sale`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >Buy original on Etsy <span css={style.price}>
                      ({getPrice(props.imgMeta[img])})
                      {arrow()}
                    </span></a>
                  </div>
              ) : (<p css={style.oSold}>Original is sold.</p>)}
              {getPrintStatus(props.imgMeta[img].prints, props.imgMeta[img].printUrl)}
            </div>
          </div>
        </div>
    ));
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
