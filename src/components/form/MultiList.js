/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
/* eslint-disable object-curly-newline */
/* @jsx h */
import { h } from '__futilsjs';

import { SelectList, SelectListEx } from './SelectList';

const configMultiList = {
  ...SelectList.config,
  selectDivClass: ['select', 'is-multiple'],
};

/**
 * MultiList
 *
 * Renders a HTML5 JSX <select multiple></select> component.
 *
 * @param {!object} props
 * @param {string} [props.$id] - DOM Element Identifier.
 * @param {string} [props.$name=props.$id] - HTML Form Field Identier.
 * @param {(string|string[])} [props.class] - class attributes for container holding the <select /> element.
 * @param {(string|string[])} [props.selectClass] - class attributes for the <select /> element.
 * @param {integer} [selectSize] - see HTML5 <select multiple /> size attribute
 * @param {boolean} [props.readOnly] - is DOM element readonly?
 * @param {boolean} [props.disabled] - is DOM element disabled?
 * @param {OnInputEvent} [props.onclick] - DOM input event.
 * @param {OnKeyUpEvent} [props.onkeyup] - DOM keyup event.
 * @param {OnChangeEvent} [props.onchange] - DOM change event.
 * @param {OnFocusEvent} [props.onfocus] - DOM focus event.
 * @param {OnBlurEvent} [props.onblur] - DOM blur event.
 * @param {!JSX[]} children - <option /> or <optgroup /> components for <select /> element.
 * @return {!JSX} jsx <select /> component.
 */
export function MultiList({ $id, $name, schema = {}, options, selected, groups, layout, iconLeft, disabled, onchange, onfocus, onblur, config = configMultiList }) {
  const RenderOptions = config.renderer;

  return (<SelectListEx
    multiple={ (layout && layout.rows) || true }
    $id={ $id }
    $name={ $name }
    schema= { schema }
    layout={ layout }
    iconLeft={ iconLeft }
    disabled={ disabled }
    onchange={ onchange }
    onfocus={ onfocus }
    onblur={ onblur }
    config={ config }>
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
MultiList.config = configMultiList;
