import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function App() {
  return (
    <NavBar />
  );
}

function NavBar(props) {
  return (
    <nav className="navbar">
      <div className="slider">
        <NavSection icons>
          <NavItem icon={['fas', 'ellipsis-h']} />
        </NavSection>
        <NavSection buttons>
          <NavButton icon={['fas', 'user-circle']} title="Account" action="javascript:alert(0);" />
          <NavButton icon={['fas', 'cogs']} title="Page Settings" action="javascript:alert(0);" />
        </NavSection>
      </div>
    </nav>
  );
}

function NavSection(props) {
  return (
    <div className={"nav-section"
      + (props.buttons ? " nav-button-container" : "")
      + (props.icons ? " nav-item-container" : "")}> { props.children }</div >
  );
}

function NavButton(props) {
  return (
    <span className="nav-button">
      <button title={props.title} onClick={function () { eval(props.action); }}>
        <NavIcon name={props.icon} />
      </button>
    </span>
  )
}

function NavItem(props) {
  return (
    <span className="nav-item">
      <NavIcon name={props.icon} />
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
