import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Spin } from "antd";
import Loadable from "react-loadable";
import Private from "./Hoc/Private";
const loader = () => {
  return <Spin size="large" />;
};

// components
const AppLayout = Loadable({
  loader: () => import("Components/AppLayout/AppLayout"),
  loading: () => loader
});

const NotFoundPage = Loadable({
  loader: () => import("Components/NotFoundPage"),
  loading: () => loader
});

const ProductList = Loadable({
  loader: () => import("Containers/ProductList"),
  loading: () => loader
});

const Cart = Loadable({
  loader: () => import("Containers/Cart"),
  loading: () => loader
});

export const Routes = () => {
  return (
    <Switch>
      <Route component={AppLayout} />
    </Switch>
  );
};

export const ContentRoute = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/productlist" />} />
      <Route exact path="/productlist" component={ProductList} />
      <Route exact path="/cart" component={Cart} />

      <Route component={NotFoundPage} />
    </Switch>
  );
};

export default Routes;
