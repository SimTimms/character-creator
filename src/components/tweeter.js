import React from 'react';
import { TwitterShareButton } from 'react-share';
const Tweeter = props => {
  if (props.twitterURL === '') {
    return <button>-</button>;
  }
  return (
    <div>
      <button>
        <TwitterShareButton
          url={props.twitterURL}
          title={
            'This is my Hero Master character, create yours at heromaster.link'
          }
          via={'thenobleartist'}
          class="twitter-share-button"
        >
          Tweet This
        </TwitterShareButton>
      </button>
    </div>
  );
};

export default Tweeter;
