import React, { lazy } from 'react';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

const NavIcon = lazy(() => import('./NavIcon'));

function NavItem(props: { icon: IconDefinition; }) {
  return (
    <span className="navbar__nav-item">
      <NavIcon name={props.icon} />
    </span>
  );
}

export default NavItem;