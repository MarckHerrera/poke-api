import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PokemonsCards from './PokemonsCards';


const Pokemons = () => {

    const [types, setTypes] = useState([]);
    const [pokemons, setPokemons] = useState([]);
    const [page, setPage] = useState(1);
    const itemNumber = 6;
    const lastIndex = page * itemNumber;
    const fistIndex = lastIndex - itemNumber;
    const totalpages = Math.ceil(pokemons?.length / itemNumber)
    const pokemonPaginated = pokemons?.slice(fistIndex, lastIndex);
    const pagesNumbers = []
    for (let i = 1; i <= totalpages; i++) {
        pagesNumbers.push(i)
    }

    useEffect(() => {

        
        axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1126')
            .then(res => setPokemons(res.data.results))

        axios.get('https://pokeapi.co/api/v2/type')
            .then(res => setTypes(res.data.results))
    }, []);

 

    return (
        <div>

<div className='container'>
             
            </div>

            

            <ul className='pokemons-list'>
                {
                    pokemonPaginated.map(pokemons => (
                        
                        <PokemonsCards
                            pokemonsUrl={pokemons.url ? pokemons.url : pokemons.pokemon.url}
                            key={pokemons.url ? pokemons.url : pokemons.pokemon.url} />
                    ))
                }

            </ul>
            <button className='button_delete_circle' onClick={() => setPage(Math.random()*totalpages)}
                disabled={page >= totalpages}
            > <i className="fas fa-forward"></i>Refrescar
            </button>
        </div>

    );
};

export default Pokemons;