import React from 'react';
import PropTypes from 'prop-types';

const TitleRowComponent = ({ titleLabel, children }) => {
  return (
    <div>
      <h5>{titleLabel}</h5>
      {children}
    </div>
  );
}

TitleRowComponent.propTypes = {
  itemLabel: PropTypes.string.isRequired,
  children: PropTypes.node,
}

export default TitleRowComponent;
