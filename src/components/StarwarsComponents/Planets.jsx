import React from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import PlanetSingle from './PlanetSingle';

export const List = styled.ul`
  display: flex;
  margin: 3rem auto;
  flex-direction: column;
  min-width: 100%;
`;
const Planets = () => {
  const fetchPlanets = async () => {
    const res = await fetch('http://swapi.dev/api/planets/');
    return res.json();
  };

  const { data, status } = useQuery('planets', fetchPlanets);
  console.log(data);
  return (
    <div>
      <h1>Planets</h1>
      {status === 'loading' && <h4>Loading Data...</h4>}
      {status === 'error' && (
        <h4>
          Error Fetching Data
          <span role="img" aria-label="error">
            ❌
          </span>
        </h4>
      )}
      {status === 'success' && (
        <>
          <h4>
            Successfull Data Fetching{' '}
            <span role="img" aria-label="error">
              ✅
            </span>{' '}
          </h4>
          <List>
            {data.results.map((planet) => (
              <PlanetSingle key={planet.name} planet={planet} />
            ))}
          </List>
        </>
      )}
    </div>
  );
};

export default Planets;
