import React from 'react';

function NavBar(props: { children: React.ReactNode; }) {
  return (
    <nav className="navbar">
      <div className="navbar__nav-slider">{props.children}</div>
    </nav>
  );
}

export default NavBar;