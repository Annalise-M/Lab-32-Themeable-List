import React from 'react';
import { useThemePicker } from '../../hooks/theme.js';

const Header = () => {
  const { toggle } = useThemePicker();

  return (
    <>
      <button onClick={toggle}>Theme Toggle</button>
    </>
  );
};

export default Header;
