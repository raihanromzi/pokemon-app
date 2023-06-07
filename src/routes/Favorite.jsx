import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { Flex, Box, Heading } from '@chakra-ui/react';
// import { useSelector } from 'react-redux';
import PokemonCardLageFav from '../components/PokemonCardLargeFav';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../database/firebase';

const Favorite = () => {
  const [favorites, setFavorites] = useState();

  // const favorite = useSelector((state) => {
  //   return state.favorite;
  // });

  const getFavorite = async () => {
    const querySnapshot = await getDocs(collection(db, 'favorites'));
    const favoriteFromFirebase = querySnapshot.docs.map((doc) => ({
      firebaseId: doc.id,
      ...doc.data()
    }));
    setFavorites(favoriteFromFirebase);
  };

  useEffect(() => {
    getFavorite();
  }, []);

  // Helper function to filter unique objects based on a property value
  // const getUniqueByProperty = (arr, property) => {
  //   const uniqueValues = new Set();
  //   return arr.filter((obj) => {
  //     if (!uniqueValues.has(obj[property])) {
  //       uniqueValues.add(obj[property]);
  //       return true;
  //     }
  //     return false;
  //   });
  // };

  // remove duplicate in favorite
  // const uniqueFavorite = getUniqueByProperty(favorite.favorites, 'name');

  // remove pokemon

  return (
    <>
      <Navbar />
      <Flex flexDir={'column'} marginY={2}>
        <Box display={'flex'} padding={10} style={{ fontSize: '24px' }}>
          <Heading>Favoritos</Heading>
        </Box>
        <Flex flexDir={'column'} justifyContent={'center'} padding={10} my={-10} fontSize={'16px'}>
          {/* If using Redux */}
          {/* {uniqueFavorite.map((pokemon) => (
            <PokemonCardLageFav
              key={pokemon.name}
              name={pokemon.name}
              imageUrl={pokemon.imageUrl}
              id={pokemon.id}
            />
          ))} */}
          {favorites
            ? favorites.map((pokemon) => (
                <PokemonCardLageFav
                  key={pokemon.name}
                  name={pokemon.name}
                  imageUrl={pokemon.imageUrl}
                  id={pokemon.id}
                  firestoreId={pokemon.firebaseId}
                />
              ))
            : null}
        </Flex>
      </Flex>
    </>
  );
};

export default Favorite;
