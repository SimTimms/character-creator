import React from 'react';

const Social = props => {
  let option;
  if (props.displaySocial !== 'none') {
    option = (
      <div id="diceDiv" style={{ cursor: 'pointer' }}>
        <img
          id="save"
          src={require(`../images/save.jpg`)}
          alt="Save"
          className={props.classes.save}
          onClick={props.printClick}
        />
      </div>
    );
  } else if (props.displaySocial === 'none') {
    return null;
  }
  return <div style={{ display: 'flex' }}>{option}</div>;
};

export default Social;
