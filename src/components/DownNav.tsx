import React from 'react';

import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

import HeaderIcon from './HeaderIcon';

function DownNav() {
  return (
    <div aria-hidden={true} className="down-nav">
      <button tabIndex={-1} aria-hidden={true} className="down-nav__button" onClick={() => window.scrollTo(0, window.innerHeight)}>
        <HeaderIcon name={faArrowDown}></HeaderIcon>
      </button>
    </div>
  );
}

export default DownNav;