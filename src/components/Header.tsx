import React from 'react';

import DownNav from './DownNav';

function Header(props: { children: React.ReactNode; }) {
  return (
    <div className="header">
      <span className="header__title-inner">{props.children}</span>
      <DownNav />
    </div>
  );
}

export default Header;