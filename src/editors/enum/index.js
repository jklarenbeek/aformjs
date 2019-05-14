/* eslint-disable no-proto */
/* eslint-disable no-use-before-define */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

import editor from './editor.js';
import views from './default';

const defaultView = 'select-field';

// eslint-disable-next-line import/prefer-default-export
export function resolveEditor(schema) {
  if (schema.enum) {
    const name = schema.layout.widget || defaultView;
    const view = views[name] || views[defaultView];
    return { editor, view };
  }
  return false;
}
