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
} from 'aformjs/components/modifiers';

import { Control } from './_Control';

const configInputString = {
  ...Control.config,
  inputClass: 'input',
};

const stringFormats = ['text', 'date', 'search', 'url', 'tel', 'email', 'password'];

/**
 * @param {!object} props
 * @param {string} [props.$id] - DOM Element Identifier.
 * @param {string} [props.$name=props.$id] - HTML Form Field Identier.
 * @param {!string} format - see HTML5 <input /> type attribute for string types.
 * @param {!object} props.schema - see string type for JSONSchema.
 * @param {boolean} [props.schema.required] - see jsonschema schema.required.
 * @param {boolean} [props.schema.readOnly] - see jsonschema schema.readOnly.
 * @param {string} [props.schema.placeholder] - see HTML5 <input /> placeholder attribute.
 * @param {string} [props.schema.autocomplete] - see HTML5 <input /> autocomplete attribute.
 * @param {integer} [props.schema.minLength] - see jsonschema string.minLength.
 * @param {integer} [props.schema.maxLength] - see jsonschema string.maxLength.
 * @param {string} [props.schema.pattern] - see jsonschema string.pattern.
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
export function InputString({ $id, $name, $value,
  schema = {}, layout = {},
  iconLeft, iconRight,
  dataList,
  disabled,
  oninput, onkeyup, onchange, onfocus, onblur,
  config = configInputString }) {

  const inputcls = [
    parseColorModifier(layout.color),
    parseTextModifier(layout.textColor),
    parseBackModifier(layout.backColor),
    parseSizeModifier(layout.size),
    parseStyleModifier(layout.styles),
    layout.isStatic && inputModifier.static,
  ];

  const inputtype = (stringFormats.includes(schema.format) && schema.format) || 'text';

  return (<Control $id={ $id } layout={ layout } iconLeft={ iconLeft } iconRight={ iconRight } config={ config }>
      <input
        name={ $name || schema.$name }
        type={ inputtype }
        class={ [config.inputClass, inputcls] }
        value={ $value }
        list={ dataList }
        required={ schema.required }
        readonly={ schema.readOnly }
        minLength={ schema.minLength }
        maxLength={ schema.maxLength }
        pattern={ schema.pattern }
        placeholder={ schema.placeholder }
        autocomplete={ schema.autocomplete } // TODO: compile & parse
        oninput={ oninput }
        onkeyup={ onkeyup }
        onchange={ onchange }
        onblur={ onblur }
        onfocus={ onfocus }
        disabled={ disabled } />
    </Control>);
}
InputString.config = configInputString;
InputString.formats = stringFormats;
