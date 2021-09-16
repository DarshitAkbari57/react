import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Header from './Header';
// import Sidebar from './Sidebar';
import Dashboard from '../Home';
import Auth from "../../../helpers/Auth";


const DefaultLayout = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);

function Layout() {
  return (
    <BrowserRouter>
      <Switch>
        <RouteWrapper exact={true} path="/" component={Dashboard} layout={DefaultLayout} />
        <RouteWrapper exact={true} path="/home" component={Dashboard} layout={DefaultLayout} />
      </Switch>
    </BrowserRouter>
  );
}

function RouteWrapper({ component: Component, layout: Layout, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout {...props}>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

export default Layout;
