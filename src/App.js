import React, {useState} from 'react';
import { UseFetch } from './components/UseFetch';
import './App.css';

function App() {
  const [url, SetUrl]= useState('https://pokeapi.co/api/v2/pokemon')
  const estado = UseFetch(url, SetUrl)
  const {cargando,data}= estado
  cargando? console.log('cargando'):console.log(data.results)

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
