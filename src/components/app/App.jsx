import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import CharacterList from '../characters/CharacterList.jsx';
import Header from '../header/Header.jsx';
import { useThemePicker } from '../../hooks/theme.js';

export default function App() {
  // const { themeMode } = useThemePicker();

  return (
    // eslint-disable-next-line max-len
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={CharacterList} />
      </Switch>
    </Router>
  );
}
