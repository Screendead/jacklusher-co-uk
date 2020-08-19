import React from 'react';

import NavIcon from './NavIcon';

function NavButton(props: { title: string | undefined; action: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined; icon: any; }) {
  return (
    <li className="navbar__nav-button">
      <button className="navbar__nav-button__button" title={props.title} onClick={props.action}>
        <NavIcon name={props.icon} />
      </button>
    </li>
  );
}

export default NavButton;