import React from 'react';
import Social from './social';
import Grid from '@material-ui/core/Grid';

const Options = props => {
  return (
    <Grid
      container
      spacing={0}
      style={{ display: 'flex', alignItems: 'center' }}
    >
      <Grid item xs={6}>
        <div id="diceDiv" style={{ cursor: 'pointer' }}>
          <img
            id="dice"
            src={require(`../images/dice-anim-quick.gif`)}
            alt="Dice"
            className={props.classes.dice}
            onClick={props.raceClick}
          />
        </div>
      </Grid>
      <Grid item xs={6}>
        <Social
          printClick={props.printClick}
          twitterURL={props.twitterURL}
          charName={props.charName}
          displaySocial={props.displaySocial}
        />
      </Grid>
    </Grid>
  );
};

export default Options;
