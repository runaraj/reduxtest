import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import PageAbout from '../page-about';
import PageCounters from '../page-counters';

import routes from '../../routes';

// import './style.css';

export const App = () => (
  <div className="app">
    <nav>
      <ul>
        <li>
          <NavLink to={routes.home}>Home</NavLink>
        </li>
        <li>
          <NavLink to={routes.about}>About</NavLink>
        </li>
        <li>
          <NavLink to={routes.counters}>Counters</NavLink>
        </li>
      </ul>
    </nav>

    <div className="app__notice">
      <div className="o-layout-container">
        Omnia Radix is currently in alpha state — only information classified as
        "public" can be placed in the cluster
      </div>
    </div>
    <main className="o-layout-container">
      <Route path={routes.about} component={PageAbout} />
      <Route path={routes.counters} component={PageCounters} />
      <Route
        exact
        path={routes.home}
        render={() => <Redirect to={routes.about} />}
      />
    </main>
  </div>
);

export default App;
