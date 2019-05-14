/* eslint-disable object-curly-newline */
/* @jsx h */
import { h } from 'futilsjs';

import { ListControl } from './index';

/**
 * Essentially the same as ListArray but then grouped by column.
 * @param {!object} props
 * @param {!Array} props.options - An array of objects as grouped { key, label } data options.
 * @param {string[]} [props.selected=[]] - The selected key of props.options.
 * @param {!object} [props.groupLabels={}] - A loopup table for group labels.
 * @return {!JSX[]} Array of jsx <optgroup /> components for <SelectList /> or <MultiList />
 *
 * @example
 * const options = [
  *  { key: 'one', label: 'One', group: 'white' },
  *  { key: 'two', label: 'Two', group: 'white' },
  *  { key: 'Three', label: 'Three', group: 'black' },
  * ];
  *
  */
export default function RenderArrayGroups({ $name, schema = {}, layout, options = [], optionLayout, groups, groupLayout, selected, disabled, onchange, onfocus, onblur, config = ListControl.config }) {
  const ListItem = config.ListItem;
  const ListGroup = config.ListGroup;

  // first we render all the options and store them in named arrays
  const ol = options.length;
  const ng = {}; // named group arrays of object children
  const sq = []; // sequence of groups
  const bindGroup = config.bindGroup; // key to bind the group to
  for (let i = 0; i < ol; i++) { // in sequence
    const obj = options[i]; // get item object
    if (typeof obj === 'object') { // and it should! otherwise its RenderArray
      const gn = obj[bindGroup] || config.defaultGroupName; // get the group node as named key
      if (!ng[gn]) { // the named group doesn't exist
        sq.push(gn); // add it to the sequence
        ng[gn] = []; // and create a new property in the new group object for children
      }

      const children = ng[gn]; // get the named group array with objects for that group
      children.push(<ListItem
        $name={ $name }
        schema={ schema }
        layout={ layout }
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
  const result = [];
  const sl = sq.length;
  for (let i = 0; i < sl; i++) { // in sequence
    const gn = sq[i]; // get group key name in sequence
    const children = ng[gn]; // get array of child objects
    result.push(<ListGroup
      schema={ schema }
      layout={ layout }
      optionLayout={ optionLayout }
      groups={ groups }
      groupLayout={ groupLayout }
      selected={ gn }
      disabled={ disabled }
      config={ config }>{ children }</ListGroup>);
  }
  return result;
}
