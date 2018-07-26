import React, { Component } from 'react';
import { connect } from 'react-redux';
import { importContent } from '../actions/index';
import { withStyles } from '@material-ui/core/styles';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import RaceSelector from '../components/race-selector';

const races = ['Orc', 'Skeleton', 'Ogre'];
const names = ['Dongleflop', 'Buttlescum', 'Pookey Bumfluff'];
const charclasses = ['Priest', 'Mage', 'Warrior', 'Wizard', 'Rogue'];
const stories = [
  "She's jovial, humorous, mysterious and perhaps a little too facetious. This isn't surprising considering for someone with her position.",
  'Having found a significant other, he now works as a travelling trader. By doing so, he hopes to learn more about the past and finally find purpose to life he has never had.',
  'He was born and grew up in a poor family in a normal city, he lived free of trouble until he was about 13 years old, but at that point things took a turn for the worst.',
  'He was born in a middle class family in a major community. He lived free of worries until he was about 14 years old, but at that point life changed.',
];

const customStyles = {
  root: {
    flexGrow: 1,
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
};

class CharacterCard extends Component {
  constructor(props) {
    super();
    this.state = {
      selectedRace: Math.floor(Math.random() * races.length),
      selectedClass: Math.floor(Math.random() * charclasses.length),
    };
    this.raceClick = this.raceClick.bind(this);
    this.classClick = this.classClick.bind(this);
  }

  raceClick = item => {
    this.setState({ selectedRace: item });
    this.setState({
      selectedClass: Math.floor(Math.random() * charclasses.length),
    });
    this.setState({
      charclass: charclasses[Math.floor(Math.random() * charclasses.length)],
    });
  };

  classClick = item => {};

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Card className={classes.card}>
          <RaceSelector
            handleClick={this.raceClick}
            selectedItem={this.state.selectedRace}
            races={races}
          />
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              {names[Math.floor(Math.random() * names.length)]}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              {races[this.state.selectedRace]}&nbsp;
              {charclasses[this.state.selectedClass]}
            </Typography>
            <Typography component="p">
              {stories[Math.floor(Math.random() * stories.length)]}
            </Typography>
            <Typography component="p" />
          </CardContent>
        </Card>
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
