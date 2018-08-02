import React, { Component } from 'react';
import { TwitterShareButton } from 'react-share';
import Loader from 'react-loader';
import { FacebookIcon, TwitterIcon } from 'react-share';
class Tweeter extends Component {
  constructor(props) {
    super();
  }

  render() {
    let loaded = this.props.displaySocial;
    let loadedBool = true;
    if (loaded === 'false') {
      return null;
    } else if (loaded === 'loading') {
      loadedBool = false;
    }
    const options = { position: 'relative' };
    return (
      <div>
        <Loader loaded={loadedBool} options={options}>
          <TwitterShareButton
            style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
            url={this.props.twitterURL}
            title={
              'This is my Hero Master character, create yours at heromaster.link'
            }
            via={'thenobleartist'}
            class="twitter-share-button"
          >
            <TwitterIcon size={32} round={true} />
            Share <h2 style={{ marginLeft: '5px' }}> {this.props.charName} </h2>
          </TwitterShareButton>
        </Loader>
      </div>
    );
  }
}
export default Tweeter;
