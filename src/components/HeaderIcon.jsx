import React, { lazy } from 'react';

const Icon = lazy(() => import('./Icon'));

function HeaderIcon(props) {
  return (
    <span aria-hidden={true} className="header__title-icon">
      <Icon aria-hidden={true} name={props.name}></Icon>
    </span>
  );
}

export default HeaderIcon;