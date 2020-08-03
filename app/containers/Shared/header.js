import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
// eslint-disable-next-line react/prop-types
const Headernav = ({ onBurgerClick }) => (
  <div>
    <nav
      className="navbar navbar-dark"
      style={{ backgroundColor: 'rebeccapurple' }}
    >
      <div className="navbar-brand d-flex">
        <span onClick={onBurgerClick} className="toggle-menu">
          <i className="pi pi-bars" />
        </span>
        <span className="heading">SM</span>
      </div>
    </nav>
  </div>
);

export default Headernav;
