import React from "react";
import { Route, Switch } from "react-router-dom";
import moment from "moment";
import "moment/locale/ru";

import Welcome from "./pages/Welcome";
import Home from "./pages/Home";

const App: React.FC = (): JSX.Element => {
  moment().locale("ru");
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Welcome} />
        <Route path='/' component={Home} />
      </Switch>
    </div>
  );
};

export default App;
