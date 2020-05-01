import React, { Suspense, lazy } from "react";
import { Switch, Route, Link } from "react-router-dom";
import S from "./Gestures.styled";

const PanelsApp = lazy(() => import("./Panels"));
const MusicPlayerApp = lazy(() => import("./musicPlayer"))

const MainPage = () => (
  <S.mainPage>
    <Link to="/gestures/panels">Panels App</Link>
    <Link to="/gestures/music-player">Music Player app</Link>
  </S.mainPage>
);

export default function GesturesPage({ match }) {
  return (
    <S.root>
      <Suspense fallback={<div>Loading app...</div>}>
        <Switch>
          <Route exact path={match.url} component={MainPage} />
          <Route path={`${match.url}/panels`} component={PanelsApp} />
          <Route path={`${match.url}/music-player`} component={MusicPlayerApp} />
        </Switch>
      </Suspense>
      <S.desktopOverlay>
        Please, open on a mobile device or use the chrome devTools
      </S.desktopOverlay>
    </S.root>
  );
}
