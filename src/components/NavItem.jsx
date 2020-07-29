import React, { lazy } from 'react';

const NavIcon = lazy(() => import('./NavIcon'));

function NavItem(props) {
  return (
    <span className="navbar__nav-item">
      <NavIcon name={props.icon} />
    </span>
  );
}

export default NavItem;