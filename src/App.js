import React, { Component } from 'react';
import './App.css';
import CharacterCard from './containers/character-card';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import Tweeter from './components/tweeter';
import RaceSelector from './components/race-selector';
import ClassSelector from './components/class-selector';
import html2canvas from 'html2canvas';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import customStyles from './styles/index';
import PropTypes from 'prop-types';
import { races, charclasses, names, classList } from './data/index';
//const apiTarget = 'https://char-creator-api.herokuapp.com/upload-char';
const apiTarget = 'http://localhost:3001/upload-char';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      twitterURL: '',
      print: false,
      selectedRace: 0,
      selectedClass: 0,
      selectedRaceName: races[0],
      selectedClassName: charclasses[0],
    };
    this.printClick = this.printClick.bind(this);
    this.raceClick = this.raceClick.bind(this);
  }
  printClick = () => {
    this.setState({ print: true });
    if (document.getElementById('printCanvas')) {
      var element = document.getElementById('printCanvas');
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

  raceClick = item => {
    console.log(item);
    this.setState({ selectedRace: item });
    this.setState({
      selectedClass: Math.floor(Math.random() * charclasses.length),
    });
    this.setState({ selectedRaceName: races[item] });
    this.setState({ selectedClassName: charclasses[this.state.selectedClass] });
  };

  render() {
    const { classes } = this.props;
    let raceSelector;
    let raceNames, classNames;

    if (this.state.print === true) {
      raceSelector = (
        <img
          src={require(`./images/race/${this.state.selectedRaceName}.jpg`)}
          alt={this.state.selectedRaceName}
          className={classes.raceBack}
        />
      );
    } else {
      raceSelector = (
        <RaceSelector
          id="race-selector"
          handleClick={this.raceClick}
          selectedItem={this.state.selectedRace}
          races={races}
          className={classes.raceCarousel}
        />
      );
    }

    switch (this.state.selectedRaceName) {
      case 'elf':
        raceNames = names.elfNames;
        break;

      case 'halfling':
        raceNames = names.halflingNames;
        break;

      case 'dwarf':
        raceNames = names.dwarfNames;
        break;

      default:
        raceNames = names.humanNames;
        break;
    }

    switch (this.state.selectedClassName) {
      case 'wizard':
        classNames = classList.wizard;
        break;

      case 'barbarian':
        classNames = classList.barbarian;
        break;

      case 'priest':
        classNames = classList.priest;
        break;

      default:
        classNames = classList.rogue;
        break;
    }

    let classSelector;

    if (this.state.print === true) {
      classSelector = (
        <img
          src={require(`./images/class/${this.state.selectedClassName}.jpg`)}
          alt={this.state.selectedClassName}
          className={classes.classBack}
        />
      );
    } else {
      classSelector = (
        <ClassSelector
          selectedItem={this.state.selectedClass}
          charClasses={charclasses}
          className={classes.classCarousel}
        />
      );
    }
    return (
      <div className="App">
        <button onClick={this.printClick}>Print</button>
        <Tweeter twitterURL={this.state.twitterURL} />
        <div id="target">
          <Grid container spacing={0} className={classes.templateBack2}>
            <Grid item xs={6} className={classes.gridTemplate}>
              <div>{raceSelector}</div>
            </Grid>
            <Grid item xs={6} className={classes.gridTemplate}>
              <div>{classSelector}</div>
            </Grid>
          </Grid>

          <CharacterCard
            apiTarget={apiTarget}
            selectedRaceName={this.state.selectedRaceName}
            selectedClassName={this.state.selectedClassName}
            selectedClass={this.state.selectedClass}
            selectedRace={this.state.selectedRace}
            raceNames={raceNames}
            classNames={classNames}
          />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(customStyles)(App);
