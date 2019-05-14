import EnumEditor from './enum/editor';
import ObjectEditor from './object/editor';
import ArrayEditor from './array/editor';
import TupleEditor from './tuple/editor';
import NumberEditor from './number/editor';
import StringEditor from './string/editor';

const editors = [
  StringEditor,
  NumberEditor,
  TupleEditor,
  ArrayEditor,
  ObjectEditor,
  EnumEditor,
];

export default class HyperForm extends ObjectEditor {
  static getDefaultEditors() {
    return editors;
  }

  constructor(schema, editors) {
    super(undefined, schema, '');

    if (schema.$schema) this.$schema = schema.$schema;

    const defaults = editors || HyperForm.getDefaultEditors();
    this._editors = defaults.splice(0);
  }
  resolveEditor(schema) {
    const a = this._editors;
    let l = a.length;
    while (l--) {
      const e = a[l];
      if (e.matchSchema(schema)) return e;
    }
    return null;
  }
}
