import React from 'react';
import {
  PlantContainer,
  Heading,
  Section,
  Button,
  ListContainer,
} from './Starwars.styles';
import Planets from '../../components/StarwarsComponents/Planets';
import People from '../../components/StarwarsComponents/People';
const Starwars = () => {
  const [page, setPage] = React.useState('planets');

  return (
    <PlantContainer>
      <Heading>Star Wars Info</Heading>
      <Section>
        <Button onClick={() => setPage('planets')}>Planet</Button>
        <Button onClick={() => setPage('people')}>Peopole</Button>
      </Section>
      <ListContainer>
        {page === 'planets' ? <Planets /> : <People />}
      </ListContainer>
    </PlantContainer>
  );
};

export default Starwars;
