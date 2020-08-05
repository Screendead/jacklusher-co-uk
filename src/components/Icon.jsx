import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Icon(props) {
  return (
    <span className="icon">
      <FontAwesomeIcon icon={props.name} />
    </span>
  );
}

export default Icon;