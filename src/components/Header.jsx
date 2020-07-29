import React, { lazy } from 'react';

const Sketch = lazy(() => import('./Sketch'));
const DownNav = lazy(() => import('./DownNav'));

function Header(props) {
  return (
    <div className="header">
      <Sketch />
      <span className="header__title-inner">{props.children}</span>
      <DownNav />
    </div>
  );
}

export default Header;