import React from 'react';
import './App.css';
import countries from './geoScopes/countries'
import Content from './content'

function App() {
  const trafficGeo = countries.colombia;

  return (
    <Content geo={trafficGeo}/>
  );
  
}

export default App;
