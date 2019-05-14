/* eslint-disable radix */
import { isPureObject } from 'futilsjs';
import AbstractEditor from 'aformjs/editors/abstract.js';

export default class ArrayEditor extends AbstractEditor {
  static matchSchema(schema) {
    if (!schema.items && schema.type === 'array') return true;
    return isPureObject(schema.items);
  }

  constructor(form, schema, path) {
    super(form, schema, path);

    this.type = 'array';

    this.items = isPureObject(schema.items)
      ? schema.items
      : {};

    if (!Number.isNaN(schema.minItems)) {
      this.minItems = parseInt(Math.max(schema.minItems, 0));
    }
    if (!Number.isNaN(schema.maxItems)) {
      const min = this.minItems || 0;
      const max = parseInt(schema.maxItems);
      if (max > min) this.maxItems = schema.maxItems;
    }

    if (schema.uniqueItems === true) this.uniqueItems = true;

    if (Array.isArray(schema.default)) this.default = schema.default;

    this._value = this.default;
    this._valid = false;
    this._error = null;
  }

  validate(value) {
    return true || value;
  }
}
