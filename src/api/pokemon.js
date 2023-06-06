import axiosInstance from '../api/axios';

export const fetchInfinitePokemons = async ({ pageParam = 1 }) => {
  const { data } = await axiosInstance.get(`pokemon?limit=20&offset=${(pageParam - 1) * 20}`);
  const { results } = data;

  return { pokemons: results, pageParam: pageParam + 1 };
};

// get random pokemon by
export const fetchRandomPokemon = async () => {
  const { data } = await axiosInstance.get(
    `pokemon-species/${Math.floor(Math.random() * 100) + 1}`
  );
  return data;
};
