import React from 'react';
import '../styles.css';

const Population = ({ population: { country, population } }) => {
  const worldPopulation = 7693165599;
  const populationPercantage = (population * 100) / worldPopulation;

  return (
    <div className='country-population-section'>
      <h4 className='country-name-section'>{country}</h4>
      <h4
        className='percantage-scroll-section'
        style={{ width: populationPercantage * 8 }}
      ></h4>
      <h4 className='country-population-section'>
        {population.toLocaleString()}
      </h4>
    </div>
  );
};

export default Population;
