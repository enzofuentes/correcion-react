import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/">
      <img src="../images/logo.jpg" width={80} id="logo" alt="logo revealed tienda" />
    </Link>
  );
};

export default Logo;
