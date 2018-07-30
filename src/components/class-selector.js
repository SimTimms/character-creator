import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const customStyles = {
  carousel: {
    width: '50%',
    zIndex: 0,
    marginLeft: '5%',
    marginTop: '23%',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
};

const ClassSelector = props => {
  return (
    <Carousel
      key="classes"
      showArrows={false}
      useKeyboardArrows={true}
      showThumbs={false}
      infiniteLoop={true}
      showIndicators={false}
      showStatus={false}
      selectedItem={props.selectedItem}
      className={props.classes.carousel}
    >
      {props.charClasses.map(item => {
        let itemLow = item.toString().toLowerCase();
        return (
          <div key={item}>
            <img
              src={require(`../images/class/${itemLow}.jpg`)}
              alt={itemLow}
            />
          </div>
        );
      })}
    </Carousel>
  );
};

ClassSelector.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(customStyles)(ClassSelector);
