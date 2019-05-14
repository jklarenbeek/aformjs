import { isPureObject } from 'hyperforms/core/tools';

export default class AbstractEditor {
  constructor(form, schema, path) {
    this._form = form || this;
    this._path = path;

    if (typeof schema.type === 'string') this.type = schema.type;
    if (typeof schema.format === 'string') this.format = schema.format;
    if (schema.required === true) this.required = true;
    if (schema.nullable === true) this.nullable = true;
    if (schema.readOnly === true) this.readOnly = true;
    if (schema.writeOnly === true) this.writeOnly = true;

    if (typeof schema.title === 'string') this.title = schema.title;
    if (typeof schema.$comment === 'string') this.$comment = schema.$comment;
    if (typeof schema.description === 'string') this.description = schema.description;
    if (typeof schema.placeholder === 'string') this.placeholder = schema.placeholder;
    if (schema.default) this.default = schema.default;
    if (Array.isArray(schema.examples)) this.examples = schema.examples;

    this.layout = isPureObject(this.layout) ? this.layout : {};
  }
}
