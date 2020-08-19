import React from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';

import Icon from './Icon';

function HeaderIcon(props: { name: IconDefinition; }) {
  return (
    <span aria-hidden={true} className="header__title-icon">
      <Icon aria-hidden={true} name={props.name}></Icon>
    </span>
  );
}

export default HeaderIcon;