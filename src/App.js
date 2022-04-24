
import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Pokemons from './components/Pokemons';
import PokemonsInfo from './components/PokemonsInfo';


function App() {
  return (

    
    <HashRouter>
      <div>
        <div className="App">
          <div className='header'></div>
        </div>

      </div>
      <Routes>
        <Route path='/' element={<Pokemons />} />
        <Route path='/pokemons/:id' element={<PokemonsInfo />} />
      </Routes>
    </HashRouter>
    
  );
}

export default App;