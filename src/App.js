import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


import { BaseStyles } from "styles";

const GesturesPage = lazy(() => import("./Gestures"));

const MainMenu = () => {
  return (
    <div>
      <Link to="/gestures">Gestures</Link>
    </div>
  );
};

const App = () => (
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

export default App;
