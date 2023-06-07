import React from 'react';
import Navbar from '../components/Navbar';
import { Flex, Box, Heading } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import PokemonCardLageFav from '../components/PokemonCardLargeFav';
import { useDispatch } from 'react-redux';

const Favorite = () => {
  const dispatch = useDispatch();

  const favorite = useSelector((state) => {
    return state.favorite;
  });

  // Helper function to filter unique objects based on a property value
  const getUniqueByProperty = (arr, property) => {
    const uniqueValues = new Set();
    return arr.filter((obj) => {
      if (!uniqueValues.has(obj[property])) {
        uniqueValues.add(obj[property]);
        return true;
      }
      return false;
    });
  };

  // remove duplicate in favorite
  const uniqueFavorite = getUniqueByProperty(favorite.favorites, 'name');

  // remove pokemon

  return (
    <>
      <Navbar />
      <Flex flexDir={'column'} marginY={2}>
        <Box display={'flex'} padding={10} style={{ fontSize: '24px' }}>
          <Heading>Favoritos</Heading>
        </Box>
        <Flex flexDir={'column'} justifyContent={'center'} padding={10} my={-10} fontSize={'16px'}>
          {uniqueFavorite.map((pokemon) => (
            <PokemonCardLageFav
              key={pokemon.name}
              name={pokemon.name}
              imageUrl={pokemon.imageUrl}
              id={pokemon.id}
            />
          ))}
        </Flex>
      </Flex>
    </>
  );
};

export default Favorite;
