import React, { useEffect, Suspense } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import Auth from "../helpers/Auth";
import SignIn from '../components/Auth/Login';

const UnAuthRoutes= ({  }) => { 
  const loading = () => "Loading..."

  return (
    <Switch>
      <Suspense fallback={loading()}>
          <Route exact path='/login' component={SignIn} />
          {/* <Route path="/" render={() => {
            if (!Auth.isUserAuthenticated())
                  return <Redirect exact from="*" to={{ pathname: "/login" }} />
          }} /> */}
          </Suspense>
        </Switch>
  )
}

export default UnAuthRoutes;
