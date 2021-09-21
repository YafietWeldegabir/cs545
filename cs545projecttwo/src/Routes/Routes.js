import { Redirect, Route, Switch } from "react-router";
import "react-router";
import Login from "../components/Login/Login";

const Routes = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Redirect exact from="/" to="/login" />
    </Switch>
  );
};

export default Routes;
