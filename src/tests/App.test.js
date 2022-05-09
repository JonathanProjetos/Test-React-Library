import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Teste se o topo da aplicação contém um conjunto fixo de links', () => {
  test('Verifica se o link Home é renderizado na tela', () => {
    renderWithRouter(<App />);
    const linkHome = screen.getByRole('link', { name: /home/i });
    expect(linkHome).toBeInTheDocument();
  });

  test('Verifica se o link About é renderizado na tela', () => {
    renderWithRouter(<App />);
    const linkHome = screen.getByRole('link', { name: /about/i });
    expect(linkHome).toBeInTheDocument();
  });

  test('Verifica se o link Home é renderizado na tela', () => {
    renderWithRouter(<App />);

    const linkHome = screen.getByRole('link', { name: /Favorite Pokémons/i });
    expect(linkHome).toBeInTheDocument();
  });

  test('Verifica se ao clicar em Home volta para rota "/" ', () => {
    const { history } = renderWithRouter(<App />);

    const linkHome = screen.getByRole('link', { name: /home/i });
    expect(linkHome).toBeInTheDocument();
    userEvent.click(linkHome);
    expect(history.location.pathname).toBe('/');
  });

  test('Verifica se ao clicar em About volta para rota "About" ', () => {
    const { history } = renderWithRouter(<App />);

    const linkAbout = screen.getByRole('link', { name: /About/i });
    expect(linkAbout).toBeInTheDocument();
    userEvent.click(linkAbout);
    expect(history.location.pathname).toBe('/about');
  });

  test('Verifica se ao clicar em favotite volta para rota "Favorite Pokémons" ', () => {
    const { history } = renderWithRouter(<App />);

    const linkFavorite = screen.getByRole('link', { name: /Favorite Pokémons/i });
    expect(linkFavorite).toBeInTheDocument();
    userEvent.click(linkFavorite);
    expect(history.location.pathname).toBe('/favorites');
  });

  test('Verifica se ao clicar em Home volta para rota "Favorite Pokémons" ', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/xablau2.0');
    const textopage = screen.getByRole('heading',
      { level: 2, name: /Page requested not found/i });

    expect(textopage).toBeInTheDocument();
  });
});
