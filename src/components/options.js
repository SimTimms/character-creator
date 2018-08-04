import React from 'react';
import Social from './social';
import Grid from '@material-ui/core/Grid';

const Options = props => {
  return (
    <Grid container spacing={0} style={{ display: 'flex', alignItems: 'top' }}>
      <Grid item xs={6}>
        <div id="diceDiv" style={{ cursor: 'pointer' }}>
          <div style={{ position: 'relative' }}>
            <img
              id="dice"
              src={require(`../images/dice.jpg`)}
              alt="Dice"
              className={props.classes.dice}
              onClick={props.raceClick}
            />
            <img
              id="dice"
              src={require(`../images/dice-trans.png`)}
              alt="Dice"
              className={props.classes.diceTrans}
              onClick={props.raceClick}
            />
          </div>
        </div>
      </Grid>
      <Grid item xs={6}>
        <Social
          printClick={props.printClick}
          twitterURL={props.twitterURL}
          charName={props.charName}
          displaySocial={props.displaySocial}
          classes={props.classes}
        />
      </Grid>
    </Grid>
  );
};

export default Options;
