import React, { Component } from 'react';
import { connect } from 'react-redux';
import { importContent } from '../actions/index';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import RaceSelector from '../components/race-selector';
import ClassSelector from '../components/class-selector';
import customStyles from '../styles/index';

import {
  races,
  charclasses,
  stories,
  demise,
  names,
  classList,
  maps,
} from '../data/index';

let print = false;

class CharacterCard extends Component {
  constructor(props) {
    super();
    this.state = {
      selectedRace: Math.floor(Math.random() * races.length),
      selectedClass: Math.floor(Math.random() * charclasses.length),
      customColor: '#000',
      twitterURL: '',
    };
    this.raceClick = this.raceClick.bind(this);
  }

  raceClick = item => {
    this.setState({ selectedRace: item });
    this.setState({
      selectedClass: Math.floor(Math.random() * charclasses.length),
    });
  };

  render() {
    const { classes } = this.props;
    let name, surname, raceNames, classNames, map, mapImage, story, demiseStory;
    let selectedRaceName = races[this.state.selectedRace].toLowerCase();
    let selectedClassName = charclasses[this.state.selectedClass].toLowerCase();

    switch (selectedRaceName) {
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

    switch (selectedClassName) {
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

    //Randomise Attributes
    name = raceNames[
      Math.floor(Math.random() * raceNames.length)
    ].toLowerCase();
    surname = classNames[
      Math.floor(Math.random() * classNames.length)
    ].toLowerCase();
    map = maps[Math.floor(Math.random() * maps.length)];
    mapImage = map
      .replace(/ /gi, '-')
      .replace(/'/gi, '')
      .toLowerCase();
    const randomTreasure = Math.floor(Math.random() * 35);
    const treasureImage = `treasure-${randomTreasure}`;
    story = stories[Math.floor(Math.random() * stories.length)].replace(
      '[NAME]',
      name,
    );
    demiseStory = demise[Math.floor(Math.random() * demise.length)]
      .replace('[NAME]', name)
      .replace('[MAP]', map);

    let raceSelector;

    if (print === true) {
      raceSelector = (
        <img
          src={require(`../images/race/${selectedRaceName}.jpg`)}
          alt={selectedRaceName}
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

    let classSelector;

    if (print === true) {
      classSelector = (
        <img
          src={require(`../images/class/${selectedClassName}.jpg`)}
          alt={selectedClassName}
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
      <div>
        <div id="target">
          <div className={classes.templateMap}>
            <img
              src={require(`../images/maps/${mapImage}.jpg`)}
              className={classes.map}
              alt="Map"
            />
          </div>
          <div className={classes.template} />
          <Grid container spacing={0} className={classes.templateBack}>
            <Grid item xs={6} className={classes.gridTemplate}>
              <div>{raceSelector}</div>
            </Grid>
            <Grid item xs={6} className={classes.gridTemplate}>
              <div>{classSelector}</div>
            </Grid>
          </Grid>
          <Grid container spacing={0} className={classes.templateFront}>
            <Grid item xs={12} className={classes.gridTemplate}>
              <div className={classes.header}>
                <h1>an epic game of epic fails</h1>
              </div>
            </Grid>
            <Grid item xs={6} className={classes.gridTemplate}>
              <div className={classes.raceName}>
                <h2>{selectedRaceName}</h2>
              </div>
            </Grid>
            <Grid item xs={6} className={classes.gridTemplate}>
              <div className={classes.className}>
                <h2>{selectedClassName}</h2>
              </div>
            </Grid>
            <Grid item xs={12} className={classes.gridTemplate}>
              <h1 className={classes.charName}>{`${name} ${surname}`}</h1>
            </Grid>
            <Grid item xs={12} className={classes.gridTemplate}>
              <div className={classes.storyText}>{story}</div>
            </Grid>
            <Grid item xs={12} className={classes.gridTemplate}>
              <div className={classes.demiseHeader}>
                <h2>previous party demise</h2>
              </div>
            </Grid>
            <Grid item xs={12} className={classes.gridTemplate}>
              <div className={classes.demiseText}>{demiseStory}</div>
            </Grid>
            <Grid item xs={12} className={classes.gridTemplate}>
              <div className={classes.lastSeen}>
                <h2>last seen</h2>
              </div>
            </Grid>
            <Grid item xs={3} className={classes.gridTemplate}>
              <img
                src={require(`../images/treasure/${treasureImage}.png`)}
                alt="Card"
                className={classes.cardTemplate}
              />
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

function mapStatetoProps(state) {
  return {
    content: state.content,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ importContent: importContent }, dispatch);
}

CharacterCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(
  mapStatetoProps,
  mapDispatchToProps,
)(withStyles(customStyles)(CharacterCard));
