const fetch = require('node-fetch');

export const getCharacters = () => {
  return fetch('https://www.breakingbadapi.com/api/characters')
    .then(res => res.json())
    .then(characters => characters.map(character => ({
      char_id: character.char_id,
      name: character.name,
      img: character.img
    })));
};
