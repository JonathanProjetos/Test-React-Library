import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import { About } from '../components';

describe('Teste á aplicação About.js ', () => {
  test('verifica se o título sobre a pokédex e renderizado ', () => {

  });

  test('verifica se a página contém um h2 com nome "About Pokédex"', () => {
    renderWithRouter(<About />);
    const pegaH2 = screen.getByRole('heading', { level: 2, name: /about pokédex/i });
    expect(pegaH2).toBeInTheDocument();
  });

  test('Verifica se a página contém informações sobre a pokédex', () => {
    renderWithRouter(<About />);
    const primeiroParagrafo = screen.getByText('This application simulates a Pokédex,'
    + ' a digital encyclopedia containing all Pokémons');
    expect(primeiroParagrafo).toBeInTheDocument();

    const segundoParagrafo = screen.getByText('One can filter Pokémons by type,'
    + ' and see more details for each one of them');
    expect(segundoParagrafo).toBeInTheDocument();
  });

  test('Verifica se a imagem e renderizada na tela', () => {
    renderWithRouter(<About />);
    const imageAbout = screen.getByRole('img');
    expect(imageAbout).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
    expect(imageAbout).toBeInTheDocument();
    const pegaImg = screen.getByAltText('Pokédex');
    expect(pegaImg).toBeInTheDocument();
  });
});
