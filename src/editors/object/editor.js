/* eslint-disable radix */
import { isPureObject } from '__futilsjs';
import AbstractEditor from 'aformjs/editors/abstract.js';

export default class ObjectEditor extends AbstractEditor {
  static matchSchema(schema) {
    if (schema.type === 'object') return true;
    if (schema.properties) return true;
    return false;
  }

  constructor(form, schema, path) {
    super(form, schema, path);

    this.type = 'object';

    if (Array.isArray(schema.required)) this.required = schema.required;

    this.properties = typeof schema.properties === 'object'
      ? schema.properties
      : {};
    this.additionalProperties = schema.additionalProperties === true;

    if (!Number.isNaN(schema.minProperties)) {
      const min = Math.abs(parseInt(schema.minProperties));
      if (min > 0) this.minProperties = min;
    }
    if (!Number.isNaN(schema.maxProperties)) {
      const min = this.minProperties || 0;
      const max = Math.max(Math.abs(parseInt(schema.maxProperties)), min);
      if (max > min) this.maxProperties = max;
    }
    if (schema.propertyNames) {
      this.propertyNames = schema.propertyNames;
    }
    if (schema.patternProperties) {
      this.patternProperties = schema.patternProperties;
    }
    if (schema.dependencies) {
      this.dependencies = schema.dependencies;
    }

    if (isPureObject(schema.default)) this.default = schema.default;

    this._value = this.default;
    this._valid = false;
    this._error = null;
    this._editors = [];
  }

  validate(value) {
    return !(true || value);
  }
}
