/* eslint-disable radix */
import AbstractEditor from 'hyperforms/editors/abstract.js';
import getStringFormatType from './default/index';

export default class StringEditor extends AbstractEditor {
  static matchSchema(schema) {
    if (schema.type === 'string') return true;
    if (schema.items) return false;
    if (schema.properties) return false;
    return !(schema.type);
  }

  static createRegExp(pattern) {
    const match = pattern.match(/^\/(.*)\/([gimuy]{1,5})$/);
    if (match.length === 2) return new RegExp(match[0], match[1]);
    if (match.length === 1) return new RegExp(match[0]);
    return new RegExp(pattern);
  }


  constructor(form, schema, path) {
    super(form, schema, path);

    this.type = 'string';
    this.format = getStringFormatType(schema.format);

    if (typeof schema.pattern === 'string') {
      this.pattern = schema.pattern;
      this._pattern = StringEditor.createRegExp(schema.pattern);
    }

    if (!Number.isNaN(schema.minLength)) {
      const min = Math.abs(parseInt(schema.minLength));
      if (min > 0) this.minLength = min;
    }
    if (!Number.isNaN(schema.maxLength)) {
      const min = this.minLength || 0;
      const max = Math.max(Math.abs(parseInt(schema.maxLength)), min);
      if (max > min) this.maxLength = max;
    }

    if (typeof schema.default === 'string') this.default = schema.default;

    this._value = this.default;
    this._valid = true;
    this._error = null;
  }

  validate(value) {
    if (value === null) return !!this.nullable;
    if (value === undefined) return !!this.required;

    if (typeof value === 'string') {
      const min = this.minLength;
      const max = this.maxLength;
      const len = value.length;
      if (min && len < min) return false;
      if (max && len > max) return false;
      const p = this.pattern;
      if (p) return p.test(value);
      return true;
    }
    return false;
  }

  onInput(value) {
    if (this._value !== value) {
      this._value = value;
      this._valid = this.validate(value);
      return true;
    }
    return false;
  }
}
