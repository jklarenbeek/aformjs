/* eslint-disable no-unused-vars */
/* eslint-disable object-curly-newline */
/* @jsx h */
import { h } from 'futilsjs';

import { ListControl } from './index';
import RenderArray from './RenderArray';
import RenderObject from './RenderObject';

/**
 * Essentially the same as ListArray but then grouped by a tuple with an array of options
 * @param {!object} props
 * @param {!Array} props.options - An array of arrays with each 2 items of which the later item an array of objects as { key, label } data options.
 * @param {(string|string[])} [props.selected] - The selected key of props.options.
 * @param {string} [props.bindKey='key'] - Object property name as key.
 * @param {string} [props.bindLabel='label'] - Object propery name as label.
 * @param {!object} [props.groupLabels={}] - A loopup table for group labels.
 * @return {!JSX[]} Array of jsx <optgroup /> components for <SelectList /> or <MultiList />.
 *
 * @example
 * const options = [
  *  ['White Stuff', [ { ...obj1 }, { ...obj2 } ]]
  *  ['Black Stuff', [ { ... obj3 } ]]
  * ];
  *
  */
export default function RenderTupleGroups({ $name, schema = {}, layout, options = [], optionLayout, groups, groupLayout, selected, disabled, onchange, onfocus, onblur, config = ListControl.config }) {
  const ListGroup = config.ListGroup;

  const r = [];
  const li = options.length;
  for (let i = 0; i < li; i++) {
    const [group, arr] = options[i];
    const children = typeof arr === 'object'
      ? (arr instanceof Array
        ? RenderArray({ $name, schema, layout, options: arr, optionLayout, selected, disabled, onchange, onfocus, onblur, config })
        : RenderObject({ $name, schema, layout, options: arr, optionLayout, selected, disabled, onchange, onfocus, onblur, config }))
      : null;

    r[i] = (<ListGroup
        schema={ schema }
        layout={ layout }
        optionLayout={ optionLayout }
        key={ group }
        groups={ groups }
        groupLayout={ groupLayout }
        disabled={ disabled }
        config={ config }>
        { children }
      </ListGroup>);
  }
  return r;
}
