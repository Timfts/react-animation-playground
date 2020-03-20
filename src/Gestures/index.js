import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import PanelsApp from "./Panels";
import GesturesStyled from "./Gestures.styled";

const MainPage = () => (
  <GesturesStyled.mainPage>
    <Link to="/gestures/panels">Panels App</Link>
  </GesturesStyled.mainPage>
);

export default function GesturesPage({ match }) {
  return (
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
}
