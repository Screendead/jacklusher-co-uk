import React, { lazy } from 'react';

const NavIcon = lazy(() => import('./NavIcon'));

function NavButton(props: { title: string | undefined; action: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined; icon: any; }) {
  return (
    <span className="navbar__nav-button">
      <button className="navbar__nav-button__button" title={props.title} onClick={props.action}>
        <NavIcon name={props.icon} />
      </button>
    </span>
  );
}

export default NavButton;