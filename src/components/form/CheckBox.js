
/* eslint-disable object-curly-newline */
/* eslint-disable import/prefer-default-export */
/* @jsx h */
import { h } from 'futilsjs';

import { CheckList, CheckItem } from './CheckList';
import { Control } from './_Control';

export function CheckBox({ $id, $name, key, selected = [], label, readOnly, disabled, onchange, onfocus, onblur, config = CheckList.config }) {
  return (<Control $id={ $id } layout={ {} } config={ config }>
    <CheckItem
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
