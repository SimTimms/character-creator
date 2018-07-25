import React, { Component } from 'react';
import './App.css';
import CharacterCard from './containers/character-card';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CharacterCard />
      </div>
    );
  }
}

export default App;
