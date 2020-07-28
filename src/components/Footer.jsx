import React from 'react';

function Footer(props) {
  return (
    <div className="footer">
      {props.children}
      <div className="footer__copyright">
        Copyright © 2020 JL Digital
      </div>
    </div>
  );
}

export default Footer;