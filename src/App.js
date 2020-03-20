import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { BaseStyles } from "styles";

const GesturesPage = lazy(() => import("./Gestures"));

const MainMenu = () => (
  <div>
    <Link to="/gestures">Gestures</Link>
  </div>
);

export default function App() {
  return (
    <Router>
      <BaseStyles />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={MainMenu} />
          <Route path="/gestures" component={GesturesPage} />
        </Switch>
      </Suspense>
    </Router>
  );
}
