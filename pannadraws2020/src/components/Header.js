import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { logo } from '../resources/icons';
import React from 'react';

const Header = () => {
  return (
      <div>
        <div>
          <Link to="/">Art</Link>
          <Link to="/about/">About</Link>
          <Link to="/contact/">Contact</Link>
        </div>
        <div>
          <Link to="/">
            {logo()}
          </Link>
        </div>
        <div>
          social
        </div>
      </div>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
