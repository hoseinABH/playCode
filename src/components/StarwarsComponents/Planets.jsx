import React from 'react';
import { usePaginatedQuery } from 'react-query';
import styled from 'styled-components';
import PlanetSingle from './PlanetSingle';

export const List = styled.ul`
  display: flex;
  margin: 3rem auto;
  flex-direction: column;
  min-width: 100%;
`;

export const PageButtons = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5rem;
`;
export const PaginateButton = styled.button`
  cursor: pointer;
  outline: none;
  padding: 0.3rem;
`;
const Planets = () => {
  const [page, setPage] = React.useState(1);
  const fetchPlanets = async (id, page) => {
    const res = await fetch(`http://swapi.dev/api/planets/?page=${page}`);
    return res.json();
  };

  const { resolvedData, latestData, status } = usePaginatedQuery(
    ['planets', page],
    fetchPlanets,
    {}
  );

  const nextClickHandler = () => {
    setPage((page) => (!latestData || !latestData.next ? page : page + 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const prevClickHandler = () => {
    setPage(page > 1 ? (page) => page - 1 : page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
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
            {resolvedData.results.map((planet) => (
              <PlanetSingle key={planet.name} planet={planet} />
            ))}
          </List>

          <PageButtons>
            <PaginateButton onClick={prevClickHandler}>◀</PaginateButton>
            <p style={{ margin: 'auto 1rem' }}>{page}</p>
            <PaginateButton disabled={!latestData} onClick={nextClickHandler}>
              ▶
            </PaginateButton>
          </PageButtons>
        </>
      )}
    </div>
  );
};

export default Planets;
