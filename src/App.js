import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Browse, Signin, Signup, ConfirmLogout } from "./pages/index"
import * as ROUTES from './constants/routes';
import { isUserRedirect, ProtectedRoute } from './helpers/routes';
import { useAuthListener } from './hooks';
import './fonts/font.css'

export default function App() {
  const { user } = useAuthListener();

  return (
  <Router>
    <Switch>
    <Route exact path={ROUTES.CONFIRM} component={ConfirmLogout}/>
    <isUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN}>
        <Signin />
    </isUserRedirect>
    <isUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_UP}>
        <Signup />
    </isUserRedirect>
    <ProtectedRoute user={user} path={ROUTES.BROWSE} exact>
      <Browse />
    </ProtectedRoute>
    <isUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME}>
      <Home />
    </isUserRedirect>
    </Switch>
  </Router>
  );
}
