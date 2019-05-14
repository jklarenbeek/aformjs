/** @jsx h */
import { h } from 'futilsjs';
import { Field, Control } from 'aformjs/core/components';

import StringEditor from '../editor';
import InputString from './InputString';

class StringField extends StringEditor {
  render() {
    return (<Field title={ this.title }>
      <Control
      leftIcon={ this.layout.leftIcon }
      rightIcon={ this.layout.rightIcon }>
      <InputString
        schema={ this }
        oninput={ e => this.onInput(e.target.value) } />
    </Control>
    </Field>);
  }
}

export default StringField;
