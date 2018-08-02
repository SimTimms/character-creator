import React, { Component } from 'react';
import { connect } from 'react-redux';
import { importContent } from '../actions/index';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import customStyles from '../styles/index';

class CharacterCard extends Component {
  constructor(props) {
    super();
    this.state = {
      customColor: '#000',
      twitterURL: '',
    };
  }

  render() {
    const { classes } = this.props;
    let mapImage;

    //Randomise Attributes

    const treasureImage = `treasure-${this.props.treasure}`;

    mapImage = this.props.map
      .replace(/ /gi, '-')
      .replace(/'/gi, '')
      .toLowerCase();

    return (
      <div>
        <div className={classes.templateMap}>
          <img
            src={require(`../images/maps/${mapImage}.jpg`)}
            className={classes.map}
            alt="Map"
          />
        </div>
        <div className={classes.template}>
          <Grid container spacing={0} className={classes.templateFront}>
            <Grid item xs={12} className={classes.gridTemplate}>
              <div className={classes.header}>
                <h1>an epic game of epic fails</h1>
              </div>
            </Grid>
            <Grid item xs={6} className={classes.gridTemplate}>
              <div className={classes.raceName}>
                <h2>{this.props.selectedRaceName}</h2>
              </div>
            </Grid>
            <Grid item xs={6} className={classes.gridTemplate}>
              <div className={classes.className}>
                <h2>{this.props.selectedClassName}</h2>
              </div>
            </Grid>
            <Grid item xs={12} className={classes.gridTemplate}>
              <h1 className={classes.charName}>{`${this.props.name} ${
                this.props.surname
              }`}</h1>
            </Grid>
            <Grid item xs={12} className={classes.gridTemplate}>
              <div className={classes.storyText}>{this.props.story}</div>
            </Grid>
            <Grid item xs={12} className={classes.gridTemplate}>
              <div className={classes.demiseHeader}>
                <h2>previous party demise</h2>
              </div>
            </Grid>
            <Grid item xs={12} className={classes.gridTemplate}>
              <div className={classes.demiseText}>{this.props.demiseStory}</div>
            </Grid>
            <Grid item xs={12} className={classes.gridTemplate}>
              <div className={classes.lastSeen} />
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
