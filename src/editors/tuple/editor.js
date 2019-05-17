/* eslint-disable radix */
import { isPureObject } from '__futilsjs';
import AbstractEditor from 'aformjs/editors/abstract.js';

export default class TupleEditor extends AbstractEditor {
  static matchSchema(schema) {
    if (schema.type === 'tuple') return true;
    if (Array.isArray(schema.items)) return true;
    return false;
  }

  constructor(form, schema, path) {
    super(form, schema, path);

    this.type = 'tuple';

    this.items = Array.isArray(schema.items)
      ? schema.items
      : [];

    if (isPureObject(schema.additionalItems)) this.additionalItems = schema.additionalItems;

    if (!Number.isNaN(schema.minItems)) {
      this.minItems = parseInt(Math.max(schema.minItems, 0));
    }
    if (!Number.isNaN(schema.maxItems)) {
      const min = this.minItems || 0;
      const max = parseInt(schema.maxItems);
      if (max > min) this.maxItems = schema.maxItems;
    }

    if (Array.isArray(schema.default)) this.default = schema.default;

    this._value = this.default;
    this._valid = false;
    this._error = null;
  }

  validate(value) {
    return true || value;
  }
}
