import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import NotFound from '../components/NotFound';
import App from '../App';

describe('Testa a implementação do componente NotFound', () => {
  test('Teste se a página contém um heading `h2` com o texto', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/xablau3.0');
    const textNotFound = screen.getByRole('heading',
      { level: 2, name: /Page requested not found/i });
    expect(textNotFound).toBeInTheDocument();
  });

  test('Testa a sa imagem e renderizada na tela ', () => {
    renderWithRouter(<NotFound />);
    const pegarImage = screen.getAllByRole('img');
    expect(pegarImage[1]).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
