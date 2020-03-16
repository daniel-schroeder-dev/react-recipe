import React from 'react';
import './GreyOutBox.css';

function GreyOutBox(props) {
  if (!props.showGreyOutBox) return null;
  return <div className="grey-out-box"></div>;
}

export default GreyOutBox;