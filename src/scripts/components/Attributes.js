import React from 'react';

export const Attributes = (props) => {
    return (
      <div className="attribute">
        <div className="attribute_icon">
          <img src={`images/icons/${props.iconName}.svg`} />
        </div>
        <span>{props.children}</span>
      </div>
    );
  }
  