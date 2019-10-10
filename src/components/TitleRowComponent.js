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

// exibe o tipo das propriedades do componente, se são obrigatórias ou não.
TitleRowComponent.propTypes = {
  titleLabel: PropTypes.string.isRequired,
  children: PropTypes.node,
}

export default TitleRowComponent;
