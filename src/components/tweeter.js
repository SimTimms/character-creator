import React, { Component } from 'react';
import { TwitterShareButton } from 'react-share';
import Loader from 'react-loader';
import { TwitterIcon } from 'react-share';
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
            style={{
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
              width: '400px',
              margin: 'auto',
            }}
            url={this.props.shareURL}
            title={
              'Check out the hilarious character I just made in the Hero Master: An Epic Game of Epic Fails character generator! Create you own, learn more about the game and claim your free gift here: https://thenobleartist.com/heromastergame '
            }
            via={'thenobleartist'}
            class="twitter-share-button"
          >
            <TwitterIcon size={32} round={true} />
            Tweet <h2 style={{ marginLeft: '5px' }}> {this.props.charName} </h2>
          </TwitterShareButton>
        </Loader>
      </div>
    );
  }
}
export default Tweeter;
