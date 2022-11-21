import React from "react";
import { Route } from "react-router-dom";
import Game from "./Game/Game";
import Home from "./Home";

const App = () => (
  <div>
    <Route exact path="/" component={Home} />
    {/* <Game /> */}
  </div>
);

export default App;
