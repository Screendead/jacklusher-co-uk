import React from 'react';
import './App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function App() {
  // First we get the viewport height and we multiply it by 1% to get a value for a vh unit
  let vh = window.innerHeight * 0.01;
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  return (
    <div className="page-container">
      <NavBar>
        <NavSection icons>
          <NavItem icon={['fas', 'ellipsis-h']} />
        </NavSection>
        <NavSection buttons>
          <NavButton icon={['fas', 'user-circle']} title="Account" action="javascript:alert('Account Info');" />
          <NavButton icon={['fas', 'cogs']} title="Page Settings" action="javascript:alert('Settings');" />
        </NavSection>
      </NavBar>
      <Header>
        <HeaderIcon name={['fas', 'space-shuttle']} />
        <h1 className="header__title">Stratospheric</h1>
        <h2 className="header__subtitle">Time to get yourself some rocket fuel.</h2>
      </Header>
      <Content>
        
      </Content>
    </div>
  );
}

function Icon(props) {
  return (
    <span className={"icon"
      + (props.decorative ? " icon--decorative" : "")
      + (props.functional ? " icon--functional" : "")}>
      <FontAwesomeIcon icon={props.name} />
    </span>
  );
}

function NavBar(props) {
  return (
    <nav className="navbar">
      <div className="navbar__nav-slider">{props.children}</div>
    </nav>
  );
}

function NavSection(props) {
  return (
    <ul className={"navbar__nav-section"
      + (props.buttons ? " navbar__nav-button-container" : "")
      + (props.icons ? " navbar__nav-item-container" : "")}> { props.children }</ul>
  );
}

function NavButton(props) {
  return (
    <span className="navbar__nav-button">
      <button title={props.title} onClick={function () { eval(props.action); }}>
        <NavIcon name={props.icon} />
      </button>
    </span>
  );
}

function NavItem(props) {
  return (
    <span className="navbar__nav-item">
      <NavIcon name={props.icon} />
    </span>
  );
}

function NavIcon(props) {
  return (
    <span className="navbar__nav-icon">
      <Icon name={props.name}></Icon>
    </span>
  );
}

function Header(props) {
  return (
    <div className="header">
      <span className="header__title-inner">{props.children}</span>
      <DownNav />
    </div>
  );
}

function HeaderIcon(props) {
  return (
    <span className="header__title-icon">
      <Icon name={props.name}></Icon>
    </span>
  );
}

function DownNav() {
  return (
    <div className="down-nav">
      <button className="down-nav__button" onClick={() => window.scrollTo(0, window.innerHeight)}>
        <HeaderIcon name={['fas', 'arrow-down']}></HeaderIcon>
      </button>
    </div>
  );
}

function Content(props) {
  return (
    <div className="content">
      {props.children}
    </div>
  );
}

export default App;
