import React, { Component } from 'react';
import './App.css';
import CharacterCard from './containers/character-card';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import Selectors from './components/selectors';
import Options from './components/options';
import html2canvas from 'html2canvas';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import customStyles from './styles/index';
import PropTypes from 'prop-types';
import SocialModal from './components/social-modal';
import { detect } from 'detect-browser';
import {
  classFunction,
  raceFunction,
  raceSelectorFunction,
  classSelectorFunction,
  randomiser,
  toUpperWord,
} from './utils/functions';
import {
  races,
  charclasses,
  names,
  classList,
  maps,
  stories,
  demise,
  treasures,
} from './data/index';

const apiTarget = 'https://hero-master-characters.herokuapp.com/upload-char';
//const apiTarget = 'http://localhost:3001/upload-char';
const browser = detect();
let supported = false;

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      shareURL: '',
      print: false,
      selectedRace: 0,
      selectedClass: 0,
      selectedRaceName: '-',
      selectedClassName: charclasses[0],
      treasure: 'none',
      name: '',
      surname: '',
      map: 'none',
      story: '',
      demise: true,
      displaySocial: 'none',
      open: false,
      overideSupport: false,
    };
    this.printClick = this.printClick.bind(this);
    this.raceClick = this.raceClick.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.okSupported = this.okSupported.bind(this);
  }
  okSupported = () => {
    this.setState({ overideSupport: true });
    this.setState({ story: '-' });
  };
  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  printClick = () => {
    this.setState({ displaySocial: 'loading' });
    this.handleOpen();
    this.setState({ print: true });
    if (document.getElementById('printCanvas')) {
      const element = document.getElementById('printCanvas');
      element.parentNode.removeChild(element);
    }

    html2canvas(document.getElementById('target'), {
      windowWidth: '900px',
    }).then(canvas => {
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
          this.setState({ shareURL: `${result.data}` });
          this.setState({ print: false });
          this.setState({ displaySocial: 'true' });
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
      gender,
      gender2,
      gender3,
      item;

    this.setState({ displaySocial: 'false' });
    //Randomisers
    map = await maps[randomiser(0, maps.length)];
    item = await randomiser(1, races.length);
    selectedClass = await randomiser(1, charclasses.length);
    selectedClassName = await charclasses[selectedClass];
    treasure = await treasures[randomiser(1, treasures.length)];
    selectedRaceName = await races[item];
    raceNames = await raceFunction(selectedRaceName, names);
    const nameObj = raceNames[randomiser(0, raceNames.length)];
    name = await nameObj.name.toLowerCase();
    gender = await nameObj.gender
      .toLowerCase()
      .replace('m', 'he')
      .replace('f', 'she');

    if (gender === 'he') {
      gender2 = 'him';
      gender3 = 'his';
    } else {
      gender2 = 'her';
      gender3 = 'her';
    }
    classNames = await classFunction(selectedClassName, classList);
    surname = await classNames[randomiser(0, classNames.length)].toLowerCase();
    story = await stories[randomiser(0, stories.length)]
      .replace(/\[NAME\]/gi, toUpperWord(name))
      .replace(/\[GENDER\]/gi, gender)
      .replace(/\[GENDER2\]/gi, gender2)
      .replace(/\[GENDER3\]/gi, gender3)
      .replace(/\. s/gi, '. S')
      .replace(/\. h/gi, '. H');
    demiseStory = await demise[randomiser(0, demise.length)]
      .replace(/\[NAME\]/gi, toUpperWord(name))
      .replace(/\[MAP\]/gi, toUpperWord(map))
      .replace(/\[TREASURE\]/gi, treasure)
      .replace(/\. s/gi, '. S')
      .replace(/\. h/gi, '. H');

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
    const versionInit = browser.version.split('.')[0];
    switch (`${browser.name} ${versionInit}`) {
      case 'edge 20':
      case 'edge 19':
      case 'edge 18':
      case 'edge 17':
      case 'chrome 71':
      case 'chrome 70':
      case 'chrome 69':
      case 'chrome 68':
      case 'chrome 67':
      case 'chrome 66':
      case 'chrome 65':
      case 'chrome 64':
      case 'chrome 63':
      case 'ie 13':
      case 'ie 12':
      case 'ie 11':
      case 'firefox 65':
      case 'firefox 64':
      case 'firefox 63':
      case 'firefox 62':
      case 'firefox 61':
      case 'firefox 60':
      case 'opera 57':
      case 'opera 56':
      case 'opera 55':
      case 'opera 54':
      case 'ios 14':
      case 'ios 13':
      case 'ios 12':
      case 'ios 11':
      case 'ios 10':
      case 'ios 9':
      case 'ios 8':
      case 'ios-webview 610':
      case 'ios-webview 609':
      case 'ios-webview 608':
      case 'ios-webview 607':
      case 'ios-webview 606':
      case 'ios-webview 605':
      case 'safari 15':
      case 'safari 14':
      case 'safari 13':
      case 'safari 12':
      case 'safari 11':
        supported = true;
        break;

      default:
        supported = false;
        break;
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
        <Options
          classes={classes}
          raceClick={this.raceClick}
          printClick={this.printClick}
          handleOpen={this.handleOpen}
          displaySocial={this.state.displaySocial}
        />
        <SocialModal
          open={this.state.open}
          handleClose={this.handleClose}
          shareURL={this.state.shareURL}
          charName={`${this.state.name} ${this.state.surname}`}
          displaySocial={this.state.displaySocial}
        />
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(customStyles)(App);
