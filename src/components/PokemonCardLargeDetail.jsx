import { useEffect, useState } from 'react';
import { Box, Text, Image, ButtonGroup, Button, Flex, Icon, Divider } from '@chakra-ui/react';
import { FaHeart } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { addFavorite } from '../redux/favoriteSlice';

const PokemonCardLageDetail = ({ name, id, description }) => {
  const dispatch = useDispatch();

  const [pokemon, setPokemon] = useState({
    name: '',
    id: '',
    imageUrl: ''
  });

  useEffect(() => {
    let imageUrl = `${'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world'}/${id}.svg`;
    setPokemon({ name, imageUrl });
  }, [name, id]);

  const handleFavoriteAdd = (pokemon) => {
    dispatch(
      addFavorite({
        name: pokemon.name,
        imageUrl: pokemon.imageUrl,
        id: pokemon.id
      })
    );
  };

  return (
    <Flex justifyItems="center" alignItems="center" justifyContent="center">
      <Box
        key={name}
        position="relative"
        cursor="pointer"
        margin={['4px', '4px']}
        padding={['2rem', '2rem']}
        borderRadius="10px"
        textAlign="center"
        maxWidth="fit-content"
        marginBottom="20px"
        boxShadow="0 3px 15px rgba(0, 0, 0, 0.089)"
        background="#0E1F40"
        textColor="#fff"
        overflow="hidden"
        justifyContent="center"
        alignContent="center"
        display="flex">
        <Box display="flex" alignItems="center">
          <Image boxSize="90px" objectFit="cover" marginTop={-6} src={pokemon.imageUrl} />
        </Box>
        <Divider
          borderWidth={1}
          orientation="vertical"
          mx={4}
          borderColor="white"
          justifyContent={'center'}
          alignItems={'center'}
          alignSelf={'center'}
          height={190}
        />
        <Box
          flex="1"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
          paddingLeft="rem">
          <Text fontSize={'20px'} fontWeight={'bold'} textTransform={'capitalize'}>
            {name}
          </Text>
          <Text textTransform={'capitalize'} textAlign={'start'}>
            {description.flavor_text.replace(/\n/g, '')}
          </Text>
          <Box display={'flex'} borderRadius="xl" alignSelf={'flex-end'} marginTop={2}>
            <ButtonGroup size="xs">
              <Button
                size="xs"
                bg={'transparent'}
                _hover={{
                  bg: 'transparent',
                  transform: 'scale(1.50)',
                  transition: 'transform 0.15s ease-in'
                }}>
                <Icon
                  as={FaHeart}
                  color="white"
                  boxSize={4}
                  onClick={() => handleFavoriteAdd(pokemon)}
                />
              </Button>
            </ButtonGroup>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default PokemonCardLageDetail;
