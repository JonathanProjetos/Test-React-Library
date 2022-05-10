import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import FavoritePokemons from '../components/FavoritePokemons';
import App from '../App';

describe('Testa a implementação do componente FavoritePokemon', () => {
  test('Verifica se a mensagem e senderizada sem pokémon', () => {
    renderWithRouter(<FavoritePokemons />);
    const notFavoites = screen.getByText('No favorite pokemon found');
    expect(notFavoites).toBeInTheDocument();
  });

  test('Verifica se tem pokemon está na tela quando favoritado', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/pokemons/25');
    const checkFavorite = screen.getByRole('checkbox', { name: /Pokémon favoritado?/i });
    userEvent.click(checkFavorite);
    history.push('/pokemons/23');
    const checkFavorite2 = screen.getByRole('checkbox', { name: /Pokémon favoritado?/i });
    userEvent.click(checkFavorite2);
    history.push('/favorites');
    const LENGTH = 2;
    const linkMaisDetalhes = screen.getAllByRole('link', { name: 'More details' });
    expect(linkMaisDetalhes).toHaveLength(LENGTH);
  });
});
