/* eslint-disable object-curly-newline */
import { getFirstObjectItem } from 'futilsjs';

import RenderArray from './RenderArray';
import RenderTuple from './RenderTuple';
import RenderObject from './RenderObject';
import RenderArrayGroups from './RenderArrayGroups';
import RenderTupleGroups from './RenderTupleGroups';
import RenderObjectGroups from './RenderObjectGroups';

export default function AutoRenderer({ $name, schema, layout, options, optionLayout, groups, groupLayout, selected, disabled, onchange, onfocus, onblur, config }) {
  if (typeof options === 'object') {
    if (options instanceof Array) { // options array
      const item = options[0];
      if (item instanceof Array) { // tuple items
        const v = item[1];
        if (v instanceof Array) { // tuple of grouped items
          return RenderTupleGroups({ $name, schema, layout, options, optionLayout, groups, groupLayout, selected, disabled, onchange, onfocus, onblur, config });
        }
        else { // tuple of primitive or object items
          return RenderTuple({ $name, schema, layout, options, optionLayout, selected, disabled, onchange, onfocus, onblur, config });
        }
      }
      else if (groups) { // object items with groups
        return RenderArrayGroups({ $name, schema, layout, options, optionLayout, groups, groupLayout, selected, disabled, onchange, onfocus, onblur, config });
      }
      else { // primitive or object items without groups
        return RenderArray({ $name, schema, layout, options, optionLayout, selected, disabled, onchange, onfocus, onblur, config });
      }
    }
    else if (options instanceof Map) {
      throw new Error('NOT IMPLEMENTED!! Actually it is but,....a todootje.');
    }
    else { // options object
      const k = getFirstObjectItem(options);
      const v = options[k];
      if (groups || v instanceof Array) {
        return RenderObjectGroups({ $name, schema, layout, options, optionLayout, groups, groupLayout, selected, disabled, onchange, onfocus, onblur, config });
      }
      else {
        return RenderObject({ $name, schema, layout, options, optionLayout, selected, disabled, onchange, onfocus, onblur, config });
      }
    }
  }
}
