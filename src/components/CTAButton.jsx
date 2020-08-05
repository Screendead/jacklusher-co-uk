import React, { lazy } from 'react';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const Icon = lazy(() => import('./Icon'));

function CTAButton(props) {
  return (
    <a className="options__option__cta" href={'mailto:jack@jacklusher.co.uk?subject=' + props.subject}>
      <span className="options__option__cta__text">{props.children}&nbsp;&nbsp;</span>
      <Icon name={faPaperPlane} />
    </a>
  );
}

export default CTAButton;