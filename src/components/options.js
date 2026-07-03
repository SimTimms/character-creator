import React from 'react';
import { getImageAsset } from '../utils/image-asset';

const Options = props => {
  return (
    <div className={props.className}>
      <div id="diceDiv" style={{ cursor: 'pointer', width: '100%' }}>
        <div style={{ position: 'relative', width: '100%', paddingTop: '100%' }}>
          <img
            id="dice"
            src={getImageAsset('dice.jpg')}
            alt="Dice"
            className={props.classes.dice}
            onClick={props.raceClick}
          />
          <img
            id="dice"
            src={getImageAsset('dice-trans.png')}
            alt="Dice"
            className={props.classes.diceTrans}
            onClick={props.raceClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Options;
