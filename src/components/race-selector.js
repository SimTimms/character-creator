import React from 'react';
import { Carousel } from 'react-responsive-carousel';

const RaceSelector = props => {
  return (
    <Carousel
      key="races"
      showArrows={false}
      useKeyboardArrows={true}
      showThumbs={false}
      infiniteLoop={true}
      showIndicators={false}
      showStatus={false}
      onChange={props.handleClick}
      selectedItem={props.selectedItem}
      swipeable={true}
      showArrows={true}
      className={props.className}
    >
      {props.races.map(item => {
        let itemLow = item.toString().toLowerCase();
        return (
          <div key={item}>
            <img src={require(`../images/race/${itemLow}.jpg`)} alt={itemLow} />
          </div>
        );
      })}
    </Carousel>
  );
};

export default RaceSelector;
