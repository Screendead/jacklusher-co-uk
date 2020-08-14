import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';

function Icon(props: { name: IconDefinition; }) {
  return (
    <span className="icon">
      <FontAwesomeIcon icon={props.name} />
    </span>
  );
}

export default Icon;