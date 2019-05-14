/* eslint-disable object-curly-newline */
/* eslint-disable import/prefer-default-export */
import { RadioList, RadioItem } from './RadioList';
import { Control } from './_Control';

export function RadioBox({ $id, $name, key, selected = [], label, readOnly, disabled, onchange, onfocus, onblur, config = RadioList.config }) {
  return (<Control $id={ $id } layout={ {} } config={ config }>
    <RadioItem
      $name={ $name }
      key={ key }
      selected={ selected }
      label={ label }
      onchange={ onchange }
      onfocus={ onfocus }
      onblur={ onblur }
      readonly={ readOnly }
      disabled={ disabled }
      config={ config } />
  </Control>);
}
