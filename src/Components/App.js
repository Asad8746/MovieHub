import React from "react";
import Menu from "./Menu";
import MovieList from "./MovieList";
import { Router, Route } from "react-router-dom";
import Modal from "./Modal";
import History from "../history";

const App = () => {
  return (
    <div>
      <Router history={History}>
        <Menu />
        <Route path="/" exact component={MovieList} />
        <Route path="/movie/:id" exact component={Modal} />
      </Router>
    </div>
  );
};

export default App;
