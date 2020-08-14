import React, { lazy } from 'react';

const CTAButton = lazy(() => import('./CTAButton'));

function Option(props: { title: String; subtitle: String; children: React.ReactNode; price: number; }) {
  return (
    <span className="options__option">
      <div className="options__option__title-container">
        <h3 className="options__option__title">{props.title}</h3>
        <h4 className="options__option__subtitle">{props.subtitle}</h4>
      </div>
      <div className="options__option__features-container">
        <ul className="options__option__features">{props.children}</ul>
      </div>
      <div className="options__option__cta-container">
        <CTAButton subject={`Enquiry RE: ${props.title} - ${props.subtitle}`}>£{props.price}/mo</CTAButton>
      </div>
    </span>
  );
}

export default Option;