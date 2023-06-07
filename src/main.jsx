import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import PokemonList from './routes/PokemonList';
import PokemonDetail from './components/PokemonDetail';
import Favorite from './routes/Favorite';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const router = createBrowserRouter([
  {
    path: '/pokemon',
    element: <PokemonList />
  },
  {
    path: '/pokemon/:name',
    element: <PokemonDetail />
  },
  {
    path: '/favorite',
    element: <Favorite />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={new QueryClient()}>
        <ChakraProvider>
          <RouterProvider router={router} />
          <ReactQueryDevtools />
        </ChakraProvider>
      </QueryClientProvider>{' '}
    </Provider>
  </React.StrictMode>
);
