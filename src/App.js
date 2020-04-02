import React from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import PokeClass from "./PokeClass";
import PokeHooks from "./PokeHook";
import PokemonDetail from "./components/PokemonDetail/PokemonDetail";
import "./styles.css";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/">
          <img
            src="https://data.whicdn.com/images/71286714/original.gif"
            className="header-image"
            alt="pokedex"
          />
          <h1>POKEDEX</h1>
        </Link>

        <Switch>
          <Route path="/" exact>
            <p> Pick a side: </p>
            <div className="links-container">
              <Link to="/pokemon/c" className="link-button">
                <img
                  className="title-image"
                  src="https://media.giphy.com/media/t6Kf2qs5fgWiAlOig5/giphy.gif"
                  alt="pokemon-gif"
                />
                <h3 className="title-classes">PokeClasses!</h3>
              </Link>
              <Link to="/pokemon/h" className="link-button">
                <img
                  className="title-image"
                  src="https://media.giphy.com/media/fLp2fTpKTZsj2xW1zI/giphy.gif"
                  alt="pokemon-gif"
                />
                <h3 className="title-hooks">PokeHooks!</h3>
              </Link>
            </div>
          </Route>
          <Route path="/pokemon/h/:name" component={PokemonDetail} />
          <Route path="/pokemon/h">
            <PokeHooks />
          </Route>
          <Route path="/pokemon/c/:name" component={PokemonDetail} />
          <Route path="/pokemon/c">
            <PokeClass />
          </Route>
          <Route>
            <p> Uppps! You might be lost!</p>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
