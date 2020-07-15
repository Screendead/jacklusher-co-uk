import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function App() {
  return (
    <nav className="navbar">
      <div className="slider">
        <NavSection grow={0} rotate>
          <NavLink icon={['fas', 'ellipsis-h']} />
        </NavSection>
        <NavSection grow={1}>
          <NavLink icon={['fas', 'user-circle']} anchor="javascript:alert('user');" />
          <NavLink icon={['fas', 'cogs']} anchor="javascript:alert('settings');" />
        </NavSection>
      </div>
    </nav>
  );
}

function NavSection(props) {
  return (
    <div className={"nav-section" + (props.rotate ? " rotate" : "")} style={{ flexGrow: props.grow }}>{props.children}</div>
  );
}

function NavLink(props) {
  if (!props.anchor) {
    return (
      <span className="nav-link-container">
        <NavIcon name={props.icon} />
      </span>
    )
  }

  return (
    <span className="nav-link-container">
      <a className="nav-link" href={props.anchor}>
        <NavIcon name={props.icon} />
      </a>
    </span>
  )
}

function NavIcon(props) {
  return (
    <span className="nav-icon">
      <FontAwesomeIcon icon={props.name} />
    </span>
  );
}

export default App;
