import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex, IconButton, Text, Badge } from '@chakra-ui/react';
import { MdCatchingPokemon } from 'react-icons/md';
import { BsFillBookmarkFill } from 'react-icons/bs';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../database/firebase';

function Navbar() {
  const [favorites, setFavorites] = useState([]);

  const getFavorite = async () => {
    const querySnapshot = await getDocs(collection(db, 'favorites'));
    const favoriteFromFirebase = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }));
    setFavorites(favoriteFromFirebase);
  };

  useEffect(() => {
    getFavorite();
  }, []);

  return (
    <Flex
      px={4}
      py={2}
      alignItems="center"
      position="fixed"
      bottom={10}
      right={0}
      zIndex={10}
      left="50%"
      boxShadow="0px 4px 6px rgba(0, 0, 0, 0.3)"
      transform="translateX(-50%)"
      justifyContent={'center'}
      style={{
        alignSelf: 'center',
        width: 231,
        height: 54,
        padding: 0,
        borderRadius: 9,
        paddingBottom: 5,
        borderTopWidth: 0,
        backgroundColor: '#0E1F40'
      }}>
      <Box display={'flex'} gap={10}>
        <Link to="/pokemon" mr={4}>
          <Flex direction="column" alignItems="center" justifyContent={'center'}>
            <IconButton
              as="span"
              icon={<MdCatchingPokemon color="white" />}
              aria-label="Pokemon List"
              size="xs"
              backgroundColor={'transparent'}
              _hover={{ backgroundColor: 'transparent' }}
            />
            <Text color={'white'} fontSize="xs">
              Home
            </Text>
          </Flex>
        </Link>
        <Link to="/favorite" mr={4}>
          <Flex direction="column" alignItems="center" justifyContent={'center'}>
            <IconButton
              as="span"
              icon={<BsFillBookmarkFill color="white" />}
              aria-label="Favorite"
              size="xs"
              backgroundColor={'transparent'}
              _hover={{ backgroundColor: 'transparent' }}
            />
            <Text color={'white'} fontSize="xs">
              Favorite
              <Box position="absolute" top="10px" right="70px" transform="translate(50%, -50%)">
                <Badge colorScheme="red" variant="solid">
                  {favorites.length}
                </Badge>
              </Box>
            </Text>
          </Flex>
        </Link>
      </Box>
    </Flex>
  );
}

export default Navbar;
