/* eslint-disable no-proto */
/* eslint-disable import/prefer-default-export */

import { resolveEditor as enumResolver } from './enum';
import { resolveEditor as stringResolver } from './string';

const resolveEditors = [
  enumResolver,
  stringResolver,
];

export function resolveEditor(schema) {
  const l = resolveEditors.length;
  for (let i = 0; i < l; i++) {
    const editor = resolveEditors[i](schema);
    if (editor) return editor;
  }
  return undefined;
}

export function connectEditor(editor, schema) {
  schema.__proto__ = editor;
  return schema;
}

export function loadEditor(editor, schema) {
  const result = {};
  editor.constructor.call(result);
  const properties = Object.getOwnPropertyNames(schema);
  for (const key in properties) {
    result[key] = schema[key];
  }
  return result;
}
