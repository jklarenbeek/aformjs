
/* eslint-disable object-curly-newline */
/* eslint-disable import/prefer-default-export */
/* @jsx h */
import { h } from '__futilsjs';

import { Control } from './_Control';
import { InputItem } from './List/ListControl';
import { RadioList } from './RadioList';

export function RadioBox({ $id, $name, key, selected = [], label, readOnly, disabled, onchange, onfocus, onblur, config = RadioList.config }) {
  return (<Control $id={ $id } layout={ {} } config={ config }>
    <InputItem
      $name={ $name }
      type={ config.inputItemType }
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
