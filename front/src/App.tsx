import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import moment from "moment";
import "moment/locale/ru";

import Welcome from "./pages/Welcome";
import Home from "./pages/Home";

import { setUser } from "./store/models/user/actions";
import { authApi } from "./store/api/authApi";

const App: React.FC = (): JSX.Element => {
  moment().locale("ru");
  // TODO: Перенсти в saga
  const history = useHistory();
  const dispatch = useDispatch();

  const authMe = async () => {
    try {
      const data = await authApi.getMe();
      dispatch(setUser(data));
      history.replace("/home");
    } catch (e) {
      console.log(e);
    }
  };

  React.useEffect(() => {
    authMe();
  }, []);
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
