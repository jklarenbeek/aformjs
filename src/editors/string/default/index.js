import StringField from './StringField';
import StringControl from './StringControl';

export const stringFormats = ['text', 'date', 'search', 'url', 'tel', 'email', 'password'];

export function getStringFormatType(schema) {
  if (schema.writeOnly === true) return 'password';
  return stringFormats.includes(schema.format)
    ? schema.format
    : 'text';
}

export function resolveEditor(schema) {
  switch (schema.layout.type) {
    case 'StringControl': return StringControl;
    default: return StringField;
  }
}
