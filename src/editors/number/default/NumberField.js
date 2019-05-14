/** @jsx h */
import { h } from 'futilsjs';
import { Field, Control } from 'hyperforms/core/components';

import NumberEditor from '../editor';
import InputNumber from './InputNumber';

class NumberField extends NumberEditor {
  render() {
    return (<Field label={ this.title } {...this.layout.field}>
      <Control { ...this.layout.control }>
      <InputNumber
        class={ this.layout.class }
        schema={ this }
        oninput={ e => this.onInput(e.target.value) } />
    </Control>
    </Field>);
  }
}

export default NumberField;
