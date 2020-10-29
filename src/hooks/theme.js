import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export const useThemePicker = () => {
  const { themeMode, toggle } = useContext(ThemeContext);
  
  return { themeMode, toggle };
};


