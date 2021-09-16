import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import Auth from "../helpers/Auth";
// import UnAuthRoutes from './UnAuthRoutes';

import SignIn from '../components/Auth/Login';
import Register from '../components/Auth/Register';
import Layout from '../components/Views/Layout';

const MainRoutes = () => {

  const loading = () => "Loading..."

  return (
    <Switch>
      <Suspense fallback={loading()}>
        <Route exact path='/login' component={SignIn} />
        <Route exact path='/signup' component={Register} />
        <Route path="/" render={() => {
        //  if (!Auth.isUserAuthenticated())
        //        return <UnAuthRoutes />
          return <Layout />
        }} />
      </Suspense>
    </Switch>
  )
}

export default MainRoutes;
