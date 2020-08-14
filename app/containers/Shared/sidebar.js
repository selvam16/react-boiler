/* eslint-disable no-template-curly-in-string */
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import './shared.css';
import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { NavLink } from 'react-router-dom';
import { Sidebar } from 'primereact/sidebar';
// eslint-disable-next-line no-empty-pattern
const SideNavMenu = forwardRef(({}, ref) => {
  const [toggleSideNav, settoggleSideNav] = useState(false);
  const ToggleNavfunc = () => {
    settoggleSideNav(!toggleSideNav);
  };
  useImperativeHandle(ref, () => ({
    setToggleNav: ToggleNavfunc,
  }));
  const items = ['Home', 'Users'];

  return (
    <div>
      <Sidebar
        visible={toggleSideNav}
        baseZIndex={1000000}
        onHide={() => settoggleSideNav(false)}
      >
        <div className="collapse-list-main">
          <ul
            className="nav flex-column list-main"
            onClick={() => settoggleSideNav(false)}
          >
            {items.map(item => (
              <li className="nav-item">
                {
                  <NavLink
                    className="navbar-item"
                    activeClassName="is-active"
                    to={item.toLowerCase()}
                  >
                    <i className={`pi pi-${item.toLowerCase()}`} />
                    {item}
                  </NavLink>
                }
              </li>
            ))}
          </ul>
          <div
            className="collapse-button"
            onClick={() => settoggleSideNav(false)}
          >
            {' '}
            <i className="pi pi-chevron-circle-left" /> COLLAPSE
          </div>
        </div>
      </Sidebar>
    </div>
  );
});

export default SideNavMenu;
