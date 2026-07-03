import React from 'react';
import { getImageAsset } from '../utils/image-asset';

const Social = props => {
  let option;
  if (props.displaySocial !== 'none') {
    option = (
      <div id="diceDiv" style={{ cursor: 'pointer' }}>
        <img
          id="save"
          src={getImageAsset('save.jpg')}
          alt="Save"
          className={props.classes.save}
          onClick={props.printClick}
        />
      </div>
    );
  } else if (props.displaySocial === 'none') {
    return null;
  }
  return <div style={{ display: 'flex' }}>{option}</div>;
};

export default Social;
