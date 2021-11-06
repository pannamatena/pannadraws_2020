import React from 'react';
import { css } from "@emotion/core"
import {Link} from "gatsby";
import { arrow } from '../resources/icons';
import { breakPoints } from '../resources/breakpoints';
import { colours } from '../resources/colors';
import { fonts } from '../resources/fonts';

const ArtActionControls = (props) => {

  const style = {
    artActionControls: css`
      background: ${colours.c5};
      padding: 5px 0;
      margin: 0 -5px;
      @media ${breakPoints.tabletPortrait} {
        padding: 10px;
        margin: 0 -10px;
      }
      @media ${breakPoints.desktopSmall} {
        padding: 15px;
        margin: 0 -10px;
      }
    `,
    discount: css`
      text-decoration: line-through;
      padding-right: 3px;
    `,
    merchDiscount: css`
      font-weight: bold;
      color: ${colours.c1};
    `,
    discountPrint: css`
      text-decoration: line-through;
      padding-right: 3px;
    `,
    originalBuy: css`
      background: ${colours.c5};
      padding: 5px 0 0;
    `,
    printBuy: css`
      background: ${colours.c5};
      padding: 10px 0 0;
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
    subText: css`
      display: block;
      color: ${colours.c2};
      font-family: ${fonts.f2};
      font-size: 0.8em;
      text-transform: none;
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
    price: css``,
    priceSubline: css`
      display: block;
      font-size: 0.9em;
      padding-bottom: 5px;
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
    oSoon: css`
      color: ${colours.c2};
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
    freeShip: css`
      display: inline-block;
      padding: 3px;
      background: ${colours.c_success};
      color: ${colours.c3};
      font-size: .8em;
    `,
    merchSection: css`
      border-top: 1px solid ${colours.c4};
    
      margin-top: 10px;
      padding-top: 5px;
      @media ${breakPoints.tabletPortrait} {
        margin-top: 15px;
        padding-top: 10px;
      }
      @media ${breakPoints.desktopSmall} {
        margin-top: 20px;
        padding-top: 15px;
      }
    `,
    merchItem: css`
      margin-bottom: 5px;
    
      a {
        display: block;
        color: ${colours.c2};
        transition: color 0.2s ease;
        font-family: ${fonts.f1};
        font-size: 1em;
        text-transform: uppercase;
        
        svg {
          width: 10px;
          height: 10px;
          transform: rotate(-45deg);
          fill: ${colours.c2};
          transition: fill 0.3s ease-out;
        }
        
        &:hover {
          cursor: pointer;
          color: ${colours.c1};
          
          svg {
            fill: ${colours.c1};
          }
        }
      }
      
      > span {
        display: block;
        font-size: 0.8em;
      }
    `,
  };

  const getPrice = () => {
    const price = props.imgMeta.price;
    let discountedPrice;
    if (props.imgMeta.discount) {
      discountedPrice = ((price / 100) * (100 - props.imgMeta.discount)).toFixed(2);
      return (
          <span>
            <span css={style.discount}>€ {price}</span>
            € {discountedPrice}
          </span>
      );
    }
    return `€ ${price}`;
  };

  const getPrintPrice = () => {
    const price = props.imgMeta.printPrice || 26.95;
    let discountedPrice = ((price / 100) * (100 - props.imgMeta.discountPrint)).toFixed(3);
    discountedPrice = discountedPrice.substring(0, discountedPrice.length - 1);
    if (props.imgMeta.discountPrint) {
      return (
          <span>
            <span css={style.discountPrint}>€ {price}</span>
            € {discountedPrice}
          </span>
      );
    }
    return `€ ${price}`;
  };

  const getOriginalSection = () => {
    if (props.imgMeta.type === 'merchandise') {
      return (
          <div css={style.originalBuy}>
            <a
                css={style.buyOBtn}
                href={props.imgMeta.buyUrl}
                title={props.imgMeta.title}
                target="_blank"
                rel="noopener noreferrer"
            >Buy on Etsy <span css={style.price}>{arrow()}</span></a>
            <span css={style.priceSubline}>(from {getPrice()} + shipping)</span>
          </div>
      );
    }

    if (props.imgMeta.type === 'adult_colouring') {
      return (
          <div css={style.originalBuy}>
            <a
                css={style.buyOBtn}
                href={props.imgMeta.buyUrl}
                title={`${props.imgMeta.title} colouring for adults`}
                target="_blank"
                rel="noopener noreferrer"
            >Buy on Etsy <span css={style.price}>{arrow()}</span></a>
            <span css={style.priceSubline}>(from {getPrice()}{props.imgMeta.subType !== 'digital' ? ' + shipping' : null})</span>
          </div>
      );
    }

    switch (props.imgMeta.original) {
      case 'AVAILABLE': {
        return (
            <div css={style.originalBuy}>
              <a
                  css={style.buyOBtn}
                  href={props.imgMeta.buyUrl}
                  title={`${props.imgMeta.title} original artwork for sale`}
                  target="_blank"
                  rel="noopener noreferrer"
              >Buy original on Etsy <span css={style.price}>
                      ({getPrice()})
                {arrow()}
                    </span></a>
              {props.imgMeta.ship && props.imgMeta.ship === 'FREE' && (<span css={style.freeShip}>+ FREE shipping</span>)}
              {props.imgMeta.ship && props.imgMeta.ship === 'FREE_IRL_UK_USA' && (<span css={style.freeShip}>+ FREE shipping to Ireland, UK, USA</span>)}
              {props.imgMeta.ship && props.imgMeta.ship === 'FREE_IRL_UK' && (<span css={style.freeShip}>+ FREE shipping to Ireland and UK</span>)}
              {props.imgMeta.ship && props.imgMeta.ship === 'FREE_IRL' && (<span css={style.freeShip}>+ FREE shipping to Ireland</span>)}
            </div>
        )
      }
      case 'NOTYET': {
        return (
            <p css={style.oSoon}>Original is soon available!</p>
        )
      }
      case 'MSG': {
        return (
            <div css={style.originalBuy}>
              <Link css={style.buyOBtn} to="/contact/">Message me for purchase inquiry</Link>
            </div>
        )
      }
      case 'HAMBLY': {
        return (
            <div css={style.originalBuy}>
              <a
                  css={style.buyOBtn}
                  href={'http://hamblyandhambly.com/'}
                  title={`${props.imgMeta.title} original artwork for sale`}
                  target="_blank"
                  rel="noopener noreferrer"
              >Original is available <span css={style.price}>{arrow()}</span>
                <span css={style.subText}>from Hambly & Hambly Art Gallery</span>
              </a>
            </div>
        )
      }
      default: {
        return (
            <p css={style.oSold}>Original is sold.</p>
        )
      }
    }
  };

  const getPrintSection = () => {
    if (props.imgMeta.type === 'merchandise' || props.imgMeta.subType === 'digital') {
      return null;
    }

    switch (props.imgMeta.prints) {
      case 'AVAILABLE': {
        return (
            <div css={style.printBuy}>
              <a css={style.buyPBtn} href={props.imgMeta.printUrl} target="_blank" rel="noopener noreferrer" title="PannaDraws on Etsy">Buy prints (from {getPrintPrice()} + shipping)<span>{arrow()}</span></a>
            </div>
        )
      }
      case 'NOTYET': {
        return (
            <p css={style.pSold}>Prints are not available.</p>
        )
      }
      default: {
        return (
            <p css={style.pSold}>Prints are no longer available.</p>
        )
      }
    }
  };

  const getMerchPrice = (merch) => {
    let discountedPrice;
    if (merch.discount) {
      discountedPrice = ((merch.price / 100) * (100 - merch.discount)).toFixed(2);
      return (
          <span>
            <span css={style.discount}>€ {merch.price}</span>
            <span css={style.merchDiscount}>€ {discountedPrice}</span>
          </span>
      );
    }
    return `€ ${merch.price}`;
  };

  const getMerchSection = () => {
    return (props.imgMeta.merch && props.imgMeta.merch.length > 0) ? (
        <div css={style.merchSection}>
          {props.imgMeta.merch.map(merch => (
              <div css={style.merchItem} key={merch.url}>
                <a href={merch.url} target="_blank" rel="noopener noreferrer" title={`${merch.name} by PannaDraws on Etsy`}>{merch.name} {arrow()}</a>
                <span>(from {getMerchPrice(merch)} + shipping)</span>
              </div>
          ))}
        </div>
    ) : null;
  };

  return (
      <div css={style.artActionControls}>
        {getOriginalSection()}
        {getPrintSection()}
        {getMerchSection()}
      </div>
  );
};

export default ArtActionControls;
