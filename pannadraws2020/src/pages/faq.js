import React from 'react';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import { breakPoints } from '../resources/breakpoints';
import { colours } from '../resources/colors';
import { fonts } from '../resources/fonts';
import Layout from '../components/Layout';
import SEO from '../components/Seo';

const FAQPage = () => {
  const style = {
    pageContainer: css`
      max-width: 800px;
      margin: 0 auto;
      font-family: ${fonts.f2};
      padding-top: 20px;
      
      padding-left: 10px;
      padding-right: 10px;
      @media ${breakPoints.tabletPortrait} {
        padding-left: 15px;
        padding-right: 15px;
      }
      @media ${breakPoints.desktopSmall} {
        padding-left: 0;
        padding-right: 0;
      }
      
      h1 {
        font-family: ${fonts.f1};
        text-transform: uppercase;
        
        font-size: 1.5em;
        margin-bottom: 10px;
        @media ${breakPoints.tabletPortrait} {
          font-size: 1.5em;
          margin-bottom: 15px;
        }
        @media ${breakPoints.desktopSmall} {
          font-size: 2em;
          margin-bottom: 20px;
        }
        @media ${breakPoints.desktopLarge} {
          font-size: 2.2em;
        }
      }
      
      h2 {
        font-family: ${fonts.f1};
        text-transform: uppercase;
        
        font-size: 1.3em;
        margin-top: 20px;
        margin-bottom: -10px;
        @media ${breakPoints.tabletPortrait} {
          font-size: 1.4em;
        }
        @media ${breakPoints.desktopSmall} {
          font-size: 1.5em;
          margin-top: 30px;
          margin-bottom: -15px;
        }
        @media ${breakPoints.desktopLarge} {
          font-size: 2em;
          margin-top: 40px;
          margin-bottom: -20px;
        }
      }
      
      h3 {        
        font-size: 1.1em;
        margin-top: 20px;
        @media ${breakPoints.tabletPortrait} {
          font-size: 1.4em;
        }
        @media ${breakPoints.desktopSmall} {
          font-size: 1.4em;
          margin-top: 30px;
        }
        @media ${breakPoints.desktopLarge} {
          font-size: 1.6em;
          margin-top: 40px;
        }
      }
      
      p {
        font-size: 1.2em;
        
        margin-bottom: 10px;
        @media ${breakPoints.tabletPortrait} {
          margin-bottom: 15px;
        }
        @media ${breakPoints.desktopSmall} {
          margin-bottom: 20px;
        }
      }
    `,
    faqLink: css`
      color: ${colours.c1};
      transition: color 0.3s ease-out;
      
      &:hover,
      &:active {
        color: ${colours.c1_h};
      }
    `,
    attention: css`
      color: ${colours.c1};
      font-weight: 600;
    `,
  };

  return (
      <Layout>
        <SEO title="Frequently Asked Questions about buying art on PannaDraws" />
        <div css={style.pageContainer}>
          <h1>Frequently Asked Questions</h1>

          <p css={style.attention}>Please note that delivery of all parcels to the United States is suspended due to COVID-19. Currently
            only A4 sized pictures can be posted there as I pack those in A4 envelopes!</p>

          <h2>General Questions</h2>

          <h3>How do I know the painting is the original?</h3>
          <p>I sign each piece. There is usually a smaller signature in the front,
            and a detailed one including the title at the back. You will also receive a Certificate of Authenticity,
          a document containing details of the artwork and a signature from me.</p>

          <h3>What can I do with my purchased art?</h3>
          <p>You can use it for personal purposes, eg hang it on your wall! But you cannot reproduce
          it, cannot make prints out of it, post or sell as your own... In short I reserve the
          copyright of the artwork. For more information on copyright see the <a css={style.faqLink} href="https://www.cai.ie/?page_id=11" target="_blank" title="How copyright works" rel="noopener noreferrer">Copyright Association
              of Ireland</a>.</p>

          <h3>Is the artwork framed?</h3>
          <p>All artwork ships unmounted and ready to be framed, they fit in standard sized frames.</p>

          <h2>Payments</h2>

          <h3>Does the price include VAT and shipping?</h3>
          <p>The prices displayed for each piece are in Euro and include VAT and shipping.</p>

          <h3>What payment methods do you accept?</h3>
          <p>Payments are made through my <a css={style.faqLink} href="https://www.etsy.com/ie/shop/PannaDraws" target="_blank" title="PannaDraws on Etsy" rel="noopener noreferrer">my Etsy shop</a>. For accepted payment methods please refer to <a css={style.faqLink} href="https://www.etsy.com/ie/shop/PannaDraws" target="_blank" title="PannaDraws on Etsy" rel="noopener noreferrer">my Etsy shop's</a> "Payment Options" section.</p>

          <h2>Packaging and Shipping</h2>

          <h3>What size the package will be?</h3>
          <p>Smaller artwork (A4 size) is packed between cardboard sheets and ships in a standard
            A4 size envelope. Pieces larger than A4 size are sent as a package. Watercolour paintings are always
            packed flat. Dry media artwork larger than A4 is rolled up in a tube and sent as a package.</p>

          <h3>Is my order insured?</h3>
          <p>Insurance and tracking (if available to your country) is added to each parcel.</p>

          <h3>How long will it take for my order to arrive?</h3>
          <p>I post from Ireland. In Ireland the usual handling time is 1-2 business days. To the UK
          it takes 2-3, while to the United States and to most EU countries it can take up to 5-7 business days.</p>
          <p>Because of COVID-19 there's a delay on every delivery, so allow some extra time for your
           parcel to arrive, usually a few days.</p>

          <h2>Returns</h2>

          <h3>Do you accept returns?</h3>
          <p>Of course! I have a <Link css={style.faqLink} to="/return_policy">return policy</Link> for further details.</p>

          <h2>Caring for your art</h2>

          <h3>How do I care for fine art?</h3>
          <p>Watercolour loses saturation over time if exposed to strong heat and UV light. Even though the paintings are coated with a UV
            resistant varnish I would recommend not hanging them in direct sunlight. The
            varnish may give a slightly glossy finish in some places where the paint is thicker.</p>

          <h3>The painting is curled.</h3>
          <p>There is a natural curl to paintings created with water based media. Once framed it's
            not visible.</p>

          <h3>The painting has a white margin around it.</h3>
          <p>This is the blank space masked by the tape I use to hold the paper in place when
            working with wet media. It provides some extra space to hold the picture
            behind a mount.</p>

        </div>
      </Layout>
  );

};

export default FAQPage;
