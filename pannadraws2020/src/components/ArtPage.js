import React, {useEffect, useState} from 'react';
import { css } from "@emotion/core"
import Img from 'gatsby-image';
import { Dialog } from '@reach/dialog';
import { Link } from 'gatsby';
import { close, arrow } from '../resources/icons';
import { breakPoints } from '../resources/breakpoints';
import { colours } from '../resources/colors';
import { fonts } from '../resources/fonts';

const ArtPage = (props) => {
  const [windowInnerH, setWindowInnerH] = useState(0);
  const [headerH, setHeaderH] = useState(0);
  const [showDialog, setShowDialog] = useState(false);
  const [dialogImgData, setDialogImgData] = useState({});

  const calculateHeaderHeight = () => {
    const height = document.getElementById('headerContainer').offsetHeight;
    setHeaderH(height);
  };

  useEffect(() => {
    setWindowInnerH(window.innerHeight);
    calculateHeaderHeight();

    window.addEventListener('resize', calculateHeaderHeight);
    return () => {
      window.removeEventListener('resize', calculateHeaderHeight);
    }
  });

  const style = {
    artPage: css`
      display: flex;
      align-items: flex-start;
      
      flex-direction: column;
      justify-content: center;
      @media ${breakPoints.tabletLandscape} {
        flex-direction: row;
        justify-content: stretch;
      }
    `,
    artPageImgs: css`
      width: 100%;
      flex: 1;
      @media ${breakPoints.tabletLandscape} {
        width: auto;
      }
    `,
    artPageMainImg: css`
      
    `,
    artPageDetails: css`
      color: ${colours.c2};
      min-width: 30%;
      
      padding: 10px 10px 0;
      @media ${breakPoints.tabletPortrait} {
        padding: 15px 15px 0;
      }
      @media ${breakPoints.tabletLandscape} {
        max-width: 40%;
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
    artPageYear: css`
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
    originalBuy: css`
      background: ${colours.c5};
      margin: 0 -10px;
      padding: 5px 10px 0;
    `,
    printBuy: css`
      background: ${colours.c5};
      margin: 0 -10px;
      padding: 10px 10px 0;
    `,
    price: css``,
    priceSubline: css`
      display: block;
      font-size: 0.9em;
      padding-bottom: 5px;
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
      background: ${colours.c_success};
      color: ${colours.c3};
      font-size: .8em;
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
      padding: 10px 10px 0;
    `,
    actionBtns: css`
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
    discount: css`
      text-decoration: line-through;
      padding-right: 3px;
    `,
    artStory: css`
      a {
        color: ${colours.c1};
        
        &:hover,
        &:active {
          color: ${colours.c1_h};
        }
      }
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
    dialogImg: css`
      width: 100%;
      flex: 1;
      
      @media ${breakPoints.tabletLandscape} {
        width: auto;
      }
    `,
  };

  const openDialog = (imgData) => {
    setDialogImgData(imgData);
    setShowDialog(true);
  };

  const closeDialog = () => {
    setDialogImgData({});
    setShowDialog(false);
  };

  const getPrintStatus = (printVal, printUrl) => {
    switch (printVal) {
      case 'AVAILABLE': {
        return (
            <div css={style.printBuy}>
              <a css={style.buyPBtn} href={printUrl} target="_blank" rel="noopener noreferrer" title="PannaDraws on Society6">Buy prints (from € 26.95 + shipping)<span>{arrow()}</span></a>
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

  const getActionControls = (imgMeta) => {
    if (imgMeta.type === 'adult_colouring') {
      return (
          <div css={style.originalBuy}>
            <a
                css={style.buyOBtn}
                href={imgMeta.buyUrl}
                title={`${imgMeta.title} colouring for adults`}
                target="_blank"
                rel="noopener noreferrer"
            >Buy on Etsy <span css={style.price}>{arrow()}</span></a>
            <span css={style.priceSubline}>(from {getPrice(imgMeta)} + shipping)</span>
          </div>
      );
    }
    return (<>
      {imgMeta.original === 'AVAILABLE' ? (
          <div css={style.originalBuy}>
            <a
                css={style.buyOBtn}
                href={imgMeta.buyUrl}
                title={`${imgMeta.title} original artwork for sale`}
                target="_blank"
                rel="noopener noreferrer"
            >Buy original on Etsy <span css={style.price}>
                      ({getPrice(imgMeta)})
              {arrow()}
                    </span></a>
            <span css={style.freeShip}>+ FREE shipping</span>
          </div>
      ) : (<p css={style.oSold}>Original is sold.</p>)}
      {getPrintStatus(imgMeta)}
    </>);
  };

  function createMarkup(story) {
    return {__html: story};
  }

  return (
      <div css={style.artPage}>
        <div css={style.artPageImgs}>
          <div css={style.artPageMainImg} onClick={() => openDialog(props.imgData)}>
            <Img fluid={props.imgData.childImageSharp ? props.imgData.childImageSharp.fluid : {}} alt={`${props.imgMeta.title} - artwork by PannaDraws`} />
          </div>
        </div>
        <div css={style.artPageDetails}>
          <h2>{props.imgMeta.title}</h2>
          <span css={style.artPageYear}>{props.imgMeta.year}</span>
          <p>{props.imgMeta.description}</p>
          {props.imgMeta.story !== '' && (<p css={style.artStory} dangerouslySetInnerHTML={createMarkup(props.imgMeta.story)} />)}
          <div css={style.actionBtns}>
            {getActionControls(props.imgMeta)}
          </div>
        </div>

        <Dialog css={style.dialog} aria-label="dialog" isOpen={showDialog} onDismiss={closeDialog}>
          <div css={style.dialogImg}>
            <Img
                fluid={dialogImgData.childImageSharp ? dialogImgData.childImageSharp.fluid : {}}
                style={{ maxHeight: `${windowInnerH - (headerH + 20)}px` }}
                imgStyle={{ objectFit: 'contain' }}
            />
          </div>
          <button css={style.dialogClose} onClick={closeDialog}>{close()}</button>
        </Dialog>

      </div>
  );
};

export default ArtPage;
