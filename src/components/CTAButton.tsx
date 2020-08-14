import React, { lazy } from 'react';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const Icon = lazy(() => import('./Icon'));

function CTAButton(props: { subject: string; children: React.ReactNode; }) {
  return (
    <a className="options__option__cta button" href={'mailto:jack@jacklusher.co.uk?subject=' + props.subject}>
      <span className="options__option__cta__text">{props.children}&nbsp;&nbsp;</span>
      <Icon name={faPaperPlane} />
    </a>
  );
}

export default CTAButton;