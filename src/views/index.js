import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavbarContainer from '../fotan/components/NavbarContainer';

const LandingPage = React.lazy(() =>
  import(/* webpackChunkName: "landing" */ './landing')
);
const Jobs = React.lazy(() => import(/* webpackChunkName: "jobs" */ './jobs'));
const Register = React.lazy(() =>
  import(/* webpackChunkName: "register" */ './register')
);

const Page = ({ match }) => {
  return (
    <NavbarContainer>
      <Suspense fallback={<div className="loading" />}>
        <Switch>
          <Route
            path={`${match.url}`}
            exact
            render={(props) => <LandingPage {...props} />}
          />
          <Route
            path={`${match.url}jobs`}
            exact
            render={(props) => <Jobs {...props} />}
          />
          <Route
            path={`${match.url}register`}
            exact
            render={(props) => <Register {...props} />}
          />
        </Switch>
      </Suspense>
    </NavbarContainer>
  );
};

export default Page;
