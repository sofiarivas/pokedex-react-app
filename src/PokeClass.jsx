import React from "react";
import { Link } from "react-router-dom";

export default class PokeClasses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: ["a", "b"]
    };
  }
  render() {
    return (
      <>
        <img
          className="title-image"
          src="https://media.giphy.com/media/t6Kf2qs5fgWiAlOig5/giphy.gif"
          alt="pokemon-gif"
        />
        <h3 className="title-classes">PokeClasses!</h3>
        <div>
          {this.state.pokemons.map((pokemon, i) => (
            <div className="item" key={pokemon.name}>
              <Link to={`c/${pokemon.name}`}>{pokemon.name}</Link>
            </div>
          ))}
        </div>
      </>
    );
  }
  async componentDidMount() {
    await fetch("https://pokeapi.co/api/v2/pokemon")
      .then(response => response.json())
      .then(data => {
        this.setState({ pokemons: data.results });
      });
  }
}
