import React, { Component } from 'react';
import './App.css';
import CharacterCard from './containers/character-card';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import Social from './components/social';
import Selectors from './components/selectors';
import html2canvas from 'html2canvas';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import customStyles from './styles/index';
import PropTypes from 'prop-types';
import {
  classFunction,
  raceFunction,
  raceSelectorFunction,
  classSelectorFunction,
  randomiser,
} from './utils/functions';
import {
  races,
  charclasses,
  names,
  classList,
  maps,
  stories,
  demise,
} from './data/index';
const apiTarget = 'https://char-creator-api.herokuapp.com/upload-char';
//const apiTarget = 'http://localhost:3001/upload-char';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      twitterURL: '',
      print: false,
      selectedRace: 0,
      selectedClass: 0,
      selectedRaceName: '-',
      selectedClassName: charclasses[0],
      treasure: -1,
      name: '',
      surname: '',
      map: 'none',
      story: '',
      demise: '',
    };
    this.printClick = this.printClick.bind(this);
    this.raceClick = this.raceClick.bind(this);
  }

  printClick = () => {
    this.setState({ print: true });
    if (document.getElementById('printCanvas')) {
      const element = document.getElementById('printCanvas');
      element.parentNode.removeChild(element);
    }

    html2canvas(document.getElementById('target')).then(canvas => {
      canvas.id = 'printCanvas';
      canvas.style = 'overflow:hidden; width:0; height:0; ';
      document.body.appendChild(canvas);

      axios
        .post(apiTarget, {
          filename: document
            .getElementById('printCanvas')
            .toDataURL('image/jpeg'),
        })
        .then(result => {
          this.setState({ twitterURL: result.data });
          this.setState({ print: false });
        });
    });
  };

  async raceClick() {
    let raceNames,
      classNames,
      map,
      selectedClass,
      treasure,
      name,
      surname,
      story,
      demiseStory,
      selectedClassName,
      selectedRaceName,
      item;

    //Randomisers
    map = await maps[randomiser(0, maps.length)];
    item = await randomiser(1, races.length);
    selectedClass = await randomiser(1, charclasses.length);
    selectedClassName = await charclasses[selectedClass];
    treasure = await randomiser(0, 35);
    selectedRaceName = await races[item];
    raceNames = await raceFunction(selectedRaceName, names);
    name = await raceNames[randomiser(0, raceNames.length)].toLowerCase();
    classNames = await classFunction(selectedClassName, classList);
    surname = await classNames[randomiser(0, classNames.length)].toLowerCase();
    story = await stories[randomiser(0, stories.length)].replace(
      '[NAME]',
      name,
    );
    demiseStory = await demise[randomiser(0, demise.length)]
      .replace('[NAME]', name)
      .replace('[MAP]', map);

    //Set States
    this.setState({ selectedRace: item });
    this.setState({ selectedClass });
    this.setState({ selectedRaceName: selectedRaceName });
    this.setState({ selectedClassName });
    this.setState({ treasure });
    this.setState({ map });
    this.setState({ name });
    this.setState({ surname });
    this.setState({ story });
    this.setState({ demiseStory });
  }

  render() {
    const { classes } = this.props;
    let raceSelector;

    raceSelector = raceSelectorFunction(
      this.state.print,
      this.state.selectedRaceName,
      classes.raceBack,
      this.raceClick,
      this.state.selectedRace,
      races,
      classes.raceCarousel,
    );

    let classSelector;

    classSelector = classSelectorFunction(
      this.state.print,
      this.state.selectedClassName,
      classes.classBack,
      this.state.selectedClass,
      charclasses,
      classes.classCarousel,
    );

    if (this.state.print === true) {
    }
    return (
      <div className="App">
        <div id="target" style={{ lineHeight: 1 }}>
          <Selectors
            classes={classes}
            classSelector={classSelector}
            raceSelector={raceSelector}
          />

          <CharacterCard
            apiTarget={apiTarget}
            selectedRaceName={this.state.selectedRaceName}
            selectedClassName={this.state.selectedClassName}
            selectedClass={this.state.selectedClass}
            selectedRace={this.state.selectedRace}
            treasure={this.state.treasure}
            map={this.state.map}
            name={this.state.name}
            surname={this.state.surname}
            story={this.state.story}
            demiseStory={this.state.demiseStory}
          />
        </div>
        <div id="diceDiv">
          <img
            id="dice"
            src={require(`./images/dice-anim-quick.gif`)}
            alt="Dice"
            className={classes.dice}
            onClick={this.raceClick}
          />
        </div>
        <Social
          printClick={this.printClick}
          twitterURL={this.state.twitterURL}
        />
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(customStyles)(App);
