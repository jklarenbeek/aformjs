/* eslint-disable padded-blocks */
/* eslint-disable object-curly-newline */
/* eslint-disable import/prefer-default-export */
/* @jsx h */
import { h } from 'futilsjs';

import {
  parseColorModifier,
  parseTextModifier,
  parseBackModifier,
  parseStyleModifier,
  parseSizeModifier,
  inputModifier,
} from 'hyperforms/components/modifiers';

import { Control } from './_Control';

const configInputNumber = {
  ...Control.config,
  inputClass: 'input',
};

const numberFormats = ['number', 'range', 'date', 'datetime', 'datetime-local', 'month', 'time', 'week'];

/**
 * @param {!object} props
 * @param {string} [props.$id] - DOM Element Identifier.
 * @param {string} [props.$name=props.$id] - HTML Form Field Identier.
 * @param {!string} format - see HTML5 <input /> type attribute for number types.
 * @param {!object} props.schema - see string type for JSONSchema.
 * @param {boolean} [props.schema.required] - see jsonschema schema.required.
 * @param {boolean} [props.schema.readOnly] - see jsonschema schema.readOnly.
 * @param {string} [props.schema.placeholder] - see HTML5 <input /> placeholder attribute.
 * @param {string} [props.schema.autocomplete] - see HTML5 <input /> autocomplete attribute.
 * @param {number} [props.schema.minimum] - see jsonschema number.minimum.
 * @param {number} [props.schema.maximum] - see jsonschema number.maximum.
 * @param {number} [props.schema.multipleOf] - see jsonschema number.multipleOf.
 * @param {(string|string[])} [props.class] - see HTML5 class attribute.
 * @param {!string} [$value] - value of input element.
 * @param {string} [list] - DOM Identifier of <datalist />.
 * @param {boolean} [disabled] - is DOM element disabled?
 * @param {OnInputEvent} [oninput] - DOM input event.
 * @param {OnKeyUpEvent} [onkeyup] - DOM keyup event.
 * @param {OnChangeEvent} [onchange] - DOM change event.
 * @param {OnFocusEvent} [onfocus] - DOM focus event.
 * @param {OnBlurEvent} [onblur] - DOM blur event.
 * @return {!JSX} jsx <input /> component for string types.
 */
export function InputNumber({ $id, $name, $value,
  schema = {}, layout = {},
  iconLeft, iconRight,
  dataList,
  disabled,
  oninput, onkeyup, onchange, onfocus, onblur,
  config = configInputNumber }) {

  const inputcls = [
    parseColorModifier(layout.color),
    parseTextModifier(layout.textColor),
    parseBackModifier(layout.backColor),
    parseSizeModifier(layout.size),
    parseStyleModifier(layout.styles),
    layout.isStatic && inputModifier.static,
  ];

  const inputtype = (numberFormats.includes(schema.format) && schema.format) || 'number';

  return (<Control $id={ $id } layout={ layout } iconLeft={ iconLeft } iconRight={ iconRight } config={ config }>
      <input
        name={ $name }
        type={ inputtype }
        class={ [config.inputClass, inputcls] }
        required={ schema.required }
        min={ schema.minimum }
        max={ schema.maximum }
        step= { schema.multipleOf }
        value={ $value }
        list={ dataList }
        placeholder={ schema.placeholder }
        autocomplete={ schema.autocomplete } // TODO: compile & parse
        readonly={ schema.readOnly }
        disabled={ disabled }
        oninput={ oninput }
        onkeyup={ onkeyup }
        onchange={ onchange }
        onblur={ onblur }
        onfocus={ onfocus } />
    </Control>);
}
InputNumber.config = configInputNumber;
InputNumber.formats = numberFormats;
