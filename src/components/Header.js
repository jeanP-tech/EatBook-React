import React from 'react';
import Menu from './Menu';
import '../css/Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header_container">
      <h1 id="logo"><Link to="/">잇북</Link></h1>
      <Menu />
    </div>
  );
};

export default Header;
