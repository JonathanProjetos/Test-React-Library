import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Testa a implementação do Pokedex', () => {
  test('Testa se e renderizado encontered pokemons', () => {
    const { history } = renderWithRouter(<App />);

    history.push('/');
    const textoPoke = screen.getByRole('heading',
      { level: 2, name: /Encountered pokémons/i });
    expect(textoPoke).toBeInTheDocument();
  });

  test('Testa se ao clicar no botão o pokemon e exibito um a um', () => {
    const { history } = renderWithRouter(<App />);

    history.push('/');

    const nextPokemon = screen.getByRole('button', { name: /próximo pokémon/i });
    expect(nextPokemon).toBeInTheDocument();

    const pikachu = screen.getByText(/pikachu/i);
    expect(pikachu).toBeInTheDocument();
    userEvent.click(nextPokemon);
    const Charmander = screen.getByText(/Charmander/i);
    expect(Charmander).toBeInTheDocument();
    userEvent.click(nextPokemon);
    const Caterpie = screen.getByText(/Caterpie/i);
    expect(Caterpie).toBeInTheDocument();
    userEvent.click(nextPokemon);
    const Ekans = screen.getByText(/Ekans/i);
    expect(Ekans).toBeInTheDocument();
    userEvent.click(nextPokemon);
    const Alakazam = screen.getByText(/Alakazam/i);
    expect(Alakazam).toBeInTheDocument();
    userEvent.click(nextPokemon);
    const Mew = screen.getByText(/Mew/i);
    expect(Mew).toBeInTheDocument();
    userEvent.click(nextPokemon);
    const Rapidash = screen.getByText(/Rapidash/i);
    expect(Rapidash).toBeInTheDocument();
    userEvent.click(nextPokemon);
    const Snorlax = screen.getByText(/Snorlax/i);
    expect(Snorlax).toBeInTheDocument();
    userEvent.click(nextPokemon);
    const Dragonair = screen.getByText(/Dragonair/i);
    expect(Dragonair).toBeInTheDocument();
    userEvent.click(nextPokemon);
    const pikachu1 = screen.getByText(/pikachu/i);
    expect(pikachu1).toBeInTheDocument();
    userEvent.click(nextPokemon);
  });

  test('Teste se é mostrado apenas um pokémon por vez', () => {
    const { history } = renderWithRouter(<App />);

    history.push('/');
    const checkPoke = screen.getAllByText(/More details/i);
    expect(checkPoke).toHaveLength(1);
  });

  test('Teste a pokedes tem os botões de filtro', () => {
    const { history } = renderWithRouter(<App />);
    const NUMBERNONE = 9;
    history.push('/');

    const checkPoke = screen.getAllByRole('button');
    expect(checkPoke).toHaveLength(NUMBERNONE);
  });

  test('Testa se tem um botão para cada tipo de pokemon', () => {
    const { history } = renderWithRouter(<App />);

    history.push('/');
    const btnAll = screen.getByRole('button', { name: /all/i });
    expect(btnAll).toBeInTheDocument();
    const btnEletric = screen.getAllByRole('button', { name: /electric/i });
    expect(btnEletric).toBeDefined();
    const btnFire = screen.getAllByRole('button', { name: /fire/i });
    expect(btnFire).toBeDefined();
    const btnBug = screen.getAllByRole('button', { name: /bug/i });
    expect(btnBug).toBeDefined();
    const btnPoison = screen.getAllByRole('button', { name: /poison/i });
    expect(btnPoison).toBeDefined();
    const btnPsychic = screen.getAllByRole('button', { name: /psychic/i });
    expect(btnPsychic).toBeDefined();
    const btnNormal = screen.getAllByRole('button', { name: /normal/i });
    expect(btnNormal).toBeDefined();
    const btnDragon = screen.getAllByRole('button', { name: /dragon/i });
    expect(btnDragon).toBeDefined();
  });

  test('Teste se após clicar em um tipo apareça pokemons somente do tipo', () => {
    const { history } = renderWithRouter(<App />);

    history.push('/');
    const btnDragon = screen.getByRole('button', { name: /dragon/i });
    expect(btnDragon).toBeDefined();

    userEvent.click(btnDragon);
    const PokDragon = screen.getByText(/Dragonair/i);
    expect(PokDragon).toBeDefined();
  });

  test('Testa se os pokemons estão disponiveis apos clicar all ', () => {
    const { history } = renderWithRouter(<App />);

    history.push('/');

    const btnDragon = screen.getByRole('button', { name: /dragon/i });
    expect(btnDragon).toBeDefined();

    userEvent.click(btnDragon);
    const PokDragon = screen.getByText(/Dragonair/i);
    expect(PokDragon).toBeDefined();

    const nextPokemon = screen.getByRole('button', { name: /próximo pokémon/i });
    expect(nextPokemon).toBeInTheDocument();

    const btnAll = screen.getByRole('button', { name: /all/i });
    expect(btnAll).toBeInTheDocument();

    userEvent.click(btnAll);

    const pikachu = screen.getByText(/pikachu/i);
    expect(pikachu).toBeInTheDocument();
    userEvent.click(nextPokemon);
    const Charmander = screen.getByText(/Charmander/i);
    expect(Charmander).toBeInTheDocument();
    userEvent.click(nextPokemon);
    const Caterpie = screen.getByText(/Caterpie/i);
    expect(Caterpie).toBeInTheDocument();
    userEvent.click(nextPokemon);
    const Ekans = screen.getByText(/Ekans/i);
    expect(Ekans).toBeInTheDocument();
    userEvent.click(nextPokemon);
    const Alakazam = screen.getByText(/Alakazam/i);
    expect(Alakazam).toBeInTheDocument();
    userEvent.click(nextPokemon);
    const Mew = screen.getByText(/Mew/i);
    expect(Mew).toBeInTheDocument();
    userEvent.click(nextPokemon);
    const Rapidash = screen.getByText(/Rapidash/i);
    expect(Rapidash).toBeInTheDocument();
    userEvent.click(nextPokemon);
    const Snorlax = screen.getByText(/Snorlax/i);
    expect(Snorlax).toBeInTheDocument();
    userEvent.click(nextPokemon);
    const Dragonair = screen.getByText(/Dragonair/i);
    expect(Dragonair).toBeInTheDocument();
    userEvent.click(nextPokemon);
  });

  test('Testa se ao entrar na pagina o filtro all esta ativo', () => {
    const { history } = renderWithRouter(<App />);

    history.push('/');

    const nextPokemon = screen.getByRole('button', { name: /próximo pokémon/i });
    expect(nextPokemon).toBeInTheDocument();

    const pikachu = screen.getByText(/pikachu/i);
    expect(pikachu).toBeInTheDocument();
    userEvent.click(nextPokemon);
    const Charmander = screen.getByText(/Charmander/i);
    expect(Charmander).toBeInTheDocument();
    userEvent.click(nextPokemon);
    const Caterpie = screen.getByText(/Caterpie/i);
    expect(Caterpie).toBeInTheDocument();
    userEvent.click(nextPokemon);
    const Ekans = screen.getByText(/Ekans/i);
    expect(Ekans).toBeInTheDocument();
    userEvent.click(nextPokemon);
    const Alakazam = screen.getByText(/Alakazam/i);
    expect(Alakazam).toBeInTheDocument();
    userEvent.click(nextPokemon);
    const Mew = screen.getByText(/Mew/i);
    expect(Mew).toBeInTheDocument();
    userEvent.click(nextPokemon);
    const Rapidash = screen.getByText(/Rapidash/i);
    expect(Rapidash).toBeInTheDocument();
    userEvent.click(nextPokemon);
    const Snorlax = screen.getByText(/Snorlax/i);
    expect(Snorlax).toBeInTheDocument();
    userEvent.click(nextPokemon);
    const Dragonair = screen.getByText(/Dragonair/i);
    expect(Dragonair).toBeInTheDocument();
    userEvent.click(nextPokemon);
  });

  test('Testa se tem data-testId presente na tela', () => {
    const { history } = renderWithRouter(<App />);

    history.push('/');
    const tipoTest = screen.getAllByTestId('pokemon-type-button');
    expect(tipoTest).toBeDefined();
  });
});
