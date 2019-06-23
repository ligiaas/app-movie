import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../node_modules/bootstrap/dist/css/bootstrap.css';

const WmButton = ({ label, primary, secondary, onClick}) =>
  <Button
    label={label}
    primary={primary}
    secondary={secondary}
    onClick={onClick}
  />

const { string, bool, func} = PropTypes

Button.PropTypes = {
  label: string.isRequired,
  primary: bool.isRequired,
  secondary: bool,
  onClick: func.isRequired,
}

export default WmButton;