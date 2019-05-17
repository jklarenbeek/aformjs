/** @jsx h */
import { h } from '__futilsjs';
import { Control } from 'aformjs/core/components';

import NumberEditor from '../editor';
import InputNumber from './InputNumber';

class NumberControl extends NumberEditor {
  render() {
    return (<Control
      leftIcon={ this.layout.leftIcon }
      rightIcon={ this.layout.rightIcon }>
      <InputNumber
        schema={ this }
        oninput={ e => this.onInput(e.target.value) }
      />
    </Control>);
  }
}

export default NumberControl;
