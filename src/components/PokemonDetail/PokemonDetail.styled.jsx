import styled from "styled-components";

const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  border: 1px dashed lightgray;
  text-align: left;
  padding: 40px;
  max-width: 800px;
`;

const DetailsList = styled.ul`
  list-style-type: none;
  text-align: left;
  padding: 0;
  font-size: 12px;
`;

const PokemonThumbnail = styled.img`
  height: 120px;
  width: 120px;
`;

const SectionTitle = styled.h4`
  font-size: 14px;
  color: red;
  border-bottom: 1px solid red;
  padding-bottom: 8px;
`;

const PokemonTitle = styled.h4`
  font-size: 24px;
  font-weight: bold;
  margin: 0;
`;

const PokemonId = styled.span`
  color: red;
`

const TypeTags = styled.div`
  display: flex;
`;

const Tag = styled.span`
  font-size: 10px;
  color: white;
  background-color: red;
  padding: 5px;
  display: inline-block;
  margin-right: 10px;
`;

export {
  DetailsWrapper,
  DetailsList,
  PokemonThumbnail,
  SectionTitle,
  PokemonTitle,
  PokemonId,
  TypeTags,
  Tag
};
