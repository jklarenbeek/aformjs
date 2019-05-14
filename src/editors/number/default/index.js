import StringField from './StringField';
import StringControl from './StringControl';

export const numberFormats = ['number', 'range', 'date', 'datetime', 'datetime-local', 'month', 'time', 'week'];

export function getNumberFormatType(schema) {
  return numberFormats.includes(schema.format)
    ? schema.format
    : 'number';
}

export function resolveEditor(schema) {
  switch (schema.layout.type) {
    case 'StringControl': return StringControl;
    default: return StringField;
  }
}
