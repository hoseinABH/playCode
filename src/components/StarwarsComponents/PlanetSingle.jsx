import React from 'react';
import styled from 'styled-components';

export const Item = styled.li`
  padding: 1rem 1rem;
  margin: 1rem auto;
  list-style: none;
  border: 1px solid transparent;
  border-radius: 7px;
  width: 100%;
  background: #222222;
`;
export const Name = styled.h3`
  color: #256ce1;
  margin-bottom: 0.5rem;
`;
export const Description = styled.p`
  padding: 0.5rem auto;
`;
const PlanetSingle = ({ planet }) => {
  return (
    <Item>
      <Name>{planet.name}</Name>
      <Description>Population-{planet.population}</Description>
      <Description>Terrain-{planet.terrain}</Description>
    </Item>
  );
};

export default PlanetSingle;
