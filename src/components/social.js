import React from 'react';
import Tweeter from './tweeter';

const Social = props => {
  let option;
  if (props.displaySocial === 'false') {
    option = (
      <button style={{}} onClick={props.printClick}>
        [Save Button - Image Needed]
      </button>
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
