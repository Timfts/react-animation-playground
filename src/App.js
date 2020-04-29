import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import GesturesPage from "./sections/Gestures";
import ReactSpringPage from "./sections/ReactSpring"
import { BaseStyles } from "styles";


const MainMenu = () => (
  <div style={{display:'flex', flexDirection:'column'}}>
    <Link to="/gestures">Gestures</Link>
    <Link to="/react-spring">React spring</Link>
  </div>
);

export default function App() {
  return (
    <Router>
      <BaseStyles />
      <Switch>
        <Route exact path="/" component={MainMenu} />
        <Route path="/gestures" component={GesturesPage} />
        <Route path="/react-spring" component={ReactSpringPage} />
      </Switch>
    </Router>
  );
}
