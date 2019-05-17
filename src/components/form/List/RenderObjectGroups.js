/* eslint-disable object-curly-newline */
/* @jsx h */
import { h } from 'futilsjs';

import { ListControl } from './ListControl';
import RenderArray from './RenderArray';
import RenderTuple from './RenderTuple';

/**
 * This function emits config.ListItem, goes 1 deep and is not recursive.
 * @param {!object} props
 * @param {!Array} props.options - An object of groups with objects as { key, label } data options.
 * @param {string[]} [props.selected=[]] - The selected key of props.options.
 * @return {!JSX[]} Array of jsx <optgroup /> components for <SelectList /> or <MultiList />.
 *
  */
export default function RenderObjectGroups({ $name, schema = {}, layout, options = {}, optionLayout, groups, groupLayout, selected, disabled, onchange, onfocus, onblur, config = ListControl.config }) {
  const ListItem = config.ListItem;
  const ListGroup = config.ListGroup;

  const sq = [];
  const ng = {};
  for (const o in options) {
    if (!options.hasOwnProperty(o)) continue;
    const obj = options[o];
    if (typeof obj !== 'object') continue;

    if (obj instanceof Array) { // group is o
      const j = obj[0];
      sq[sq.length] = o; // set sequence of group .. (not really necessary)
      if (j instanceof Array) {
        ng[o] = RenderTuple({ $name, schema, layout, options: obj, optionLayout, selected, disabled, onchange, onfocus, onblur, config });
      }
      else {
        ng[o] = RenderArray({ $name, schema, layout, options: obj, optionLayout, selected, disabled, onchange, onfocus, onblur, config });
      }
    }
    else { // group id is in record
      const g = obj[config.bindGroup] || config.defaultGroupName;
      if (!ng.hasOwnProperty(g)) {
        sq[sq.length] = g;
        ng[g] = [];
      }

      const c = ng[g]; // get the named group array with objects for that group
      c.push(<ListItem
        $name={ $name }
        schema={ schema }
        layout={ layout }
        key={ o }
        option={ obj }
        optionLayout={ optionLayout }
        groupLayout={ groupLayout }
        selected={ selected }
        disabled={ disabled }
        onchange={ onchange }
        onfocus={ onfocus }
        onblur={ onblur }
        config={ config } />); // and add the option
    }
  }

  // now we render all groups with their respective options
  const r = [];
  const sl = sq.length;
  for (let i = 0; i < sl; i++) { // in sequence
    const g = sq[i]; // get group key name in sequence
    const c = ng[g]; // get array of child objects
    r.push(<ListGroup
      schema={ schema }
      layout={ layout }
      optionLayout={ optionLayout }
      groups={ groups }
      groupLayout={ groupLayout }
      selected={ g }
      disabled={ disabled }
      config={ config }>
      { c }
      </ListGroup>);
  }
  return r;
}
