/* eslint-disable object-curly-newline */
/* eslint-disable import/prefer-default-export */

import { Field } from './Field';

export const configGroupedField = {
  ...Field.config,
  fieldClass: ['field', 'is-grouped'],
};

export function GroupedField({ $id, for: forInput, schema = { title: null }, layout = { class: [] }, help = { class: null, content: null }, role, config = configGroupedField }, children) {
  return Field({ $id, for: forInput, schema, layout, help, role, config }, children);
}
