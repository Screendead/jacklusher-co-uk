import React from 'react';

function NavSection(props: { buttons?: boolean; icons?: boolean; children: React.ReactNode; }) {
  return (
    <ul className={'navbar__nav-section'
      + (props.buttons ? ' navbar__nav-button-container' : '')
      + (props.icons ? ' navbar__nav-item-container' : '')}> { props.children }</ul>
  );
}

export default NavSection;