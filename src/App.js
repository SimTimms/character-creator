import React, { Component } from 'react';
import './App.css';
import CharacterCard from './containers/character-card';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import Tweeter from './components/tweeter';
import html2canvas from 'html2canvas';
import axios from 'axios';

//const apiTarget = 'https://char-creator-api.herokuapp.com/upload-char';
const apiTarget = 'http://localhost:3001/upload-char';

class App extends Component {
  constructor(props) {
    super();
    this.state = { twitterURL: '' };
    this.printClick = this.printClick.bind(this);
  }
  printClick = () => {
    if (document.getElementById('printCanvas')) {
      var element = document.getElementById('printCanvas');
      element.parentNode.removeChild(element);
    }

    html2canvas(document.getElementById('target')).then(canvas => {
      canvas.id = 'printCanvas';
      canvas.style = 'overflow:hidden; width:0; height:0;';
      document.body.appendChild(canvas);

      axios
        .post(apiTarget, {
          filename: document
            .getElementById('printCanvas')
            .toDataURL('image/jpeg'),
        })
        .then(result => {
          this.setState({ twitterURL: result.data });
        });
    });
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.printClick}>Print</button>
        <Tweeter twitterURL={this.state.twitterURL} />
        <CharacterCard apiTarget={apiTarget} />
      </div>
    );
  }
}

export default App;
