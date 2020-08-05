import React, { lazy } from 'react';

import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

const NavIcon = lazy(() => import('./NavIcon'));

function LoginButton(props) {
  return (
    <>
      <span className="navbar__nav-button icon" id="user-button">
        <button title="Login" onClick={() => { }}>
          <NavIcon name={faUserCircle} />
        </button>
      </span>
    </>
  );
}

export default LoginButton;