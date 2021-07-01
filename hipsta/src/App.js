import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import React, { useState, useEffect, Component } from "react";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider, connect } from "react-redux";
import thunk from "redux-thunk";
import { store, actionPromise } from "./reducers/allReducers";
import { CFeed } from "./components/FeedComponent";
import { PageHeader } from "./pages/PageHeader";
import { PageFooter } from "./pages/PageFooter";
import { PageLogin } from "./pages/PageLogin";
import {Drop} from "./components/DropComponent";


const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <PageHeader path='/' component={PageHeader}/>
      {/* <Route path="/registration" component={PageRegistration} /> */}
      <Route path="/login" component={PageLogin} />
      {/* <Route path="/feed" component={CFeed} /> */}
      <PageFooter path='/' component={PageFooter}/>
      {/* <Drop/> */}
    </BrowserRouter>
  </Provider>
);
export default App;
