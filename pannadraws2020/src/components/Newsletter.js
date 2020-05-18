import React, { useState } from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import { Link } from 'gatsby';
import { css } from '@emotion/core';
import { breakPoints } from '../resources/breakpoints';
import { colours } from '../resources/colors';
import { fonts } from '../resources/fonts';
import Checkbox from "./Checkbox";
import { close, check } from '../resources/icons';

const NewsLetter = () => {
  const [firstNameVal, setFirstNameVal] = useState('');
  const [lastNameVal, setLastNameVal] = useState('');
  const [emailVal, setEmailVal] = useState('');
  const [consentVal, setConsentVal] = useState('');
  const [subResult, setSubResult] = useState('');

  const style = {
    newsletterContainer: css`
      display: flex;
      align-items: flex-start;
      justify-content: center;
      
      flex-direction: column;
      padding: 10px;
      @media ${breakPoints.tabletLandscape} {
        flex-direction: row;
      }
      
      a {
        color: ${colours.c1};
        
        &:hover {
          color: ${colours.c1_h};
        }
      }
      
      label {
        display: block;
        font-size: 1em;
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
        
        padding: 10px;
        
        &:focus {
          border-color: ${colours.c1};
        }
      }
      
      h2 {
        font-family: ${fonts.f1};
        text-transform: uppercase;
        
        font-size: 1.3em;
        margin-bottom: 10px;
        @media ${breakPoints.tabletPortrait} {
          font-size: 1.4em;
        }
        @media ${breakPoints.desktopSmall} {
          font-size: 1.5em;
          margin-bottom: 15px;
        }
        @media ${breakPoints.desktopLarge} {
          font-size: 2em;
          margin-bottom: 20px;
        }
      }
      
      p {
        margin-bottom: 10px;
      }
      
      ul {
        margin-bottom: 10px;
        
        li {
          padding-left: 10px;
          position: relative;
          
          padding-bottom: 10px;
          
          
          &:before {
            display: block;
            content: '';
            width: 5px;
            height: 5px;
            background: ${colours.c1};
            border-radius: 15px;
            position: absolute;
            left: 0;
            top: 8px;
          }
        }
      }
    `,
    newsletterDetails: css``,
    newsletterForm: css`
      background: rgba(236, 235, 235, .8);
      
      padding: 10px;
      @media ${breakPoints.tabletPortrait} {
        padding: 15px;
      }
      @media ${breakPoints.tabletLandscape} {
        margin-left: 30px;
        max-width: 300px;
      }
      @media ${breakPoints.desktopSmall} {
        padding: 20px;
        margin-left: 50px;
        max-width: 500px;
      }
    `,
    newsletterFormRow: css`
      margin-bottom: 10px;
    `,
    newsletterSplitFormRow: css`
      margin-bottom: 10px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: stretch;
      
      div {
        flex: 1;
        
        &:first-child {
          margin-right: 5px;
        }
        &:last-child {
          margin-left: 5px;
        }
      }
    `,
    submitBtn: css`
      display: block;
      background: ${colours.c1};
      color: ${colours.c3};
      font-family: ${fonts.f1};
      text-transform: uppercase;
      
      padding: 10px;
      font-size: 1em;
      
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
      margin-bottom: 10px;
      
      span {
        font-size: .9em;
        padding-left: 10px;
      
        &:hover {
          cursor: pointer;
        }
      }
    `,
    infoText: css`
      font-size: .7em;
    `,
    newsletterFormActions: css`
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;
    `,
    successSub: css`
      i {
        display: block;
        width: 30px;
        height: 30px;
        background: ${colours.c_success};
        border-radius: 50px;
        position: relative;
        float: left;
        margin: -4px 10px 0 0;
        
        svg {
          fill: ${colours.c3};
          width: 15px;
          height: 15px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
    `,
    errorSub: css`
      i {
        display: block;
        width: 30px;
        height: 30px;
        background: ${colours.c_error};
        border-radius: 50px;
        position: relative;
        float: left;
        margin: 5px 10px 0 0;
        
        svg {
          fill: ${colours.c3};
          width: 15px;
          height: 15px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
    `,
  };

  const handleFirstNameChange = (value) => {
    setFirstNameVal(value);
  };
  const handleLastNameChange = (value) => {
    setLastNameVal(value);
  };
  const handleEmailChange = (value) => {
    setEmailVal(value);
  };
  const handleCheckboxChange = (event) => {
    setConsentVal(event.target.checked);
  };

  const resetForm = () => {
    setFirstNameVal('');
    setLastNameVal('');
    setEmailVal('');
    setConsentVal('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    addToMailchimp(emailVal, { FNAME: firstNameVal, LNAME: lastNameVal, 32454: consentVal }) // listFields are optional if you are only capturing the email address.
        .then(data => {
          resetForm();
          setSubResult(data);
        })
        .catch(() => {
          // unnecessary because Mailchimp only ever returns 200
        })
  };

  const createMarkup = (story) => {
    return {__html: story};
  };

  const getResultMsg = () => {
    if (!subResult.result) {
      return null;
    }

    return subResult.result === 'success' ? (
        <span css={style.successSub}><i>{check()}</i>{subResult.msg}</span>
    ) : (
        <span css={style.errorSub}><i>{close()}</i><span dangerouslySetInnerHTML={createMarkup(subResult.msg)} /></span>
    );
  };

  return (
      <div css={style.newsletterContainer}>
        <div css={style.newsletterDetails}>
          <h2>Sign up for PannaDraw's newsletter...</h2>
          <p>and get:</p>
          <ul>
            <li>free art printable on signup</li>
            <li>max 1 email per month</li>
            <li>news and exclusive insights of my studio work</li>
            <li>special offers only for subscribers</li>
            <li>art freebies every month</li>
          </ul>
        </div>
        <form css={style.newsletterForm} name="newsletter" onSubmit={handleSubmit} data-netlify="true" data-netlify-honeypot="bot-field">
          <input type="hidden" name="bot-field" />
          <div css={style.newsletterSplitFormRow}>
            <div>
              <label htmlFor="first_name">First Name</label>
              <input
                  type="text"
                  name="first_name"
                  id="first_name"
                  value={firstNameVal}
                  onChange={(e) => handleFirstNameChange(e.target.value)}
                  required
              />
            </div>
            <div>
              <label htmlFor="last_name">Last Name</label>
              <input
                  type="text"
                  name="last_name"
                  id="last_name"
                  value={lastNameVal}
                  onChange={(e) => handleLastNameChange(e.target.value)}
                  required
              />
            </div>
          </div>
          <div css={style.newsletterFormRow}>
            <label htmlFor="email">Email</label>
            <input
                type="email"
                name="email"
                id="email"
                value={emailVal}
                onChange={(e) => handleEmailChange(e.target.value)}
                required
            />
          </div>
          <div css={style.contactFormRow}>
            <label css={style.checkbox}>
              <Checkbox
                  checked={consentVal}
                  onChange={handleCheckboxChange}
              />
              <span>I would like to get monthly emails from PannaDraws.</span>
            </label>
            <p css={style.infoText}>You can unsubscribe at any time by clicking the link in the footer of my emails. All personal data is handled according to the <Link to="/privacy_policy">Privacy Policy</Link>.</p>
            <p css={style.infoText}>I use Mailchimp as my marketing platform. By clicking below to subscribe, you acknowledge that your information will be transferred to Mailchimp for processing. See <a href="https://mailchimp.com/legal/" target="_blank" rel="noopener noreferrer">Mailchimp's privacy practices</a>.</p>
          </div>
          {getResultMsg()}
          <div css={style.newsletterFormActions}>
            <input css={style.submitBtn} type="submit" value="Sign Me Up!" />
          </div>
        </form>
      </div>
  );
};

export default NewsLetter;
