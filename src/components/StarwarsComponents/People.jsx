import React from 'react';
import { useQuery } from 'react-query';
import PeopleSingle from './PeopleSingle';
import { List } from './Planets';

const People = () => {
  const fetchPeoples = async () => {
    const res = await fetch('http://swapi.dev/api/people/');
    return res.json();
  };

  const { data, status } = useQuery('people', fetchPeoples);
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
            {data.results.map((people) => (
              <PeopleSingle key={people.name} people={people} />
            ))}
          </List>
        </>
      )}
    </div>
  );
};

export default People;
