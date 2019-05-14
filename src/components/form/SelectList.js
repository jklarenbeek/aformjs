/* eslint-disable padded-blocks */
/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
/* eslint-disable object-curly-newline */
/* @jsx h */
import { h } from 'futilsjs';

import {
  parseColorModifier,
  parseTextModifier,
  parseBackModifier,
  parseSizeModifier,
  parseStyleModifier,
  stateModifier,
  displayModifier,
} from 'aformjs/components/modifiers';

import { DataList, OptionRequired } from './DataList';
import { Control } from './_Control';
import { inputModifier } from '../modifiers';

const configSelectList = {
  ...DataList.config,
  ...Control.config,
  selectDivClass: 'select',
  selectClass: undefined,
};

/**
 * SelectList
 *
 * Renders a HTML5 JSX <select /> component.
 *
 * @param {!object} props
 * @param {string} [props.$id] - DOM Element Identifier.
 * @param {string} [props.$name=props.$id] - HTML Form Field Identier.
 * @param {(string|string[])} [props.class] - class attributes for container holding the <select /> element.
 * @param {(string|string[])} [props.selectClass] - class attributes for the <select /> element.
 * @param {boolean} [props.readOnly] - is DOM element readonly?
 * @param {boolean} [props.disabled] - is DOM element disabled?
 * @param {OnInputEvent} [props.onclick] - DOM click event.
 * @param {OnKeyUpEvent} [props.onkeyup] - DOM keyup event.
 * @param {OnChangeEvent} [props.onchange] - DOM change event.
 * @param {OnFocusEvent} [props.onfocus] - DOM focus event.
 * @param {OnBlurEvent} [props.onblur] - DOM blur event.
 * @param {!JSX[]} children - <option /> or <optgroup /> components for <select /> element.
 * @return {!JSX} jsx <select /> component.
 */
export function SelectListEx({ $id, $name,
  multiple,
  schema,
  disabled = false,
  layout = {}, iconLeft,
  onchange, onfocus, onblur,
  config = configSelectList,
},
children) {

  const divcls = [
    parseColorModifier(layout.color),
    parseStyleModifier(layout.styles),
    parseSizeModifier(layout.size),
    layout.fullwidth && displayModifier.fullwidth,
    layout.loading && stateModifier.loading,
  ];

  const selcls = [
    parseTextModifier(layout.textColor),
    parseBackModifier(layout.backColor),
    layout.isStatic && inputModifier.static,
  ];

  return (<Control $id={ $id } layout={ { ...layout, loading: false } } iconLeft={ iconLeft } config={ config }>
      <div
        id={ $id }
        class={ [config.selectDivClass, divcls] }>
        <select
          name={ $name }
          class={ [config.selectClass, selcls] }
          multiple={ multiple && true }
          required={ schema.required }
          readonly={ schema.readOnly }
          disabled={ disabled }
          onchange={ onchange }
          onblur={ onblur }
          onfocus={ onfocus }
          oncreate={ (el) => {
            // TODO: bug in browsers return wrong length when optgroup's are used
            if (typeof multiple === 'number') {
              el.size = multiple;
            }
            else if (multiple) {
              el.size = el.length;
            }

          } }>
          { children }
        </select>
      </div>
    </Control>);
}

export function SelectList({ $id, $name, schema = {}, options, selected, groups, layout, iconLeft, disabled, onchange, onfocus, onblur, config = configSelectList }) {
  const RenderOptions = config.renderer;

  return (<SelectListEx
    $id={ $id }
    $name={ $name }
    schema={ schema }
    layout={ layout }
    iconLeft={ iconLeft }
    disabled={ disabled }
    onchange={ onchange }
    onfocus={ onfocus }
    onblur={ onblur }
    config={ config }>
    <OptionRequired
      placeholder={ schema.placeholder }
      required={ schema.required }
      selected={ selected } />
    <RenderOptions
      $name={ $name }
      options={ options }
      selected={ selected }
      groups={ groups }
      layout={ layout }
      onchange={ onchange }
      onfocus={ onfocus }
      onblur={ onblur }
      config={ config }>
    </RenderOptions>
  </SelectListEx>);
}
SelectList.config = configSelectList;
