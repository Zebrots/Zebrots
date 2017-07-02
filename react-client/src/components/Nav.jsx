import React from 'react';

const Nav = ({nav}) => (
  <div className="mdl-layout__header-row">
    <span className="mdl-layout-title">Gravitas</span>
    <div className="mdl-layout-spacer"></div>
    <nav className="mdl-navigation">
      <a className="mdl-navigation__link" onClick={nav.showModal}>Post</a>
      <a className="mdl-navigation__link" onClick={nav.displayTopics}> Display Topics</a>
      <a className="mdl-navigation__link" onClick={nav.displayTakeaways}> Display Takeaways</a>
      {Object.keys(nav.state.session).length === 0 &&
        <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onClick={nav.gitHubSignIn}> Sign in</button>}
    </nav>
  </div>
);
export default Nav;
