/** @jsx h */
import { h } from 'futilsjs';
import { Control } from 'aformjs/core/components';

import StringEditor from '../editor';
import InputString from './InputString';

class StringControl extends StringEditor {
  render() {
    return (<Control
      leftIcon={ this.layout.leftIcon }
      rightIcon={ this.layout.rightIcon }>
      <InputString
        schema={ this }
        oninput={ e => this.onInput(e.target.value) }
      />
    </Control>);
  }
}

export default StringControl;
