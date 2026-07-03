import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { getImageAsset } from '../utils/image-asset';

const RaceSelector = props => {
  return (
    <Carousel
      key="races"
      showArrows={false}
      useKeyboardArrows={false}
      showThumbs={false}
      infiniteLoop={true}
      showIndicators={false}
      showStatus={false}
      onChange={props.handleClick}
      selectedItem={props.selectedItem}
      className={props.className}
    >
      {props.races.map(item => {
        let itemLow = item.toString().toLowerCase();
        return (
          <div key={item}>
            <img src={getImageAsset(`race/${itemLow}.jpg`)} alt={itemLow} />
          </div>
        );
      })}
    </Carousel>
  );
};

export default RaceSelector;
