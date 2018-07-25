import React from 'react';
import { Carousel } from 'react-responsive-carousel';

const ClassSelector = props => {
  return (
    <Carousel
      key="classes"
      showArrows={true}
      useKeyboardArrows={true}
      showThumbs={false}
      infiniteLoop={true}
      showIndicators={false}
      onChange={props.handleClick}
      selectedItem={props.selectedItem}
    >
      {props.classes.map(item => {
        return (
          <div key={item}>
            <img src={require('../images/orc.jpg')} alt="ss" />
            <p className="legend">{item}</p>
          </div>
        );
      })}
    </Carousel>
  );
};

export default ClassSelector;
