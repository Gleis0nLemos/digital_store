import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoSmall from '../assets/logo.svg';
import LogoLarge from '../assets/logo_2.svg';

const Logo = ({ isLoginPage }) => (
  <div className="flex justify-center lg:justify-start">
    <NavLink to="/">
      <img src={LogoSmall} alt="Logo" className="block mx-auto pl-4 lg:hidden" />
    </NavLink>
    <NavLink to="/">
      <img src={LogoLarge} alt="Logo2" className="hidden lg:block" />
    </NavLink>
  </div>
);

export default React.memo(Logo);
