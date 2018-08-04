import React from 'react';
import Tweeter from './tweeter';

const Social = props => {
  let option;
  if (props.displaySocial === 'false') {
    option = (
      <div id="diceDiv" style={{ cursor: 'pointer' }}>
        <img
          id="save"
          src={require(`../images/save.jpg`)}
          alt="Save"
          className={props.classes.save}
          onClick={props.raceClick}
        />
      </div>
    );
  } else if (props.displaySocial === 'none') {
    return null;
  } else {
    option = (
      <Tweeter
        twitterURL={props.twitterURL}
        charName={props.charName}
        displaySocial={props.displaySocial}
      />
    );
  }
  return <div style={{ display: 'flex' }}>{option}</div>;
};

export default Social;
