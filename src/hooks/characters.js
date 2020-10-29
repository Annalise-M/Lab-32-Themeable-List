import { useState, useEffect } from 'react';
import { getCharacters } from '../services/BreakingBadApi.js';

export const useCharacters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters()
      .then(fetchedCharacters => setCharacters(fetchedCharacters));
  }, []);

  return characters;
};
