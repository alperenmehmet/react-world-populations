import React from 'react';
import Population from './Population';

const Populations = ({ populations }) => {
  const populationList = populations.map((population) => (
    <Population key={population.country} population={population} />
  ));
  return <div>{populationList}</div>;
};

export default Populations;
