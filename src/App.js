import React, { lazy, Suspense } from 'react';
import './App.scss';

import { faEllipsisH, faUserCircle, faCogs, faSpaceShuttle } from '@fortawesome/free-solid-svg-icons'

const NavBar = lazy(() => import('./components/NavBar'));
const NavSection = lazy(() => import('./components/NavSection'));
const NavItem = lazy(() => import('./components/NavItem'));
const NavButton = lazy(() => import('./components/NavButton'));
const Header = lazy(() => import('./components/Header'));
const HeaderIcon = lazy(() => import('./components/HeaderIcon'));
const Content = lazy(() => import('./components/Content'));
const Options = lazy(() => import('./components/Options'));
const Option = lazy(() => import('./components/Option'));
const Feature = lazy(() => import('./components/Feature'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  // First we get the viewport height and we multiply it by 1% to get a value for a vh unit
  let vw = document.documentElement.clientWidth * 0.01;
  let vh = document.documentElement.clientHeight * 0.01;
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty('--vw', `${vw}px`);
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  return (
    <Suspense fallback={(<div class="loader"></div>)}>
      <div className="page-container">
        <NavBar>
          <NavSection icons>
            <NavItem icon={faEllipsisH} />
          </NavSection>
          <NavSection buttons>
            <NavButton icon={faUserCircle} title="Account" action={() => alert('Account Info')} />
            <NavButton icon={faCogs} title="Page Settings" action={() => alert('Settings')} />
          </NavSection>
        </NavBar>
        <Header>
          <HeaderIcon name={faSpaceShuttle} />
          <h1 className="header__title">Stratospheric</h1>
          <h2 className="header__subtitle">Get yourself some rocket fuel.</h2>
        </Header>
        <Content>
          <Options>
            <Option title="Level 1" subtitle="Personal">
              <Feature content="Action taken on your request within 2 working days" />
              <Feature content="Solution within 10 working days" />
              <Feature content="Contact 10:00-17:00 Monday-Friday" />
              <Feature content="Email + phone support" />
              <Feature content="Support for personal blogs" />
            </Option>
            <Option title="Level 2" subtitle="eCommerce">
              <Feature content="Action on your request within 1 working day" />
              <Feature content="Solution within 5 working days" />
              <Feature content="Priority contact from 09:00-19:00 Monday-Saturday" />
              <Feature content="Support for eCommerce sites" />
            </Option>
            <Option title="Level 3" subtitle="Bespoke">
              <Feature content="Immediate action on urgent requests" />
              <Feature content="Solution within 24h" />
              <Feature content="Mon-Sun emergency phone support" />
              <Feature content="Video call support via Skype or Zoom (for screen-sharing etc.)" />
              <Feature content="Tailored service to meet your site's needs" />
            </Option>
          </Options>
        </Content>
        <Footer>

        </Footer>
      </div>
    </Suspense>
  );
}

export default App;
