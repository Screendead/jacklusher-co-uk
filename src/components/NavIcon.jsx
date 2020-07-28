import React, { lazy } from 'react';

const Icon = lazy(() => import("./Icon"));

function NavIcon(props) {
  return (
    <span className="navbar__nav-icon">
      <Icon name={props.name}></Icon>
    </span>
  );
}

export default NavIcon;