import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function PokeHooks(props) {
  const [pokemons, setPokemonData] = useState([]);
  useEffect(() => {
    async function getData() {
      let res = await fetch("https://pokeapi.co/api/v2/pokemon").then(
        response => response.json()
      );
      let data = res.results;
      setPokemonData(data);
    }
    getData();
  }, []);
  return (
    <div>
      <img
        className="title-image"
        src="https://media.giphy.com/media/fLp2fTpKTZsj2xW1zI/giphy.gif"
        alt="pokemon-gif"
      />
      <h3 className="title-hooks">PokeHooks!</h3>
      <div>
        {pokemons.map((pokemon, i) => {
          return (
            <div className="item">
              <Link to={`h/${pokemon.name}`}>{pokemon.name}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PokeHooks;
