import React from "react";
import { Route, Switch, Redirect } from "react-router";
import { HashRouter } from "react-router-dom";
import { Docs } from "./components/docs";
import { Home } from "./components/Home";
import HomePage from "./Homepage";
import BlogInfo from "./provide-bloginfo";
import DetailedInfo from "./detailPage/detailedInfo";
//import HomePageImpl from "./Homepage";

const WrappedComponent = (Component: any) => {
  return class Wrapper extends React.Component {
    render() {
      return <Component />;
    }
  };
};

// const NotFound = () => <h1>404 Not Found</h1>;

export const Routes = () => {
  return (
    <HashRouter>
      <Switch>
        <React.Fragment>
          {/* <Route exact path="/" component={WrappedComponent(Home)} /> */}
          <Route exact path="/lib/docs" component={WrappedComponent(Docs)} />
          {/* <Route exact component={NotFound} /> */}
          <Route exact path="/" component={HomePage} />
          <Route exact path="/provide-bloginfo" component={BlogInfo} />
          <Route exact path="/detailedInfo/:id" component={DetailedInfo} />
          {/*   <Redirect from="/:id" to="detailedInfo/:id" /> */}
        </React.Fragment>
      </Switch>
    </HashRouter>
  );
};
