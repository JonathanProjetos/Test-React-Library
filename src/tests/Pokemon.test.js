import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Testa a aplicação do componente pokemon', () => {
  test('Testa se o nome correspondente e renderizado', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/');

    const btnDragon = screen.getByRole('button', { name: /dragon/i });
    expect(btnDragon).toBeDefined();
    userEvent.click(btnDragon);
    const Dragonair = screen.getByText(/Dragonair/i);
    expect(Dragonair).toBeInTheDocument();
  });

  test('Testa se o tipo correto e renderizado', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/');

    const btnDragon = screen.getByRole('button', { name: /dragon/i });
    expect(btnDragon).toBeDefined();
    userEvent.click(btnDragon);
    const typePoke = screen.getAllByText(/dragon/i);
    expect(typePoke[2]).toBeInTheDocument();
  });

  test('Testa e o peso so pokemon especifico e renderizado', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/');

    const btnDragon = screen.getByRole('button', { name: /dragon/i });
    expect(btnDragon).toBeDefined();
    userEvent.click(btnDragon);
    const PesoPoke = screen.getAllByText('Average weight: 16.5 kg');
    expect(PesoPoke).toBeDefined();
  });

  test('Testa se a image do pokemon especifico e renderizado', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/');

    const btnDragon = screen.getByRole('button', { name: /dragon/i });
    expect(btnDragon).toBeDefined();
    userEvent.click(btnDragon);
    const imgPoke = screen.getByRole('img');
    expect(imgPoke).toBeInTheDocument();
    expect(imgPoke).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/2/2c/Spr_5b_148.png');
    const altImgPoke = screen.getByAltText('Dragonair sprite');
    expect(altImgPoke).toBeInTheDocument();
  });

  test('Testa se o campo de busca tem o id especifico ', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/');

    const btnBug = screen.getByRole('button', { name: /bug/i });
    expect(btnBug).toBeDefined();
    userEvent.click(btnBug);
    const linkBug = screen.getByRole('link', { name: /More details/i });
    expect(linkBug).toBeDefined();
    userEvent.click(linkBug);
    expect(history.location.pathname).toBe('/pokemons/10');
  });

  test('Testa se o navegador redireciona para a pagina do poke especifico', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/pokemons/10');

    const titlePoke = screen.getByText(/Caterpie Details/i);
    expect(titlePoke).toBeDefined();
  });

  test('Testa se o icone favorito aparece nos pokemos favoritados', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/');

    const btnBug = screen.getByRole('button', { name: /bug/i });
    expect(btnBug).toBeDefined();
    userEvent.click(btnBug);
    const linkBug = screen.getByRole('link', { name: /More details/i });
    expect(linkBug).toBeDefined();
    userEvent.click(linkBug);
    const favoritePoke = screen.getByRole('checkbox', { name: /Pokémon favoritado?/i });
    userEvent.click(favoritePoke);
    const altFavorite = screen.getByAltText(/caterpie is marked as favorite/i);
    expect(altFavorite).toBeDefined();
    const imgFavorite = screen.getAllByRole('img');
    expect(imgFavorite[1]).toHaveAttribute('src', '/star-icon.svg');
    expect(imgFavorite[1]).toBeInTheDocument();
    expect(favoritePoke).toBeEnabled();
  });
});
