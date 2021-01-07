import React from "react";
import { Route, Switch } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Home from "./pages/Home";

const App = (): JSX.Element => (
  <div>
    <Switch>
      <Route exact path='/' component={Welcome} />
      <Route path='/home' component={Home} />
    </Switch>
  </div>
);

export default App;
