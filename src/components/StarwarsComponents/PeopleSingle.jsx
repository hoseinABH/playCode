import React from 'react';
import { Item, Description, Name } from './PlanetSingle';
const PeopleSingle = ({ people }) => {
  return (
    <Item>
      <Name>{people.name}</Name>
      <Description>Gender-{people.gender}</Description>
      <Description>BirthYears-{people.birth_year}</Description>
    </Item>
  );
};

export default PeopleSingle;
