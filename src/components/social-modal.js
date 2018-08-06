import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Tweeter from './tweeter';
import Facebook from './facebook';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
    width: '100%',
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
});

class SocialModal extends Component {
  constructor(props) {
    super();
  }

  render() {
    const { classes, handleClose, open, charName, shareURL } = this.props;
    return (
      <div>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={open}
          onClose={handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <Tweeter
              shareURL={shareURL}
              charName={charName}
              displaySocial={this.props.displaySocial}
            />
            <Facebook
              shareURL={shareURL}
              charName={charName}
              displaySocial={this.props.displaySocial}
            />
          </div>
        </Modal>
      </div>
    );
  }
}

SocialModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = withStyles(styles)(SocialModal);

export default SimpleModalWrapped;
