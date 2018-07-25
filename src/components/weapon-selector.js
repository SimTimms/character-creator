import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const customStyles = {
  carousel: {
    maxWidth: 100,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
};

const WeaponSelector = props => {
  return (
    <Carousel
      key="races"
      showArrows={true}
      useKeyboardArrows={true}
      showThumbs={false}
      infiniteLoop={true}
      onChange={props.handleClick}
      selectedItem={props.selectedItem}
      className={props.classes.carousel}
    >
      {props.races.map(item => {
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

WeaponSelector.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(customStyles)(WeaponSelector);
