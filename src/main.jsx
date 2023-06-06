import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import PokemonList from './routes/PokemonList';
import PokemonDetail from './components/PokemonDetail';

const router = createBrowserRouter([
  {
    path: '/pokemon',
    element: <PokemonList />
  },
  {
    path: '/pokemon/:name',
    element: <PokemonDetail />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={new QueryClient()}>
      <ChakraProvider>
        <RouterProvider router={router} />
        <ReactQueryDevtools />
      </ChakraProvider>
    </QueryClientProvider>{' '}
  </React.StrictMode>
);
