import React, { useState, useEffect } from "react";
import {
  DetailsWrapper,
  DetailsList,
  PokemonThumbnail,
  SectionTitle,
  PokemonTitle,
  PokemonId,
  Tag,
  TypeTags
} from "./PokemonDetail.styled";

function PokemonDetail(props) {
  const [pokemonData, setPokemonData] = useState({
    name: "",
    id: "",
    thumbnail_front: "",
    thumbnail_back: "",
    height: "",
    weight: "",
    types: [],
    abilities: []
  });
  useEffect(() => {
    async function getPokemonData() {
      let res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${props.match.params.name}`
      ).then(response => response.json());
      console.log("fetch data", res);
      const types = res.types.map(type => type.type.name);
      const abilities = res.abilities.map(ability => ability.ability.name);
      setPokemonData({
        name: res.name,
        id: res.id,
        thumbnail_front: res.sprites.front_default,
        thumbnail_back: res.sprites.back_default,
        height: res.height /10,
        weight: res.weight /10,
        types,
        abilities,
      });
    }
    getPokemonData();
  }, []);
  return (
    <DetailsWrapper>
      <PokemonId>#{pokemonData.id}</PokemonId>
      <PokemonTitle>{pokemonData.name}</PokemonTitle>
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
        {pokemonData.types.map((type, index) => (
          <Tag key={index}>{type}</Tag>
        ))}
      </TypeTags>
      
      <SectionTitle>Abilities</SectionTitle>
        <DetailsList>
          {pokemonData.abilities.map((ability, index) => (
            <li key={index}>{ability}</li>
          ))}
        </DetailsList>
    </DetailsWrapper>
  );
}

export default PokemonDetail;
