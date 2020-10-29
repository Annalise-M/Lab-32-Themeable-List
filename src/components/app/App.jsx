import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import CharacterList from '../characters/CharacterList.jsx';
import Header from '../header/Header.jsx';


export default function App() {
  
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={CharacterList} />
      </Switch>
    </Router>
  );
}
