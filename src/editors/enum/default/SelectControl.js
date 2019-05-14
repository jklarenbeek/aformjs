/** @jsx h */
import {
  colorModifierValidate,
} from 'aformjs/components/modifiers';

import EnumEditor from '../editor';

// import {
//   SelectElement,
// } from 'aformjs/components/SelectElement';

export default class SelectControl extends EnumEditor {
  render() {
    return (<Control
      leftIcon={ this.layout.leftIcon }
      rightIcon={ this.layout.rightIcon }>
      <SelectElement
        normalized={ this._enum }
        required={ this.required }
        placeholder={ this.options.placeholder }
        onchange={ this.onSelectChange }
        classlist={ colorModifierValidate(this._valid, this.required) }>
      </SelectElement>
    </Control>);
  }
}
