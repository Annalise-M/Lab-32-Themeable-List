import React from 'react';
import { useCharacters } from '../../hooks/characters';
import CharacterItem from './CharacterItem';
import { useThemePicker } from '../../hooks/theme.js';
import styles from './CharacterListStyles.css';
import themes from '../theme/Theme.css';


const CharacterList = () => {
  const characters = useCharacters();
  const { themeMode } = useThemePicker();
  
  const characterElements = characters.map(character => (
    <li key={character.char_id}>
      <CharacterItem {...character} />
    </li>
  ));

  return (
    // eslint-disable-next-line max-len
    <ul data-testid="characters" className={`${styles.CharacterList} ${themeMode === 'darkTheme' ? themes.darkTheme : themes.lightTheme}`}>
      {characterElements}
    </ul>
  );
};

export default CharacterList;
