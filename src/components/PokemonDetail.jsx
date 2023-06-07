import React from 'react';
import { useQuery } from 'react-query';
import { useParams, useNavigate } from 'react-router-dom';
import PokemonCardLageDetail from './PokemonCardLargeDetail';
import {
  Flex,
  Box,
  Heading,
  Progress,
  Text,
  IconButton,
  ButtonGroup,
  Skeleton
} from '@chakra-ui/react';
import { IoIosArrowBack } from 'react-icons/io';

function PokemonDetail() {
  const { name } = useParams();
  const navigate = useNavigate();

  const pokemonQuery = useQuery({
    queryKey: ['pokemon', name],
    queryFn: () =>
      fetch(`https://pokeapi.co/api/v2/pokemon-species/${name}`).then((res) => res.json())
  });

  const statPokemonQuery = useQuery({
    queryKey: 'pokemonStat',
    queryFn: () => fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then((res) => res.json())
  });

  if (pokemonQuery.isLoading) {
    return <Skeleton height="20px" width="20px" />;
  }

  if (pokemonQuery.isError) {
    return <h1>Error</h1>;
  }

  if (statPokemonQuery.isLoading) {
    return <Skeleton height="20px" width="20px" />;
  }

  if (statPokemonQuery.isError) {
    return <h1>Error</h1>;
  }

  return (
    <Flex flexDir={'column'} mx={10} my={10}>
      <ButtonGroup>
        <IconButton
          onClick={() => navigate(-1)}
          mb={4}
          icon={<IoIosArrowBack color="black" />}
          variant="outline"
          size="sm"
          colorScheme="blue"
          _hover={{ bg: 'white' }}
          justifyContent="flex-start"
          textAlign="left"
          alignItems="center"
          width="fit-content"
          borderColor="transparent"
          paddingLeft={0}
        />
        <Text pt={1}>{name}</Text>
      </ButtonGroup>
      {pokemonQuery.data && (
        <PokemonCardLageDetail
          name={pokemonQuery.data.name}
          id={pokemonQuery.data.id}
          description={pokemonQuery.data.flavor_text_entries[0]}
        />
      )}
      {statPokemonQuery.data && (
        <>
          <Box display={'flex'} paddingTop={6} style={{ fontSize: '24px' }}>
            <Heading>Habilidades</Heading>
          </Box>
          <Flex
            alignItems="center"
            justifyContent={'space-between'}
            paddingTop={6}
            style={{ fontSize: '16px' }}>
            <Flex>
              <Text>HP : </Text>
            </Flex>
            <Flex>
              <Box flex={'1'}>
                <Progress value={statPokemonQuery.data.stats[0].base_stat} w={'200px'} />
              </Box>
            </Flex>
          </Flex>
          <Flex
            alignItems="center"
            justifyContent={'space-between'}
            paddingTop={6}
            style={{ fontSize: '16px' }}>
            <Flex>
              <Text>Attack : </Text>
            </Flex>
            <Flex>
              <Box flex={'1'}>
                <Progress mr={0} value={statPokemonQuery.data.stats[1].base_stat} w={'200px'} />
              </Box>
            </Flex>
          </Flex>
          <Flex
            alignItems="center"
            justifyContent={'space-between'}
            paddingTop={6}
            style={{ fontSize: '16px' }}>
            <Flex>
              <Text>Defense : </Text>
            </Flex>
            <Flex>
              <Box flex={'1'}>
                <Progress mr={0} value={statPokemonQuery.data.stats[2].base_stat} w={'200px'} />
              </Box>
            </Flex>
          </Flex>
          <Flex
            alignItems="center"
            justifyContent={'space-between'}
            paddingTop={6}
            style={{ fontSize: '16px' }}>
            <Flex>
              <Text>Special Attack : </Text>
            </Flex>
            <Flex>
              <Box flex={'1'}>
                <Progress mr={0} value={statPokemonQuery.data.stats[3].base_stat} w={'200px'} />
              </Box>
            </Flex>
          </Flex>
          <Flex
            alignItems="center"
            justifyContent={'space-between'}
            paddingTop={6}
            style={{ fontSize: '16px' }}>
            <Flex>
              <Text>Special Defense : </Text>
            </Flex>
            <Flex>
              <Box flex={'1'}>
                <Progress mr={0} value={statPokemonQuery.data.stats[4].base_stat} w={'200px'} />
              </Box>
            </Flex>
          </Flex>
          <Flex
            alignItems="center"
            justifyContent={'space-between'}
            paddingTop={6}
            style={{ fontSize: '16px' }}>
            <Flex>
              <Text>Speed : </Text>
            </Flex>
            <Flex>
              <Box flex={'1'}>
                <Progress mr={0} value={statPokemonQuery.data.stats[5].base_stat} w={'200px'} />
              </Box>
            </Flex>
          </Flex>
        </>
      )}
    </Flex>
  );
}

export default PokemonDetail;
