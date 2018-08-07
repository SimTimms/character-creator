import React, { Component } from 'react';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import customStyles from '../styles/index';
import PropTypes from 'prop-types';

const apiTarget = 'https://char-creator-api.herokuapp.com/uploads';
//const apiTarget = 'http://localhost:3001/uploads';

class MyCharEmbed extends Component {
  constructor(props) {
    super();
    this.state = {
      image: '',
    };
  }

  componentWillMount() {
    axios.get(`${apiTarget}/${this.props.match.params.id}`).then(result => {
      this.setState({ image: result.data.image });
    });
  }

  render() {
    return (
      <div>
        <img
          src={`${this.state.image}`}
          style={{ width: '100%', maxWidth: '700px' }}
          alt={`${this.state.image}`}
        />
      </div>
    );
  }
}

MyCharEmbed.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(customStyles)(MyCharEmbed);
