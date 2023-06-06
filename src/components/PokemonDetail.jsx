import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

function PokemonDetail() {
  const { name } = useParams();

  const pokemonQuery = useQuery({
    queryKey: ['pokemon', name],
    queryFn: () => fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then((res) => res.json())
  });
  return (
    <div>
      <h1>Pokemon Detail</h1>
      {pokemonQuery.isLoading && <h1>Loading...</h1>}
      {pokemonQuery.isError && <h1>Error</h1>}
      {pokemonQuery.data && (
        <div>
          <h1>{pokemonQuery.data.name}</h1>
          <img src={pokemonQuery.data.sprites.front_default} alt={pokemonQuery.data.name} />
        </div>
      )}
    </div>
  );
}

export default PokemonDetail;
