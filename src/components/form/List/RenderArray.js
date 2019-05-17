/* @jsx h */
import { h } from '__futilsjs';

/* eslint-disable object-curly-newline */
import { ListControl } from './ListControl';

/**
 * @param {!object} props
 * @param {string} [props.$name] - HTML Form Field Identier.
 * @param {!Array} props.options - An array as { key, key } select option.
 * @param {string[]} [props.selected=[]] - The selected key of props.options.
 * @return {!JSX[]} Array of jsx <option /> components for <SelectList /> or <MultiList />.
 *
 * @example
 * const options = ['one','two', 'three']
 *
 * @example
 * const options = [
 *  { key:'one', label:'The One'},
 *  { key:'two', label:'Never Goes Without One' },
 *  { key:'three', label:'Cant live with both of them' }
 * ];
 *
 */
export default function RenderArray({ $name, schema = {}, layout, options = [], optionLayout, selected = [], disabled, onchange, onfocus, onblur, config = ListControl.config }) {
  const ListItem = config.ListItem;

  const result = [];
  const l = options.length;
  for (let i = 0; i < l; i++) {
    const item = options[i];
    result.push(<ListItem
      $name={ $name }
      schema={ schema }
      layout={ layout }
      option={ item }
      optionLayout={ optionLayout }
      selected={ selected }
      disabled={ disabled }
      onchange={ onchange }
      onfocus={ onfocus }
      onblur={ onblur }
      config={ config }>
    </ListItem>);
  }
  return result;
}
