import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import {
  DetailsWrapper,
  DetailsList,
  PokemonThumbnail,
  SectionTitle,
  PokemonTitle,
  Tag,
  TypeTags
} from "./PokemonDetail.styled";

function PokemonDetail(props) {
  const [pokemonData, setPokemonData] = useState({
    name: "",
    thumbnail_front: "",
    thumbnail_back: "",
    height: "",
    weight: "",
    types: []
  });
  useEffect(() => {
    async function getPokemonData() {
      let res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${props.match.params.name}`
      ).then(response => response.json());
      console.log("fetch data", res);
      const types = res.types.map(type => type.type.name);
      setPokemonData({
        name: res.name,
        thumbnail_front: res.sprites.front_default,
        thumbnail_back: res.sprites.back_default,
        height: res.height,
        weight: res.weight,
        types
      });
    }
    getPokemonData();
  }, []);
  return (
    <DetailsWrapper>
      <PokemonTitle>{props.match.params.name}</PokemonTitle>
      {pokemonData.thumbnail_front && (
        <div>
          <PokemonThumbnail
            src={pokemonData.thumbnail_front}
            alt="pokemon-front"
          />
          <PokemonThumbnail
            src={pokemonData.thumbnail_back}
            alt="pokemon-back"
          />
        </div>
      )}
      <DetailsList>
        <li>Height: {pokemonData.height} m</li>
        <li>Weight: {pokemonData.weight} kg</li>
      </DetailsList>
      <TypeTags>
        {pokemonData.types.map(type => (
          <Tag key={type}>{type}</Tag>
        ))}
      </TypeTags>
      <SectionTitle>Evolution</SectionTitle>
    </DetailsWrapper>
  );
}

export default PokemonDetail;
