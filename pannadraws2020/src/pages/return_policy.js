import React from 'react';
import { css } from '@emotion/core';
import { breakPoints } from '../resources/breakpoints';
import { fonts } from '../resources/fonts';
import { colours } from '../resources/colors';
import Layout from '../components/Layout';
import SEO from '../components/Seo';

const ReturnPolicy = () => {
  const style = {
    pageContainer: css`
      max-width: 800px;
      margin: 0 auto;
      font-family: ${fonts.f2};
      padding-top: 20px;
      
      h1 {
        text-transform: uppercase;
        
        font-size: 1.3em;
        margin-bottom: 10px;
        @media ${breakPoints.tabletPortrait} {
          font-size: 1.4em;
          margin-bottom: 15px;
        }
        @media ${breakPoints.desktopSmall} {
          font-size: 1.5em;
          margin-bottom: 20px;
        }
        @media ${breakPoints.desktopLarge} {
          font-size: 2em;
        }
      }
      
      p, li {
        margin-bottom: 10px;
        @media ${breakPoints.tabletPortrait} {
          margin-bottom: 15px;
        }
        @media ${breakPoints.desktopSmall} {
          margin-bottom: 20px;
        }
      }
      
      li {
        position: relative;
        padding-left: 10px;
        @media ${breakPoints.tabletPortrait} {
          padding-left: 15px;
        }
        @media ${breakPoints.desktopSmall} {
          padding-left: 20px;
        }
        
        :before {
          content: '';
          display: block;
          position: absolute;
          top: 7px;
          left: 0;
          width: 8px;
          height: 8px;
          background: ${colours.c1};
          border-radius: 10px;
        }
      }
      
      a {
        color: ${colours.c1};
        
        &:hover {
          color: ${colours.c1_h};
        }
      }
    `,
  };

  return (
  <Layout>
    <SEO title="Return Policy of PannaDraws" />
    <div css={style.pageContainer}>
      <h1>Return Policy</h1>

      <p>Last updated: May 24, 2020</p>

      <p>For complete details on returns please refer to my Etsy shop: <a href="https://www.etsy.com/ie/shop/PannaDraws" target="_blank" title="PannaDraws on Etsy" rel="noopener noreferrer">https://www.etsy.com/ie/shop/PannaDraws</a>.</p>

      <p>PannaDraws accepts returns within 14 days of delivery.</p>

      <p>To initiate a return, please see the following link: <a href="https://help.etsy.com/hc/en-us/articles/115015440807-How-to-Return-or-Exchange-an-Item-on-Etsy?segment=shopping" target="_blank" title="How to initiate a return on Etsy" rel="noopener noreferrer">How to initiate a return on Etsy</a>.</p>

      <p>Alternatively you may send me an email to panna@pannadraws.com and I initiate the return and refund for you. In the message please include:</p>
      <ul>
        <li>Your name</li>
        <li>The title of the artwork</li>
        <li>The date of purchase</li>
        <li>The purchase price (please include a screenshot or photo of the receipt if applicable)</li>
        <li>The reason for requesting a return</li>
        <li>If the art arrived damaged, please include a photo of the damage.</li>
      </ul>

      <h2>Accepted payment methods</h2>
      <p>The accepted payment methods are:</p>
      <ul>
        <li>Credit cards</li>
        <li>Debit cards</li>
        <li>Etsy Gift Cards and Etsy Credits</li>
        <li>Apple Pay</li>
        <li>Google Pay</li>
        <li>Paypal</li>
      </ul>

      <p>For more info see <a href="https://help.etsy.com/hc/en-us/articles/360026831353-What-Payment-Methods-Can-I-Use-to-Check-Out-on-Etsy-?segment=shopping" target="_blank" title="Payment methods on Etsy" rel="noopener noreferrer">this link</a>.</p>
    </div>
  </Layout>
)};

export default ReturnPolicy
