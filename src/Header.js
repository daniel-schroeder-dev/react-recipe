import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';

function Header(props) {
  return (
    <header className="header">
      <h1 className="header__page-title">Recipe App</h1>
      <nav className="header__nav">
        <ol className="header__nav-list">
          <li className="header__nav-item" onClick={props.handleOpenDialogBox}>New Recipe</li>
          <li className="header__nav-item">Home</li>
          <li className="header__nav-item">About</li>
          <li className="header__nav-item">Contact</li>
        </ol>
      </nav>
    </header>
  );
}

Header.propTypes = {
  handleOpenDialogBox: PropTypes.func.isRequired,
};

export default Header;