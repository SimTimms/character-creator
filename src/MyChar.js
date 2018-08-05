import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import customStyles from './styles/index';
import PropTypes from 'prop-types';

const apiTarget = 'https://char-creator-api.herokuapp.com/uploads';
//const apiTarget = 'http://localhost:3001/uploads';

class MyChar extends Component {
  constructor(props) {
    super();
    this.state = {
      image: ''
    };
  }

  componentWillMount() {
    axios.get(`${apiTarget}/${this.props.match.params.id}`).then(result => {
      this.setState({ image: result.data.image });
    });
  }

  render() {
    const { classes } = this.props;
    return <div>{this.state.image}</div>;
  }
}

MyChar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(customStyles)(MyChar);
