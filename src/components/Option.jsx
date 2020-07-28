import React from 'react';

function Option(props) {
  return (
    <span className="options__option">
      <div className="options__option__title-container">
        <h3 className="options__option__title">{props.title}</h3>
        <h4 className="options__option__subtitle">{props.subtitle}</h4>
      </div>
      <div className="options__option__features-container">
        <ul className="options__option__features">{props.children}</ul>
      </div>
    </span>
  );
}

export default Option;