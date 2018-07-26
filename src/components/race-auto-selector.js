import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const customStyles = {
  carousel: {
    maxWidth: 375,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
};

const RaceAutoSelector = props => {
  return (
    <Carousel
      key="races"
      showArrows={true}
      useKeyboardArrows={true}
      showThumbs={false}
      infiniteLoop={true}
      showIndicators={false}
      onChange={props.handleClick}
      selectedItem={props.selectedItem}
      className={props.classes.carousel}
    >
      {props.races.map(item => {
        let itemLow = item.toString().toLowerCase();
        return (
          <div key={item}>
            <img src={require(`../images/${itemLow}.jpg`)} alt={itemLow} />
            <p className="legend">{item}</p>
          </div>
        );
      })}
    </Carousel>
  );
};

RaceAutoSelector.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(customStyles)(RaceAutoSelector);
