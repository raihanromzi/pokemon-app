import React from 'react';
import { useInfiniteQuery, useQuery } from 'react-query';
import InfiniteScroll from 'react-infinite-scroller';
import { fetchInfinitePokemons, fetchRandomPokemon } from '../api/pokemon';
import PokemonCard from './PokemonCard';
import { SimpleGrid, Flex, useBreakpointValue, Heading, Box } from '@chakra-ui/react';
import PokemonCardLage from './PokemonCardLarge';

const PokemonList = () => {
  const { data, isLoading, isError, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: 'pokemon',
    getNextPageParam: (lastPage) => lastPage.pageParam,
    queryFn: fetchInfinitePokemons
  });

  // get random pokemon using react-query
  const randomPokemonQuery = useQuery('pokemonHeader', fetchRandomPokemon);

  const gridColumnCount = useBreakpointValue({ base: 1, md: 2 }); // Atur jumlah kolom sesuai kebutuhan

  if (randomPokemonQuery.isLoading) {
    return <h1>Loading...</h1>;
  }

  if (randomPokemonQuery.isError) {
    return <h1>Error</h1>;
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>Error</h1>;
  }

  return (
    <Flex flexDir={'column'} marginY={2}>
      <Box display={'flex'} padding={10} style={{ fontSize: '24px' }}>
        <Heading>Destaque</Heading>
      </Box>
      <Flex justifyContent={'center'} padding={10} my={-10} fontSize={'16px'}>
        <PokemonCardLage
          name={randomPokemonQuery.data.name}
          description={randomPokemonQuery.data.flavor_text_entries[0]}
          id={randomPokemonQuery.data.id}
        />
      </Flex>

      <Box display={'flex'} padding={10} style={{ fontSize: '24px' }}>
        <Heading>Pokemons</Heading>
      </Box>
      <Flex justifyContent={'center'}>
        <InfiniteScroll
          loadMore={fetchNextPage}
          hasMore={hasNextPage}
          loader={<h4 key="loader">...Loading</h4>}>
          <SimpleGrid
            columns={gridColumnCount === 1 ? 2 : 4}
            spacing={gridColumnCount === 1 ? 5 : 10}>
            {data.pages.map((page) =>
              page.pokemons.map(({ name, url }, index) => (
                <PokemonCard key={index} name={name} url={url} fav />
              ))
            )}
          </SimpleGrid>
        </InfiniteScroll>
      </Flex>
    </Flex>
  );
};

export default PokemonList;
