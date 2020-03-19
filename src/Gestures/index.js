import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import PanelsApp from "./Panels";
import GesturesStyled from "./Gestures.styled";

const MainPage = () => (
  <div>
    <Link to="/gestures/panels">Panels App</Link>
  </div>
);

const GesturesPage = ({ match }) => (
  <GesturesStyled.root>
    <Switch>
      <Route exact path={match.url} component={MainPage} />
      <Route path={`${match.url}/panels`} component={PanelsApp} />
    </Switch>
    <GesturesStyled.desktopOverlay>
      Please, open on a mobile device or use the chrome devTools
    </GesturesStyled.desktopOverlay>
  </GesturesStyled.root>
);

export default GesturesPage;
