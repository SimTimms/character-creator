import React, { Component } from 'react';
import { FacebookShareButton } from 'react-share';
import Loader from 'react-loader';
import { FacebookIcon } from 'react-share';
class Facebook extends Component {
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
          <FacebookShareButton
            style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
            url={this.props.shareURL}
            quote={
              'Check out the hilarious character I just made in the Hero Master: An Epic Game of Epic Fails character generator! Create you own, learn more about the game and claim your free gift here: https://thenobleartist.com/heromastergame Launching on Kickstarter 18th September 2018 #boardgames #games'
            }
          >
            <FacebookIcon size={32} round={true} />
            Post <h2 style={{ marginLeft: '5px' }}> {this.props.charName} </h2>
          </FacebookShareButton>
        </Loader>
      </div>
    );
  }
}
export default Facebook;
