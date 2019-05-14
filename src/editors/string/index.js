/* eslint-disable no-use-before-define */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

import editor from './editor.js';

import StringField from './default/StringField';
import StringControl from './default/StringControl';

const defaultView = 'string-field';

const views = {
  'string-field': StringField,
  'string-control': StringControl,
};

// eslint-disable-next-line import/prefer-default-export
export function resolveEditor(schema) {
  if (schema.type === 'string') {
    const name = schema.layout.widget || defaultView;
    const view = views[name] || views[defaultView];
    return { editor, view };
  }
  return false;
}
