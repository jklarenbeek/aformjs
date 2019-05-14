/* eslint-disable radix */
import AbstractEditor from 'aformjs/editors/abstract.js';
import { getNumberFormatType } from './default/index';

export default class NumberEditor extends AbstractEditor {
  static matchSchema(schema) {
    const type = schema.type;
    if (type === 'number') return true;
    if (type === 'integer') return true;
    if (typeof type !== 'string') return false;
    if (type.indexOf('int') === 0) return true;
    if (type.indexOf('uint') === 0) return true;
    if (type.indexOf('float') === 0) return true;
    return false;
  }

  constructor(form, schema, path) {
    super(form, schema, path);

    if (schema.type === 'integer') {
      this.type = 'integer';
      if (schema.primitive) this.primitive = schema.primitive;
    }
    else if (schema.type === 'number') {
      this.type = 'number';
      if (schema.primitive) this.primitive = schema.primitive;
    }
    else if (schema.type.indexOf('int') === 0) {
      this.type = 'integer';
      this.primitive = schema.type;
    }
    else if (schema.type.indexOf('uint') === 0) {
      this.type = 'integer';
      this.primitive = schema.type;
    }
    else {
      this.type = 'number';
      this.primitive = schema.type;
    }
    this.format = getNumberFormatType();

    const min = this.type === 'integer'
      ? (schema.minimum && parseInt(schema.minimum)) || 0
      : (schema.minimum && Number(schema.minimum)) || 0.0;
    const max = this.type === 'integer'
      ? Math.max((schema.maximum && parseInt(schema.maximum)), min)
      : Math.max((schema.maximum && Number(schema.maximum)), min);

    if (!Number.isNaN(schema.minimum)) {
      this.minimum = min;
      this.exclusiveMinimim = typeof schema.exclusiveMinimim === 'boolean'
        ? schema.exclusiveMinimim
        : false;
      this._minimum = !schema.exclusiveMinimim ? schema.minimum : schema.minimum + 1;
    }

    if (!Number.isNaN(schema.maximum)) {
      if (max > 0 || max > min) {
        this.maximum = max;
        this.exclusiveMaximim = typeof schema.exclusiveMaximim === 'boolean'
          ? schema.exclusiveMaximim
          : false;
        this._maximum = !schema.exclusiveMaximim ? schema.maximum : schema.maximum - 1;
      }
    }

    const low = this.type === 'integer'
      ? (schema.low && parseInt(schema.low)) || min
      : (schema.low && Number(schema.low)) || min;
    const high = this.type === 'integer'
      ? Math.max(((schema.high && parseInt(schema.high)) || max), low)
      : Math.max(((schema.high && Number(schema.high)) || max), low);

    if (!Number.isNaN(schema.low)) {
      if (low > min && low < high) {
        this.low = low;
      }
    }
    if (!Number.isNaN(schema.high)) {
      if (high > low && high < max) {
        this.high = high;
      }
    }

    const optimum = this.type === 'integer'
      ? (schema.optimum && parseInt(schema.optimum)) || min
      : (schema.optimum && Number(schema.optimum)) || min;
    if (!Number.isNaN(schema.optimum)) {
      if (optimum > min && optimum < max) {
        this.optimum = optimum;
      }
    }

    if (!Number.isNaN(schema.multipleOf)) {
      this.multipleOf = this.type === 'integer'
        ? parseInt(schema.multipleOf)
        : Number(schema.multipleOf);
    }
    else if (this.type === 'integer') this.multipleOf = 1;

    if (!Number.isNaN(schema.default)) {
      this.default = this.type === 'integer'
        ? this.default = parseInt(schema.default)
        : this.default = Number(schema.default);
    }

    this._value = this.default;
    this._valid = false;
    this._error = null;
  }

  validate(value) {
    if (value === null) return !!this.nullable;
    if (value === undefined) return !!this.required;

    const raw = this.type === 'integer'
      ? parseInt(value)
      : Number(value);

    if (Number.isNaN(raw)) return false;

    if (!(this.maximum && (this.exclusiveMaximim ? raw < this.maximum : raw <= this.maximum))) return false;
    if (!(this.minimum && (this.exclusiveMinimim ? raw > this.minimum : raw >= this.minimum))) return false;
    if (this.multipleOf && (raw % this.multipleOf !== 0)) return false;
    return true;
  }

  onInput(value) {
    this._value = value;
    return true;
  }
}
