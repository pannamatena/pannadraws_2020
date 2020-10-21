import React, {useEffect, useState} from 'react';
import { css } from "@emotion/core"
import Img from 'gatsby-image';
import { Dialog } from '@reach/dialog';
import ArtActionControls from './ArtActionControls';
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
    artPageMainImg: css``,
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
          <ArtActionControls imgMeta={props.imgMeta} />
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
