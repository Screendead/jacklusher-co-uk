import React, { lazy, Suspense } from 'react';
import * as firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/performance';
import 'firebase/auth';
import 'firebaseui';

import './App.scss';
import { faEllipsisH, faUserCircle, faUserAstronaut, faSignOutAlt, faCogs, faSpaceShuttle, faTimes } from '@fortawesome/free-solid-svg-icons';

const StyledFirebaseAuth = lazy(() => import('react-firebaseui/StyledFirebaseAuth'));

const ProfilePicture = lazy(() => import('./components/ProfilePicture'));
const Icon = lazy(() => import('./components/Icon'));
const NavBar = lazy(() => import('./components/NavBar'));
const NavSection = lazy(() => import('./components/NavSection'));
const NavItem = lazy(() => import('./components/NavItem'));
const NavIcon = lazy(() => import('./components/NavIcon'));
const NavButton = lazy(() => import('./components/NavButton'));
const Header = lazy(() => import('./components/Header'));
const Sketch = lazy(() => import('./components/Sketch'));
const HeaderIcon = lazy(() => import('./components/HeaderIcon'));
const Content = lazy(() => import('./components/Content'));
const Options = lazy(() => import('./components/Options'));
const Option = lazy(() => import('./components/Option'));
const Feature = lazy(() => import('./components/Feature'));
const Footer = lazy(() => import('./components/Footer'));

const firebaseConfig = {
  apiKey: "AIzaSyDXipDtVoi6fdY7k8mhxTlaF60m7aS41O8",
  authDomain: "jacklusher.firebaseapp.com",
  databaseURL: "https://jacklusher.firebaseio.com",
  projectId: "jacklusher",
  storageBucket: "jacklusher.appspot.com",
  messagingSenderId: "973424570945",
  appId: "1:973424570945:web:ca51407f3bee9e4c2d0cc0",
  measurementId: "G-8Z8KLM2M3S"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.performance();
firebase.analytics();

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false,
      userModal: false,
    }

    this.auth = firebase.auth();
    this.auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
  }

  componentDidMount() {
    this.auth.onAuthStateChanged(user => this.setState({ loggedIn: !!user }));

    window.location.search.indexOf('mode=select') !== -1 &&
      this.setState({ userModal: true });
  }

  render() {
    let details;
    let detailsButton;
    if (this.state.loggedIn) {
      details = (
        <div className="user-modal__content user-modal__content--logged-in">
          <div className="user-modal__content__heading">
            <div className="user-modal__content__heading__user">
              { this.auth.currentUser.photoURL ? (
                  <span className="user-modal__content__heading__user__photo">
                    <ProfilePicture source={this.auth.currentUser.photoURL} />
                  </span>
                ) : (
                  <span className="user-modal__content__heading__user__icon">
                    <Icon name={faUserAstronaut}></Icon>
                  </span>
                )
              }
              <h4 className="user-modal__content__heading__user__name">{this.auth.currentUser.displayName || "Anonymous User"}</h4>
            </div>
            <button className="user-modal__content__heading__exit button" title="Close" onClick={() => this.setState({ userModal: false })}>
              <Icon name={faTimes} />
            </button>
          </div>
          <div className="user-modal__content__sign-out-container">
            <button className="user-modal__content__sign-out button" title="Sign Out" onClick={() => this.auth.signOut()}>
              <span className="user-modal__content__sign-out__text">Sign Out&nbsp;&nbsp;</span>
              <Icon name={faSignOutAlt} />
            </button>
          </div>
        </div>
      );

      detailsButton = (
        <button className="navbar__nav-button__button" title="User Details" onClick={() => this.setState({userModal: true})}>
          { this.auth.currentUser.photoURL ?
            <ProfilePicture source={this.auth.currentUser.photoURL} />
            : <NavIcon name={faUserAstronaut} />
          }
        </button>
      );
    } else {
      details = (
        <div className="user-modal__content user-modal__content--logged-out">
          <StyledFirebaseAuth firebaseAuth={this.auth} uiConfig={{
              signInSuccessUrl: '/',
              signInOptions: [
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                'apple.com',
                firebase.auth.FacebookAuthProvider.PROVIDER_ID,
                firebase.auth.EmailAuthProvider.PROVIDER_ID,
              ],
              signInFlow: 'popup',
          }} />
          <button className="user-modal__content__close button" title="Cancel" onClick={() => this.setState({userModal: false})}>
            <Icon name={faTimes} />
          </button>
        </div>
      );

      detailsButton = (
        <button className="navbar__nav-button__button" title="Login" onClick={() => this.setState({userModal: true})}>
          <NavIcon name={faUserCircle} />
        </button>
      );
    }

    return (
      <Suspense fallback={(<div className="loader"></div>)}>
        { this.state.userModal &&
          <div className="user-modal">{details}</div>
        }
        <div className="page-container">
          <NavBar>
            <NavSection icons>
              <NavItem icon={faEllipsisH} />
            </NavSection>
            <NavSection buttons>
              <span className="navbar__nav-button icon">{detailsButton}</span>
              <NavButton icon={faCogs} title="Page Settings" action={() => alert('Settings')} />
            </NavSection>
          </NavBar>
          <Header>
            { navigator.userAgent.indexOf('Chrome-Lighthouse') === -1 &&
              <Sketch />
            }
            <HeaderIcon name={faSpaceShuttle} />
            <h1 className="header__title">Stratospheric</h1>
            <h2 className="header__subtitle">Get yourself some rocket fuel.</h2>
          </Header>
          <Content>
            <Options>
              <Option title="Level 1" subtitle="Personal" price="39">
                <Feature content="Action taken on your request within 2 working days" />
                <Feature content="Solution within 10 working days" />
                <Feature content="Contact 10:00-17:00 Monday-Friday" />
                <Feature content="Email + phone support" />
                <Feature content="Support for personal blogs" />
              </Option>
              <Option title="Level 2" subtitle="eCommerce" price="79">
                <Feature content="Action on your request within 1 working day" />
                <Feature content="Solution within 5 working days" />
                <Feature content="Priority contact from 09:00-19:00 Monday-Saturday" />
                <Feature content="Support for eCommerce sites" />
              </Option>
              <Option title="Level 3" subtitle="Bespoke" price="119">
                <Feature content="Immediate action on urgent requests" />
                <Feature content="Solution within 24h" />
                <Feature content="Mon-Sun emergency phone support" />
                <Feature content="Video call support via Skype or Zoom (for screen-sharing etc.)" />
                <Feature content="Tailored service to meet your site's needs" />
              </Option>
            </Options>
          </Content>
          <Footer></Footer>
        </div>
      </Suspense>
    );
  }
}

export default App;
