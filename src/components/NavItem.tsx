import React from 'react';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

import NavIcon from './NavIcon';

function NavItem(props: { icon: IconDefinition; }) {
  return (
    <li className="navbar__nav-item">
      <NavIcon name={props.icon} />
    </li>
  );
}

export default NavItem;