import React from "react";
import { Route, Switch } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Home from "./pages/Home";

const App: React.FC = (): JSX.Element => (
  <div>
    <Switch>
      <Route exact path='/' component={Welcome} />
      <Route path='/' component={Home} />
    </Switch>
  </div>
);

export default App;
