import React, { Component } from 'react';
import { connect } from 'react-redux';
import { importContent } from '../actions/index';
import { withStyles } from '@material-ui/core/styles';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import RaceSelector from '../components/race-selector';
import ClassSelector from '../components/class-selector';
import TextField from '@material-ui/core/TextField';
import WeaponSelector from '../components/weapon-selector';

const races = ['Orc', 'Skeleton', 'Ogre'];
const classes = ['Priest', 'Mage', 'Warrior', 'Wizard'];

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
};

class CharacterCard extends Component {
  constructor(props) {
    super();
    this.state = {
      race: races[0],
      charclass: classes[0],
      selectedRace: 0,
      selectedClass: 0,
      races: races,
      classes: classes,
    };
    this.raceClick = this.raceClick.bind(this);
    this.classClick = this.classClick.bind(this);
  }

  raceClick = item => {
    this.setState({ selectedRace: item });
    this.setState({ race: races[item] });
  };

  classClick = item => {
    this.setState({ selectedClass: item });
    this.setState({ charclass: classes[item] });
  };

  render() {
    const { classes } = this.props;
    console.log(this.props);
    return (
      <div>
        <Card className={classes.card}>
          <Grid container spacing={0}>
            <Grid item xs={6}>
              <RaceSelector
                handleClick={this.raceClick}
                selectedItem={this.state.selectedRace}
                races={this.state.races}
              />
            </Grid>
            <Grid item xs={6}>
              <ClassSelector
                handleClick={this.classClick}
                selectedItem={this.state.selectedClass}
                classes={this.state.classes}
              />
            </Grid>
          </Grid>

          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              {this.state.race} {this.state.charclass}
            </Typography>
            <Typography component="p">
              <TextField
                id="name"
                label="Name"
                className={classes.textField}
                value={this.state.name}
                margin="normal"
              />
              <TextField
                id="strength"
                label="Strength"
                className={classes.textField}
                value={this.state.name}
                margin="normal"
              />

              <TextField
                id="agility"
                label="Agility"
                className={classes.textField}
                value={this.state.name}
                margin="normal"
              />
            </Typography>
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
