import React from 'react';
// eslint-disable-next-line max-len
import { render, cleanup, fireEvent, waitFor, screen } from '@testing-library/react';
import App from './App';
import { ThemeProvider } from '../../context/ThemeContext';
import { getCharacters } from '../../services/BreakingBadApi';

jest.mock('../../services/BreakingBadApi.js');

describe('App component', () => {
  afterEach(() => cleanup());
  it('renders App and theme change', async() => {
    getCharacters.mockResolvedValue([
      {
        'char_id': '1',
        'name': 'Walter White',
        'img': 'https://www.breakingbadapi.com/api/characters/1'
      }
    ]);
    render(
      <ThemeProvider>
        <App />
      </ThemeProvider>
    );

    const button = screen.getByRole('button');
    const characterList = await screen.findByTestId('characters');

    fireEvent.click(button);

    await waitFor(() => {
      expect(characterList).toHaveClass('lightTheme');
    });
  
    fireEvent.click(button);

    return waitFor(() => {
      expect(characterList).toHaveClass('darkTheme');
    });
  });
});
