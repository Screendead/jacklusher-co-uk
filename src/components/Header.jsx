import React, { lazy } from 'react';

const DownNav = lazy(() => import("./DownNav"));

function Header(props) {
  return (
    <div className="header">
      <span className="header__title-inner">{props.children}</span>
      <DownNav />
    </div>
  );
}

export default Header;