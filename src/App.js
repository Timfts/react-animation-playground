import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import GesturesPage from "./sections/Gestures";
import { BaseStyles } from "styles";


const MainMenu = () => (
  <div style={{display:'flex', flexDirection:'column'}}>
    <Link to="/gestures">Gestures</Link>
  </div>
);

export default function App() {
  return (
    <Router>
      <BaseStyles />
      <Switch>
        <Route exact path="/" component={MainMenu} />
        <Route path="/gestures" component={GesturesPage} />
      </Switch>
    </Router>
  );
}
