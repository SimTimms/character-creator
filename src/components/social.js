import React from 'react';
import Tweeter from './tweeter';

const Social = props => {
  return (
    <div>
      <button onClick={props.printClick}>Print</button>
      <Tweeter twitterURL={props.twitterURL} />
    </div>
  );
};

export default Social;
