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
              'This is my Hero Master character, create yours at heromaster.link'
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
