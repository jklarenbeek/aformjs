import AbstractEditor from 'aformjs/editors/abstract.js';
import { parseEnumArray } from './tools';

export default class EnumEditor extends AbstractEditor {
  static matchSchema(schema) {
    if (schema.type === 'boolean') return true;
    if (typeof schema.enum === 'object') return true;
    return false;
  }

  constructor(form, schema, path) {
    super(form, schema, path);

    this.enum = schema.enum;

    this._cache = parseEnumArray(this);
    this._error = null;
    if (this._cache.constructor !== Array) {
      this._error = this._cache;
      this._cache = [];
    }

    this._index = -1;
    this._value = this.default;
    this._valid = false;
  }

  validate(value) {
    if (value === undefined) {
      return !!this.required;
    }
    if (value === null) {
      return !!this.nullable;
    }
    return true;
  }


  onSelectChange(ev) {
    this._index = ev.index;
    this._value = ev.value;
    this._valid = EnumEditor.validate(this);
    return true;
  }
}
