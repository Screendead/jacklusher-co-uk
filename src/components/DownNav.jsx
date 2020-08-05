import React, { lazy } from 'react';

import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

const HeaderIcon = lazy(() => import('./HeaderIcon'));

function DownNav() {
  return (
    <div aria-hidden={true} className="down-nav">
      <button aria-hidden={true} className="down-nav__button" onClick={() => window.scrollTo(0, window.innerHeight)}>
        <HeaderIcon name={faArrowDown}></HeaderIcon>
      </button>
    </div>
  );
}

export default DownNav;