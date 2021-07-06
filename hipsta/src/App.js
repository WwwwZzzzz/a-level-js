import React from "react";
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./reducers/allReducers";
import { CFeed } from "./components/FeedComponent";
import { PageFooter } from "./pages/PageFooter";
import { PageLogin } from "./pages/PageLogin";
import { PageRegistration } from "./pages/PageRegistration";
import {Drop} from "./components/DropComponent";
import history from "./history";
import {LayoutLogin} from "./layouts/LayoutLogin";
import {LayoutHeader} from "./layouts/LayoutHeader";
import {PageNotFound} from "./pages/PageNotFound";
import Post from './components/PostComponent';


const App = () => (
  <Provider store={store}>
    <BrowserRouter history={history}>
      {/* <Drop/> */}
      <Switch>
        <RouteWrapper path="/login" component={PageLogin} layout={LayoutLogin} />
        <RouteWrapper path="/registration" component={PageRegistration} layout={LayoutLogin} />
        <RouteWrapper path="/feed" component={CFeed} layout={LayoutHeader} />
        <RouteWrapper path='*' exact={true} component={PageNotFound} layout={LayoutHeader} />
        <RouteWrapper path='/post:id' component={Post} layout={LayoutHeader} />
      </Switch>
      <PageFooter path='/' component={PageFooter}/>
    </BrowserRouter>
  </Provider>
);

function RouteWrapper({
  component: Component, 
  layout: Layout, 
  ...rest
}) {
  return (
    <Route {...rest} render={(props) =>
      <Layout {...props}>
        <Component {...props} />
      </Layout>
    } />
  );
}

export default App;
