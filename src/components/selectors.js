import React from 'react';
import Grid from '@material-ui/core/Grid';

const Selectors = props => {
  return (
    <div>
      <Grid container spacing={0} className={props.classes.templateBack2}>
        <Grid item xs={6} className={props.classes.gridTemplate}>
          <div>{props.raceSelector}</div>
        </Grid>
        <Grid item xs={6} className={props.classes.gridTemplate}>
          <div>{props.classSelector}</div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Selectors;
