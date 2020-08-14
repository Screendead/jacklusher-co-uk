import React, { lazy } from 'react';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

const Icon = lazy(() => import('./Icon'));

function NavIcon(props: { name: IconDefinition; }) {
  return (
    <span className="navbar__nav-icon">
      <Icon name={props.name}></Icon>
    </span>
  );
}

export default NavIcon;