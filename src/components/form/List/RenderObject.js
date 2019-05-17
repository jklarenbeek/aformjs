/* eslint-disable object-curly-newline */
/* @jsx h */
import { h } from '__futilsjs';

import { ListControl } from './ListControl';

/**
 * @param {!object} props
 * @param {!object} props.options - An object as { key, label } select option.
 * @param {(string|string[])} [props.$value] - The selected key of props.options.
 * @return {!JSX[]} Array of jsx <option /> components for <SelectList /> or <MultiList />.
 *
 * @example
 * const options = {
  *  'one':'The One',
  *  'two':'Never Goes Without One',
  *  'three':'Cant live with both of them'
  * }
  *
  * @example
  * const options = {
  *  'one': { label:'The One'},
  *  'two': { label:'Never Goes Without One' },
  *  'three': { label:'Cant live with both of them' }
  * };
  *
  */
export default function RenderObject({ $name, schema = {}, layout, options = {}, optionLayout, selected = [], disabled, onchange, onfocus, onblur, config = ListControl.config }) {
  const ListItem = config.ListItem;

  const result = [];
  for (const key in options) {
    if (options.hasOwnProperty(key)) {
      const label = options[key];
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
        config={ config }>
      </ListItem>);
    }
  }
  return result;
}
