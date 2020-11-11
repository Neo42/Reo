import React from 'react';
import './index.css';

export default ({
  title, footer, children, closable,
}) => (
  <div className="modal">
    {closable
        && <div className="close">X</div>}
    <div className="header">
      {title}
      <hr />
    </div>
    <div className="content">
      {children}
    </div>
    <div className="footer">
      {footer}
    </div>
  </div>
);
