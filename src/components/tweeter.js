import React, { Component } from 'react';
import { TwitterShareButton } from 'react-share';
const Tweeter = props => {
  return (
    <div>
      <button>
        <TwitterShareButton
          url={props.twitterURL}
          title={'Check This'}
          via={'thenobleartist'}
          class="twitter-share-button"
        >
          {props.twitterURL}
        </TwitterShareButton>
      </button>
    </div>
  );
};

export default Tweeter;
