import React, {useState} from 'react';
import { css } from '@emotion/core';
import {useStaticQuery, graphql, Link} from 'gatsby';
import { breakPoints } from '../resources/breakpoints';
import { fonts } from '../resources/fonts';
import Image from '../components/Image';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import Checkbox from "../components/Checkbox";
import {colours} from "../resources/colors";

const CommissionsPage = () => {
  const [subjectVal, setSubjectVal] = useState('Commission inquiry');
  const [consentVal, setConsentVal] = useState(false);
  const data = useStaticQuery(graphql`
    query {
      me: file(relativePath: { eq: "me.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      },
    }
  `);

  const style = {
    pageContainer: css`
      margin: 0 auto;
      display: flex;
      align-items: flex-start;
      justify-content: stretch;
      font-family: ${fonts.f2};
      padding-top: 20px;
      
      flex-direction: column;
      max-width: 800px;
      padding-left: 10px;
      padding-right: 10px;
      @media ${breakPoints.tabletPortrait} {
        flex-direction: row;
        padding-left: 15px;
        padding-right: 15px;
      }
      @media ${breakPoints.desktopSmall} {
        max-width: 1000px;
        padding-left: 0;
        padding-right: 0;
      }
      
      h1 {
        font-family: ${fonts.f1};
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
    mainImgContainer: css`
      flex:1;
      max-width: 200px;
      width: 100%;
      margin: 0 auto 20px;
      
      @media ${breakPoints.tabletPortrait} {
        transform: rotate(-8deg);
        margin-right: 45px;
        margin-bottom: 0;
      }
      @media ${breakPoints.desktopSmall} {
        margin-right: 50px;
      }
    `,
    image: css`
      max-width: 400px;
      margin: 40px auto;
      
      &.first,
      &.third {
        @media ${breakPoints.tabletPortrait} {
          transform: rotate(2deg);
        }
      }
      
      &.second {
        @media ${breakPoints.tabletPortrait} {
          transform: rotate(-2deg);
        }
      }
    `,
    textContainer: css`
      flex: 1;
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
    contactFormRowSegmented: css`
      display: flex;
      flex-direction: row;
      justify-content: stretch;
      align-items: flex-end;
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
      
      input[type="text"],
      input[type="email"] {
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
    formRowSection: css`
      flex: 1;
      
      &:first-child {
        margin-right: 5px;
        @media ${breakPoints.tabletPortrait} {
          margin-right: 7px;
        }
        @media ${breakPoints.desktopSmall} {
          margin-right: 10px;
        }
      }
      
      &:last-child {
        margin-left: 5px;
        @media ${breakPoints.tabletPortrait} {
          margin-left: 7px;
        }
        @media ${breakPoints.desktopSmall} {
          margin-left: 10px;
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
  };

  const handleSubjectChange = (event) => {
    setSubjectVal(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    setConsentVal(event.target.checked);
  };

  return (
  <Layout>
    <SEO title="About PannaDraws - Bio of Panna Zsamba" />
    <div css={style.pageContainer}>
      <script>
        fbq('track', 'Commission');
      </script>
      <div css={style.mainImgContainer}>

      </div>
      <div css={style.textContainer}>
        <h1>Commission artwork</h1>

        <p>Having something painted specially for someone is a lasting, unique gift. If you'd like to learn more
        about the process read on, or send me an email about your request!</p>

        <div>
          <form css={style.contactForm} name="commissionreq" action="/success" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <div css={[style.contactFormRow, style.contactFormRowSegmented]}>
              <div css={style.formRowSection}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" required />
              </div>
              <div css={style.formRowSection}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" required />
              </div>
            </div>
            <div css={style.contactFormRow}>
              <label htmlFor="subject">Subject</label>
              <input type="text" name="subject" id="subject" required value={subjectVal} onChange={(e) => handleSubjectChange(e)} />
            </div>
            <div css={style.contactFormRow}>
              <label htmlFor="message">Tell me about your desired artwork!</label>
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
              <input css={style.submitBtn} type="submit" value="Send Message" />
            </div>
          </form>
        </div>

        <p></p>

      </div>
    </div>
  </Layout>
)};

export default CommissionsPage
