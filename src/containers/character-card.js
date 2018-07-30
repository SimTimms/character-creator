import React, { Component } from 'react';
import { connect } from 'react-redux';
import { importContent } from '../actions/index';
import { withStyles } from '@material-ui/core/styles';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import RaceSelector from '../components/race-selector';
import ClassSelector from '../components/class-selector';

const races = ['halfling', 'human', 'elf'];

const charclasses = ['thief', 'wizard', 'barbarian'];
const stories = [
  "[NAME] jovial, humorous, mysterious and perhaps a little too facetious. This isn't surprising considering for someone with her position.",
  'Having found a significant other, [NAME] now works as a travelling trader. By doing so, he hopes to learn more about the past and finally find purpose to life he has never had.',
  '[NAME] was born and grew up in a poor family in a normal city, he lived free of trouble until he was about 13 years old, but at that point things took a turn for the worst.',
  '[NAME] was born in a middle class family in a major community. He lived free of worries until he was about 14 years old, but at that point life changed.',
];
const demise = ['[NAME] was last seen poking a bear in the misty mountains.'];

const names = {
  humanNames: {
    raceNames: ['David', 'Dan', 'John'],
    classNames: ['Smith', 'Jones', 'Harris'],
  },
  elfNames: {
    raceNames: ['Dongleflop', 'Enuin', 'Legolas'],
    classNames: ['Wizpooper', 'Leaftickle', 'Pegolas'],
  },
  halflingNames: {
    raceNames: ['Doogle', 'Bilbo', 'Odin'],
    classNames: ['Smallnuts', 'Hairyfeet', 'Stinkpipe'],
  },
};

const customStyles = {
  root: {
    flexGrow: 1,
  },
  raceSelector: {
    width: 100,
  },

  card: {
    maxWidth: 345,
    boxShadow: '10px 10px 100px #777',
    margin: 20,
    border: '20px solid',
    borderColor: '#000',
    borderRadius: '20px',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  pos: {
    marginBottom: 12,
  },
  picker: {
    marginLeft: 90,
  },
  template: {
    width: 400,
    zIndex: 1,
    position: 'fixed',
    left: 0,
  },
  cardTemplate: {
    width: 82,
    marginLeft: 7,
    zIndex: 1,
    position: 'fixed',
    top: 284,
    left: 0,
  },
  mapTemplate: {
    width: 182,
    top: 210,
    marginLeft: 202,
    zIndex: 0,
    position: 'fixed',
    left: 0,
  },
  charName: {
    width: 400,
    zIndex: 2,
    position: 'fixed',
    left: 0,
    top: 168,
    color: '#FFF',
    fontWeight: 200,
  },
  raceName: {
    width: 100,
    zIndex: 2,
    position: 'fixed',
    left: 80,
    top: 130,
    color: '#000',
    fontWeight: 200,
    fontSize: 14,
  },
  className: {
    width: 100,
    zIndex: 2,
    position: 'fixed',
    left: 210,
    top: 130,
    color: '#000',
    fontWeight: 200,
    fontSize: 14,
  },
  storyText: {
    width: 200,
    zIndex: 2,
    position: 'fixed',
    left: 100,
    top: 200,
    color: '#000',
    fontWeight: 200,
    fontSize: 10,
  },
  demiseText: {
    width: 200,
    zIndex: 2,
    position: 'fixed',
    left: 100,
    top: 310,
    color: '#000',
    fontWeight: 200,
    fontSize: 10,
  },
};

class CharacterCard extends Component {
  constructor(props) {
    super();
    this.state = {
      selectedRace: Math.floor(Math.random() * races.length),
      selectedClass: Math.floor(Math.random() * charclasses.length),
      customColor: '#000',
    };
    this.raceClick = this.raceClick.bind(this);
    this.colorChange = this.colorChange.bind(this);
  }

  colorChange = color => {
    console.log(color);
    this.setState({ customColor: color.hex });
  };

  raceClick = item => {
    this.setState({ selectedRace: item });
    this.setState({
      selectedClass: Math.floor(Math.random() * charclasses.length),
    });
    this.setState({
      charclass: charclasses[Math.floor(Math.random() * charclasses.length)],
    });
  };

  render() {
    const { classes } = this.props;
    let name, surname, raceNames, classNames;
    let selectedRaceName = races[this.state.selectedRace];

    switch (selectedRaceName) {
      case 'elf':
        raceNames = names.elfNames.raceNames;
        classNames = names.elfNames.classNames;
        break;

      case 'halfling':
        raceNames = names.halflingNames.raceNames;
        classNames = names.halflingNames.classNames;
        break;

      default:
        raceNames = names.humanNames.raceNames;
        classNames = names.humanNames.classNames;
        break;
    }
    name = raceNames[Math.floor(Math.random() * raceNames.length)];
    surname = classNames[Math.floor(Math.random() * classNames.length)];

    return (
      <div>
        <img
          src={require(`../images/template.png`)}
          className={classes.template}
          alt="Template"
        />
        <div className={classes.objectDiv}>
          <img
            src={require(`../images/card.png`)}
            className={classes.cardTemplate}
            alt="Card"
          />
          <img
            src={require(`../images/elf.jpg`)}
            className={classes.mapTemplate}
            alt="Map"
          />

          <RaceSelector
            handleClick={this.raceClick}
            selectedItem={this.state.selectedRace}
            races={races}
            className={classes.raceSelector}
          />
          <ClassSelector
            selectedItem={this.state.selectedClass}
            charClasses={charclasses}
          />
          <div className={classes.charName}> {`${name} ${surname}`}</div>
          <div className={classes.raceName}>
            {races[this.state.selectedRace]}
          </div>
          <div className={classes.className}>
            {charclasses[this.state.selectedClass]}
          </div>
          <div className={classes.storyText}>
            {stories[Math.floor(Math.random() * stories.length)].replace(
              '[NAME]',
              name,
            )}
          </div>
          <div className={classes.demiseText}>
            {demise[Math.floor(Math.random() * demise.length)].replace(
              '[NAME]',
              name,
            )}
          </div>
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
