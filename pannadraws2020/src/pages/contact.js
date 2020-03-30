import React, {useState} from 'react';
import { css } from '@emotion/core';
import { breakPoints } from '../resources/breakpoints';
import { colours } from '../resources/colors';
import { fonts } from '../resources/fonts';
import Layout from '../components/Layout';
import Checkbox from '../components/Checkbox';
import SEO from '../components/Seo';
import {Link} from "gatsby";

const ContactPage = (props) => {
  const getValue = () => {
    if (props.location.state && props.location.state.printImg) {
      return `Inquiry about art print ${props.location.state.printImg}`;
    }
    if (props.location.state && props.location.state.originalImg) {
      return `Inquiry about original art ${props.location.state.originalImg}`;
    }
    return '';
  };
  const [subjectVal, setSubjectVal] = useState(getValue());
  const [consentVal, setConsentVal] = useState(false);

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
        margin-bottom: 10px;
        @media ${breakPoints.tabletPortrait} {
          font-size: 1.4em;
        }
        @media ${breakPoints.desktopSmall} {
          font-size: 1.5em;
          margin-top: 30px;
          margin-bottom: 15px;
        }
        @media ${breakPoints.desktopLarge} {
          font-size: 2em;
          margin-top: 40px;
          margin-bottom: 20px;
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
    contactForm: css`
      display: block;
      width: 100%;
      
      a {
        color: ${colours.c1};
        
        &:hover {
          color: ${colours.c1_h};
        }
      }
    `,
    contactFormRow: css`
      margin-bottom: 10px;
      @media ${breakPoints.tabletPortrait} {
        margin-bottom: 15px;
      }
      @media ${breakPoints.desktopSmall} {
        margin-bottom: 20px;
      }
        
      label {
        display: block;
        font-size: 1.2em;
      }
      
      input[type="text"] {
        display: block;
        width: 70%;
        background: ${colours.c2};
        color: ${colours.c3};
        font-family: ${fonts.f2};
        font-size: 1em;
        border-bottom: 3px solid ${colours.c2};
        transition: border-color 0.3s ease-out;
        
        padding: 8px;
        @media ${breakPoints.tabletPortrait} {
          padding: 13px;
        }
        @media ${breakPoints.desktopSmall} {
          padding: 18px;
        }
        
        &:focus {
          border-color: ${colours.c1};
        }
      }
      
      textarea {
        display: block;
        width: 100%;
        background: ${colours.c2};
        color: ${colours.c3};
        font-family: ${fonts.f2};
        font-size: 1em;
        border-bottom: 3px solid ${colours.c2};
        transition: border-color 0.3s ease-out;
        
        padding: 8px;
        @media ${breakPoints.tabletPortrait} {
          padding: 13px;
        }
        @media ${breakPoints.desktopSmall} {
          padding: 18px;
        }
        
        &:focus {
          border-color: ${colours.c1};
        }
      }
    `,
    contactFormActions: css`
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;
    `,
    submitBtn: css`
      display: block;
      background: ${colours.c1};
      color: ${colours.c3};
      font-family: ${fonts.f1};
      text-transform: uppercase;
      
      padding: 10px;
      font-size: 1.5em;
      @media ${breakPoints.tabletPortrait} {
        padding: 15px;
      }
      @media ${breakPoints.desktopSmall} {
        padding: 20px;
      }
      
      &:hover,
      &:active {
        background: ${colours.c1_h};
        cursor: pointer;
      }
    `,
    checkbox: css`
      display: flex !important;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      
      span {
        padding-left: 10px;
        @media ${breakPoints.tabletPortrait} {
          padding-left: 15px;
        }
        @media ${breakPoints.desktopSmall} {
          padding-left: 20px;
        }
      
        &:hover {
          cursor: pointer;
        }
      }
    `,
    infoText: css`
      margin-top: 10px;
      @media ${breakPoints.tabletPortrait} {
        margin-top: 15px;
      }
      @media ${breakPoints.desktopSmall} {
        margin-top: 20px;
      }
    `,
    clearBtn: css`
      display: block;
      background: ${colours.c2};
      color: ${colours.c3};
      font-family: ${fonts.f1};
      text-transform: uppercase;
      
      padding: 10px;
      margin-right: 10px;
      font-size: 1.5em;
      @media ${breakPoints.tabletPortrait} {
        padding: 15px;
        margin-right: 15px;
      }
      @media ${breakPoints.desktopSmall} {
        padding: 20px;
        margin-right: 20px;
      }
      
      &:hover,
      &:active {
        background: ${colours.c2_h};
        cursor: pointer;
      }
    `,
    printShopLink: css`
      color: ${colours.c1};
      transition: color 0.3s ease-out;
      
      &:hover,
      &:active {
        color: ${colours.c1_h};
      }
    `,
  };

  const handleSubjectChange = (event) => {
    setSubjectVal(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    setConsentVal(event.target.checked);
  };

  return (
      <Layout>
        <SEO title="Contact" />
        <div css={style.pageContainer}>
          <script>
            fbq('track', 'Contact');
          </script>
          <h1>Get in touch!</h1>
          <p>Please send a message if you're interested in buying either an original or an art print. Some guidelines are below the form!</p>

          <form css={style.contactForm} name="contact" action="/success" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <div css={style.contactFormRow}>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" required />
            </div>
            <div css={style.contactFormRow}>
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" required />
            </div>
            <div css={style.contactFormRow}>
              <label htmlFor="subject">Subject</label>
              <input type="text" name="subject" id="subject" required value={subjectVal} onChange={(e) => handleSubjectChange(e)} />
            </div>
            <div css={style.contactFormRow}>
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="6" required />
            </div>
            <div css={style.contactFormRow}>
              <label css={style.checkbox}>
                <Checkbox
                    checked={consentVal}
                    onChange={handleCheckboxChange}
                />
                <span>I agree that my email address and name can be used to enable replying to my message.</span>
              </label>
              <p css={style.infoText}>All personal data is handled according to the <Link to="/privacy_policy">Privacy Policy</Link>.</p>
            </div>
            <div css={style.contactFormActions}>
              {/*<input css={style.clearBtn} type="reset" value="Clear" />*/}
              <input css={style.submitBtn} type="submit" value="Send Message" />
            </div>
          </form>

          <h2>Buying Original Art</h2>
          <p>Each piece is individually wrapped and signed by me. There is usually a smaller signiture in the front,
          and a detailed one including the title at the back.</p>
          <p>All pictures are treated with UV resistant coating as watercolour tends to fade if exposed to direct sunlight. This
          varnish may give a slightly glossy finish in some places where the paint is thicker.</p>
          <p>There is a natural curl to paintings created with water based media. Once framed it's not visible.</p>
          <p>Some of the paintings have a white border around them. This is the blank space masked by the tape I
            use to hold the paper in place when working with wet media. It provides some extra space to hold the picture
            behind a mount.</p>
          <p>All art is shipped without a frame, but fit in standard sized frames.</p>

          <h2>Buying Art Prints</h2>
          <p>Prints (and other merchandise, such as laptop and phone cases, mugs, etc) are sold through my <a css={style.printShopLink} href="https://society6.com/pannadraws" target="_blank" rel="noopener noreferrer" title="PannaDraws on Society6">Society6 shop</a>. They
          take care of packaging and shipping as well.</p>
          <p>The print won't have the PannaDraws logo and the watermark on it, only my signature as it's part of the original picture.</p>

          <h2>Caring for Art</h2>
          <p>As mentioned above, watercolour loses saturation over time. Even though the paintings are coated with an UV
          resistant varnish I would recommend not hanging them in direct sunlight.</p>
        </div>
      </Layout>
  );

};

export default ContactPage;
