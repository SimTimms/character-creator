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

class CharacterCard extends Component {
  constructor(props) {
    super();
    this.state = {
      selectedRace: Math.floor(Math.random() * races.length),
      selectedClass: Math.floor(Math.random() * charclasses.length),
      customColor: '#000',
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
    let name, surname, raceNames, classNames, map, mapImage;
    let selectedRaceName = races[this.state.selectedRace];

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
    switch (selectedRaceName) {
      case 'wizard':
        classNames = classList.wizard;
        break;

      case 'barbarian':
        classNames = classList.wizard;
        break;

      case 'priest':
        classNames = classList[selectedRaceName];
        break;

      default:
        classNames = classList.wizard;
        break;
    }
    name = raceNames[Math.floor(Math.random() * raceNames.length)];
    surname = classNames[Math.floor(Math.random() * classNames.length)];
    map = maps[Math.floor(Math.random() * maps.length)];
    mapImage = map
      .replace(/ /gi, '-')
      .replace(/'/gi, '')
      .toLowerCase();

    const randomTreasure = Math.floor(Math.random() * 35);
    const treasureImage = `treasure-${randomTreasure}`;

    return (
      <div>
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
            <RaceSelector
              handleClick={this.raceClick}
              selectedItem={this.state.selectedRace}
              races={races}
              className={classes.raceSelector}
            />
          </Grid>
          <Grid item xs={6} className={classes.gridTemplate}>
            <ClassSelector
              selectedItem={this.state.selectedClass}
              charClasses={charclasses}
            />
          </Grid>
        </Grid>

        <Grid container spacing={0} className={classes.templateFront}>
          <Grid item xs={6} className={classes.gridTemplate}>
            <div className={classes.raceName}>
              {races[this.state.selectedRace]}
            </div>
          </Grid>
          <Grid item xs={6} className={classes.gridTemplate}>
            <div className={classes.className}>
              {charclasses[this.state.selectedClass]}
            </div>
          </Grid>
          <Grid item xs={12} className={classes.gridTemplate}>
            <h1 className={classes.charName}>{`${name} ${surname}`}</h1>
          </Grid>
          <Grid item xs={12} className={classes.gridTemplate}>
            <div className={classes.storyText}>
              {stories[Math.floor(Math.random() * stories.length)].replace(
                '[NAME]',
                name,
              )}
            </div>
          </Grid>
          <Grid item xs={12} className={classes.gridTemplate}>
            <div className={classes.demiseText}>
              {demise[Math.floor(Math.random() * demise.length)]
                .replace('[NAME]', name)
                .replace('[MAP]', map)}
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
