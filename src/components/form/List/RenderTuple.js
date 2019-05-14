/* eslint-disable no-unused-vars */
/* eslint-disable object-curly-newline */
/* @jsx h */
import { h } from 'futilsjs';

import { ListControl } from './index';

/**
 * @param {!object} props
 * @param {string} [props.$name] - HTML Form Field Identier.
 * @param {!Array} props.options - An array as { key, key } select option.
 * @param {string[]} [props.selected=[]] - The selected key of props.options.
 * @return {!JSX[]} Array of jsx <option /> components for <SelectList /> or <MultiList />.
 *
 * @example
 * const options = [ ['one'], ['two'], ['three']]
 *
 * @example
 * const options = [
 *  [ 'one', 'The One' ],
 *  [ 'two', 'Never Goes Without One' ],
 *  [ 'three', { label:'Cant live with both of them' }],
 * ];
 *
 */
export default function ListTuple({ $name, schema = {}, layout, options = [], optionLayout, selected = [], disabled, onchange, onfocus, onblur, config = ListControl.config }) {
  const ListItem = config.ListItem;

  const result = [];
  const l = options.length;
  let i = 0;
  for (; i < l; i++) {
    const tuple = options[i];
    const key = tuple[0];
    const label = tuple[1] || key;

    result.push(<ListItem
      $name={ $name }
      schema={ schema }
      layout={ layout }
      key={ key }
      option={ label }
      optionLayout={ optionLayout }
      selected={ selected }
      disabled={ disabled }
      onchange={ onchange }
      onfocus={ onfocus }
      onblur={ onblur }
      config={ config } />);
  }
  return result;
}
