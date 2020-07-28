import React from 'react';
import './App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function App() {
  // First we get the viewport height and we multiply it by 1% to get a value for a vh unit
  let vw = document.documentElement.clientWidth * 0.01;
  let vh = document.documentElement.clientHeight * 0.01;
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty('--vw', `${vw}px`);
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  return (
    <div className="page-container">
      <NavBar>
        <NavSection icons>
          <NavItem icon={['fas', 'ellipsis-h']} />
        </NavSection>
        <NavSection buttons>
          <NavButton icon={['fas', 'user-circle']} title="Account" action={() => alert('Account Info')} />
          <NavButton icon={['fas', 'cogs']} title="Page Settings" action={() => alert('Settings')} />
        </NavSection>
      </NavBar>
      <Header>
        <HeaderIcon name={['fas', 'space-shuttle']} />
        <h1 className="header__title">Stratospheric</h1>
        <h2 className="header__subtitle">Get yourself some rocket fuel.</h2>
      </Header>
      <Content>
        <Options>
          <Option title="Level 1" />
          <Option title="Level 2" />
          <Option title="Level 3" />
        </Options>
      </Content>
      <Footer>

      </Footer>
    </div>
  );
}

function Icon(props) {
  return (
    <span className="icon">
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
      <button title={props.title} onClick={props.action}>
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

function Options(props) {
  return (
    <div className="options">
      {props.children}
    </div>
  );
}

function Option(props) {
  return (
    <span className="options__option">
      <h3 className="options__option__title">{props.title}</h3>
    </span>
  );
}

function Footer(props) {
  return (
    <div className="footer">
      {props.children}
      <div className="footer__copyright">
        Copyright © 2020 JL Digital
      </div>
    </div>
  );
}

export default App;
