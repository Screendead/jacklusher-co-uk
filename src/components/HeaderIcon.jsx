import React, { lazy } from 'react';

const Icon = lazy(() => import("./Icon"));

function HeaderIcon(props) {
  return (
    <span className="header__title-icon">
      <Icon name={props.name}></Icon>
    </span>
  );
}

export default HeaderIcon;