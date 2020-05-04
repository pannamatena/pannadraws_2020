/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import React, {useEffect, useState} from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { css } from '@emotion/core';
import { Dialog } from '@reach/dialog';
import { breakPoints } from '../resources/breakpoints';
import { colours } from '../resources/colors';
import { fonts } from '../resources/fonts';
import { close, arrow } from '../resources/icons';
import Image from './Image';

const MasonryLayout = ({ imgData, imgMeta }) => {
  const [windowInnerH, setWindowInnerH] = useState(0);
  const [headerH, setHeaderH] = useState(0);
  const [showDialog, setShowDialog] = useState(false);
  const [dialogImgData, setDialogImgData] = useState({});
  const [dialogImgMeta, setDialogImgMeta] = useState({});

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
      
      &:hover {
        cursor: pointer;
        color: ${colours.c1_h}
      }
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
    dialog: css`
      padding: 0;
      position: relative;
      margin-bottom: 0;
      
      margin-top: 74px;
      width: 90vw;
      @media ${breakPoints.tabletPortrait} {
        margin-top: 95px;
        width: 80vw;
      }
      @media ${breakPoints.desktopSmall} {
        margin-top: 106px;
        width: 70vw;
      }
    `,
    dialogClose: css`
      svg {
        fill: ${colours.c3};
        position: absolute;
        transition: fill 0.3s ease-out;
        top: 10px;
        
        width: 15px;
        height: 15px;
        right: -25px;
        @media ${breakPoints.tabletPortrait} {
          width: 20px;
          height: 20px;
          right: -35px;
        }
        @media ${breakPoints.desktopSmall} {
          width: 30px;
          height: 30px;
          right: -45px;
        }
      }
      
      &:hover {
        svg {
          fill: ${colours.c1};
        }
      }
    `,
    discount: css`
      text-decoration: line-through;
      padding-right: 3px;
    `,
    dialogContent: css`
      display: flex;
      
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      @media ${breakPoints.tabletLandscape} {
        flex-direction: row;
      }
    `,
    dialogImg: css`
      width: 100%;
      flex: 1;
      
      @media ${breakPoints.tabletLandscape} {
        width: auto;
      }
    `,
    dialogMeta: css`
      color: ${colours.c2};
      min-width: 30%;
      
      padding: 10px 10px 0;
      @media ${breakPoints.tabletPortrait} {
        padding: 15px 15px 0;
      }
      @media ${breakPoints.tabletLandscape} {
        max-width: 35%;
      }
      @media ${breakPoints.desktopSmall} {
        padding: 20px 20px 0;
      }
      
      h2 {
        font-size: 1.2em;
        font-family: ${fonts.f1};
        text-transform: uppercase;
      }
      
      p {
        margin-bottom: 10px;
        @media ${breakPoints.tabletPortrait} {
          margin-bottom: 15px;
        }
        @media ${breakPoints.desktopSmall} {
          margin-bottom: 20px;
        }
      }
    `,
    dialogMetaYear: css`
      color: ${colours.c4};
      display: block;
      margin-bottom: 10px;
      @media ${breakPoints.tabletPortrait} {
        margin-bottom: 15px;
      }
      @media ${breakPoints.desktopSmall} {
        margin-bottom: 20px;
      }
    `,
    dialogActionBtns: css`
      background: ${colours.c5};
      padding: 5px 0;
      @media ${breakPoints.tabletPortrait} {
        padding: 10px 0;
      }
      @media ${breakPoints.desktopSmall} {
        padding: 15px 5px;
      }
      
      & > div,
      p {
        margin: 0 !important;
      }
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

  const calculateHeaderHeight = () => {
    const height = document.getElementById('headerContainer').offsetHeight;
    setHeaderH(height);
  };

  useEffect(() => {
    setWindowInnerH(window.innerHeight);
    resizeAllGridItems();
    calculateHeaderHeight();

    window.addEventListener('resize', resizeAllGridItems);
    window.addEventListener('resize', calculateHeaderHeight);
    return () => {
      window.removeEventListener('resize', resizeAllGridItems);
      window.removeEventListener('resize', calculateHeaderHeight);
    }
  });

  const openDialog = (imgData, imgMeta) => {
    setDialogImgData(imgData);
    setDialogImgMeta(imgMeta);
    setShowDialog(true);
  };

  const closeDialog = () => {
    setDialogImgData({});
    setDialogImgMeta({});
    setShowDialog(false);
  };

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
    return imgData && Object.keys(imgData).map((img, index) => (
        <div className="artGridItem" css={style.artGridItem} key={index}>
          <div className="artGridItem__content">
            <div css={style.artGridImg} onClick={() => openDialog(imgData[img], imgMeta[img])}>
              <Image img={imgData[img].childImageSharp.fluid}/>
            </div>
            <div css={style.artGridMeta}>
              <h5>{imgMeta[img].title}</h5>
              <p css={style.artGridMetaDesc}>{imgMeta[img].description}</p>
              {imgMeta[img].original === 'AVAILABLE' ? (
                  <div css={style.originalBuy}>
                    <Link css={style.buyOBtn} to="/contact" state={{ originalImg: `"${imgMeta[img].title}" - ${imgMeta[img].year}` }}>Buy Original <span css={style.price}>({getPrice(imgMeta[img])})</span></Link>
                  </div>
              ) : (<p css={style.oSold}>Original is sold.</p>)}
              {getPrintStatus(imgMeta[img].prints, imgMeta[img].printUrl)}
            </div>
          </div>
        </div>
    ));
  };

  return (
      <div id="artGridContainer" css={style.artGrid}>
        {renderGridItems()}
        <Dialog css={style.dialog} aria-label="dialog" isOpen={showDialog} onDismiss={closeDialog}>
          <div css={style.dialogContent}>
            <div css={style.dialogImg}>
              <Img
                  fluid={dialogImgData.childImageSharp ? dialogImgData.childImageSharp.fluid : {}}
                  style={{ maxHeight: `${windowInnerH - (headerH + 20)}px` }}
                  imgStyle={{ objectFit: 'contain' }}
              />
            </div>
            <div css={style.dialogMeta}>
              <h2>{dialogImgMeta.title}</h2>
              <span css={style.dialogMetaYear}>{dialogImgMeta.year}</span>
              <p>{dialogImgMeta.description}</p>
              {dialogImgMeta.story !== '' && (<p>{dialogImgMeta.story}</p>)}
              <div css={style.dialogActionBtns}>
                {dialogImgMeta.original === 'AVAILABLE' ? (
                    <div css={style.originalBuy}>
                      <Link css={style.buyOBtn} to="/contact" state={{ originalImg: `"${dialogImgMeta.title}" - ${dialogImgMeta.year}` }}>Buy Original <span css={style.price}>({getPrice(dialogImgMeta)})</span></Link>
                    </div>
                ) : (<p css={style.oSold}>Original is sold.</p>)}
                {getPrintStatus(dialogImgMeta.prints, dialogImgMeta.printUrl)}
              </div>
            </div>
          </div>
          <button css={style.dialogClose} onClick={closeDialog}>{close()}</button>
        </Dialog>
      </div>
  );
};

MasonryLayout.propTypes = {
  imgData: PropTypes.object.isRequired,
  imgMeta: PropTypes.object.isRequired,
};

MasonryLayout.defaultProps = {
  imgData: {},
  imgMeta: {},
};

export default MasonryLayout;
