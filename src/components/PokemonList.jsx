import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';

function PokemonList() {
  const pokemonQuery = useQuery({
    queryKey: 'pokemon',
    queryFn: () => fetch('https://pokeapi.co/api/v2/pokemon').then((res) => res.json())
  });
  const navigate = useNavigate();

  console.log(pokemonQuery.data, pokemonQuery.isLoading, pokemonQuery.isError);

  if (pokemonQuery.isLoading) {
    return <h1>Loading...</h1>;
  }

  if (pokemonQuery.isError) {
    return <h1>Error</h1>;
  }

  return (
    <div>
      <h1>Pokemon List</h1>
      {pokemonQuery.data.results.map((pokemon, index) => (
        <div key={index}>
          <button
            onClick={() => {
              navigate(`/pokemon/${pokemon.name}`);
            }}>
            {pokemon.name}
          </button>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default PokemonList;
