import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import App from '../App';

const ROTA_DRAGONAIR = 'pokemons/148';

describe('Testa toda a aplicação do PokemonDetail', () => {
  test('Testa se ao ser direcionado para a detalhes o "Datails" deve esta lá', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/');

    const btnDragon = screen.getByRole('button', { name: /dragon/i });
    expect(btnDragon).toBeInTheDocument();

    userEvent.click(btnDragon);

    const detailDragon = screen.getByRole('link', { name: /more details/i });
    expect(detailDragon).toBeInTheDocument();

    userEvent.click(detailDragon);

    const titleDetail = screen.getAllByText(/Dragonair Details/i);
    expect(titleDetail[0]).toBeInTheDocument();
  });

  test('Testa se não aparece o link de navegação para detalhes', () => {
    const { history } = renderWithRouter(<App />);
    history.push(ROTA_DRAGONAIR);

    const detailDragon = screen.queryByRole('link', { name: /more details/i });
    expect(detailDragon).not.toBeInTheDocument();
  });

  test('Tesa se a seção de detalhe tem um h2 com texto "summary"', () => {
    const { history } = renderWithRouter(<App />);
    history.push(ROTA_DRAGONAIR);

    const textoH2 = screen.getByRole('heading', { name: /summary/i, level: 2 });
    expect(textoH2).toBeInTheDocument();
  });

  test('Testa se tem um parágrafo com um descrição especifica', () => {
    const { history } = renderWithRouter(<App />);
    history.push(ROTA_DRAGONAIR);

    const paragrafoPokeDetalhes = screen.getByText('They say that if it emits'
    + ' an aura from its whole body, the weather will begin to change instantly.');
    expect(paragrafoPokeDetalhes).toBeInTheDocument();
  });

  test('Testa se na seção de detalhes existe h2 com "Game Locations"', () => {
    const { history } = renderWithRouter(<App />);
    history.push(ROTA_DRAGONAIR);

    const textLocation = screen.getByRole('heading',
      { name: /Game Locations of Dragonair/i, level: 2 });
    expect(textLocation).toBeInTheDocument();
  });

  test('Testa se as localizações e renderizadas em detalhes', () => {
    const { history } = renderWithRouter(<App />);
    history.push(ROTA_DRAGONAIR);

    const MapPoke1 = screen.getByText(/Johto Route 45/i);
    expect(MapPoke1).toBeInTheDocument();

    const MapPoke2 = screen.getByText(/Johto Dragon's Den/i);
    expect(MapPoke2).toBeInTheDocument();
  });

  test('Testa se exibido o nome dos locais mais as imagens', () => {
    const { history } = renderWithRouter(<App />);
    history.push(ROTA_DRAGONAIR);

    const imagePoke1 = screen.getAllByRole('img');
    expect(imagePoke1[1]).toBeInTheDocument();
    const MapPoke1 = screen.getByText(/Johto Route 45/i);
    expect(MapPoke1).toBeInTheDocument();

    const imagePoke2 = screen.getAllByRole('img');
    expect(imagePoke2[2]).toBeInTheDocument();
    const MapPoke2 = screen.getByText(/Johto Dragon's Den/i);
    expect(MapPoke2).toBeInTheDocument();
  });

  test('Testa se a imagem tem o atributo "src"', () => {
    const { history } = renderWithRouter(<App />);
    history.push(ROTA_DRAGONAIR);

    const imagePoke1 = screen.getAllByRole('img');
    expect(imagePoke1[1]).toBeInTheDocument();
    expect(imagePoke1[1]).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/2/21/Johto_Route_45_Map.png');

    const imagePoke2 = screen.getAllByRole('img');
    expect(imagePoke2[2]).toBeInTheDocument();
    expect(imagePoke2[2]).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/1/1e/Johto_Dragons_Den_Map.png');
  });

  test('Testa se a imagens tem o texto alt', () => {
    const { history } = renderWithRouter(<App />);
    history.push(ROTA_DRAGONAIR);

    const imagePoke1 = screen.getAllByAltText(/Dragonair location/i);
    expect(imagePoke1[0]).toBeDefined();

    const imagePoke2 = screen.getAllByAltText(/Dragonair location/i);
    expect(imagePoke2[1]).toBeDefined();
  });

  test('Testa se o usuario pode selecionar favorito em detalhes', () => {
    const { history } = renderWithRouter(<App />);
    history.push(ROTA_DRAGONAIR);

    const favorite = screen.getByRole('checkbox', { name: /Pokémon favoritado?/i });
    expect(favorite).toBeInTheDocument();

    userEvent.click(favorite);
    const star = screen.getAllByRole('img');
    expect(star[1]).toHaveAttribute('src', '/star-icon.svg');
    expect(star[1]).toBeInTheDocument();

    userEvent.click(favorite);
    expect(star[1]).toHaveAttribute('src', '/star-icon.svg');
    expect(star[1]).not.toBeInTheDocument();
  });
});
