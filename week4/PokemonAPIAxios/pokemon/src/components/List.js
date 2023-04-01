import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PokemonList = props => {
    const [pokemonData, setPokemonData] = useState([{}]);
    useEffect(()=>{
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807&offset=0')
            .then(response=>{
                console.log(response)
                setPokemonData(response.data.results)
            })
    }, []); 
    return(
        <div>
            {pokemonData.map((pokemon) => (
               <li>{pokemon.name}</li>
            ))}
        </div>
    )
}

export default PokemonList;