import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Text, Image, ButtonGroup, Button, Flex, Icon } from '@chakra-ui/react';
import { FaHeart, FaInfoCircle } from 'react-icons/fa';
import { useQuery } from 'react-query';

const PokemonCard = ({ name, url }) => {
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState({
    name: '',
    url: '',
    index: '',
    imageUrl: ''
  });

  useEffect(() => {
    let index = url.split('/')[url.split('/').length - 2];
    let imageUrl = `${'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world'}/${index}.svg`;
    setPokemon({ name, url, index, imageUrl });
  }, [name, url]);

  return (
    <Flex justifyItems={'center'} alignItems={'center'} justifyContent={'center'}>
      <Box
        key={name}
        position="relative"
        cursor="pointer"
        margin={['4px', '4px']}
        padding={['2rem', '2rem']}
        borderRadius="10px"
        textAlign="center"
        maxWidth="157px"
        maxHeight="157px"
        marginBottom="20px"
        boxShadow="0 3px 15px rgba(0, 0, 0, 0.089)"
        background={'#0E1F40'}
        textColor={'#fff'}
        overflow="hidden"
        justifyContent="center"
        alignContent={'center'}>
        <Image boxSize="90px" objectFit="cover" marginTop={-6} src={pokemon.imageUrl} />
        <Text textTransform={'capitalize'} padding={'2px'} fontSize={'14px'}>
          {name}
        </Text>
        <Box bg="#263C66" borderRadius="xl">
          <ButtonGroup size={'xs'}>
            <Button
              bg={'#263C66'}
              size="xs"
              _hover={{
                bg: 'transparent',
                transform: 'scale(1.50)',
                transition: 'transform 0.15s ease-in'
              }}>
              <Icon as={FaHeart} color={'white'} boxSize={4} />
            </Button>
            <Button
              bg={'#263C66'}
              size="xs"
              _hover={{
                bg: 'transparent',
                transform: 'scale(1.50)',
                transition: 'transform 0.15s ease-in'
              }}>
              <Icon
                as={FaInfoCircle}
                color={'white'}
                boxSize={4}
                onClick={() => navigate(`/pokemon/${name}`)}
              />
            </Button>
          </ButtonGroup>
        </Box>
      </Box>
    </Flex>
  );
};

export default PokemonCard;
