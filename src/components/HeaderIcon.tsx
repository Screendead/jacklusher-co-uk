import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import React, { lazy } from 'react';

const Icon = lazy(() => import('./Icon'));

function HeaderIcon(props: { name: IconDefinition; }) {
  return (
    <span aria-hidden={true} className="header__title-icon">
      <Icon aria-hidden={true} name={props.name}></Icon>
    </span>
  );
}

export default HeaderIcon;