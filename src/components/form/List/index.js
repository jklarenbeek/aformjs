/* eslint-disable no-unused-vars */
/* eslint-disable padded-blocks */
/* eslint-disable object-shorthand */
/* eslint-disable no-use-before-define */
/* eslint-disable object-curly-newline */
/* @jsx h */
import { h } from 'futilsjs';

import { random } from 'hyperforms/core/tools';

import {
  parseColorModifier,
  parseSizeModifier,
  parseStyleModifier,
  displayModifier,
} from 'hyperforms/components/modifiers';

import { Control } from '../_Control';
import AutoRenderer from './AutoRenderer';
import { colorModifier, sizeModifier, styleModifier } from '../../modifiers';

const configListControl = {
  ...Control.config,

  bindKey: 'key',
  bindLabel: 'label',
  bindGroup: 'group',
  bindReadOnly: 'readonly',
  bindDisabled: 'disabled',
  bindFullwidth: 'fullwidth',
  bindColor: 'color',
  bindSize: 'size',
  bindStyle: 'style',
  bindIcon: 'icon',

  defaultGroupName: 'default',

  ListItem: InputItem,
  ListGroup: ListGroup,

  controlClass: 'control',

  listControlClass: 'formlist',
  listGroupClass: 'listgroup',
  listLegendClass: 'legend',

  listItemClass: 'listitem', // ['radio', 'button'],
  inputItemType: 'text',
  inputItemClass: 'is-checkradio',
  contentItemClass: undefined, // 'button',

  renderer: AutoRenderer,
};

export const listModifier = {
  vertical: 'is-vertical',
  horizontal: 'is-horizontal',
};

export function resolveCommonItemProperties(key, option, selected, readOnly, disabled, config) {

  const obj = (typeof option === 'object')
    ? (option instanceof Array
      ? (typeof option[1] === 'object'
        ? option[1]
        : option)
      : option)
    : option;

  const k = key
    || (typeof option === 'object'
      ? (option instanceof Array
        ? option[0]
        : obj[config.bindKey])
      : option);

  const l = (typeof obj === 'object' && obj[config.bindLabel]) || obj || k;

  // TODO: think about a shortcut to the selected state of an item by caching it in data itself?!
  const s = typeof selected === 'object'
    ? (selected instanceof Array
      ? selected.includes(k)
      : selected[config.bindKey] === k)
    : selected === k;

  const r = readOnly || (typeof obj === 'object' && obj[config.bindReadOnly]);
  const d = disabled || (typeof obj === 'object' && obj[config.bindDisabled]);

  return { key: k, label: l, selected: s, readOnly: r, disabled: d, data: (typeof obj === 'object' ? obj : undefined) };
}

export function resolveItemColor(layout, groupLayout, optionLayout, option, config) {
  return !(config.color === false || layout.color === false || groupLayout.color === false || optionLayout.color === false)
    && optionLayout.color
    && typeof optionLayout.color === 'string'
    && optionLayout.color
    || (option && option[config.bindColor])
    || (optionLayout.color === true
      && groupLayout.color
      && groupLayout.color !== true
      && groupLayout.color)
    || (optionLayout.color === true
      && groupLayout.color === true
      && typeof layout.color === 'string'
      && layout.color);
}

export function resolveButtonColor(layout, groupLayout, optionLayout, option, config) {
  return !(config.optionButtons === false || layout.buttons === false || groupLayout.buttons === false || optionLayout.button === false)
    && optionLayout.button
    && typeof optionLayout.button === 'string'
    && optionLayout.button
    || (option && option[config.bindButton])
    || (optionLayout.button === true
      && resolveItemColor(layout, groupLayout, optionLayout, option, config));
}

/**
 * This is a generalisation for RadioItem and CheckItem
 * This function does NOT auto configure!
 * @param {} param0
 * @param {*} children
 */
export function InputItem({ $id, $name, type, key, option, selected = [], layout = {}, optionLayout = {}, groupLayout = {}, readOnly, disabled, onchange, onfocus, onblur, config = configListControl }) {
  const { key: k, label: l, selected: s, readOnly: r, disabled: d, data } = resolveCommonItemProperties(key, option, selected, readOnly, disabled, config);

  const color = resolveItemColor(layout, groupLayout, optionLayout, data, config);
  const button = resolveButtonColor(layout, groupLayout, optionLayout, data, config);

  return (<label key={ k } disabled={ d } readonly={ r }>
      <input
        id={ $id }
        class={
          [
            config.inputItemClass,
            parseSizeModifier(optionLayout.size),
            optionLayout.solid && styleModifier.solid,
            optionLayout.borderless && styleModifier.borderless,
            optionLayout.complement && styleModifier.complement,
            optionLayout.circle && styleModifier.circle,
            optionLayout.square && styleModifier.square,
            parseColorModifier(color),
          ] }
        name={ $name }
        type={ type || config.inputItemType }
        value={ k }
        checked={ s }
        onchange={ onchange }
        onfocus={ onfocus }
        onblur={ onblur }
        disabled={ (r || d) } />
        <span class={
          [
            config.contentItemClass,
            optionLayout.button && 'button',
            parseColorModifier(button),
            optionLayout.outlined && styleModifier.outlined,
            optionLayout.inverted && styleModifier.inverted,
          ] }>
          { l }
        </span>
    </label>);
}

export function ListGroup({ schema = {}, layout = {}, optionLayout = {}, groups = {}, groupLayout = {}, selected, config }, children) {

  const group = (selected && groups !== true && groups[selected]) || selected || '';
  const label = group[config.bindLabel] || group;
  const size = groupLayout.size !== false && (group[config.bindSize] || (groupLayout.size === true && layout.size));
  const style = groupLayout.style !== false && (group[config.bindStyle] || (groupLayout.style === true && layout.size));
  const color = groupLayout.color !== false && (group[config.bindColor] || (groupLayout.color === true && layout.color));
  const vertical = (groupLayout.vertical && true) || (group[config.bindVertical] && true);

  return (<div
    class={
      [
        config.listGroupClass,
        parseSizeModifier(size),
        parseStyleModifier(style),
        parseColorModifier(color),
        vertical && listModifier.vertical,
      ] }>
      <div class={ config.listLegendClass }>{ label }</div>
      { children }
    </div>);
}

export function ListControlEx({ $id, schema = {}, layout = {}, optionLayout = {}, groups, groupLayout = {}, iconLeft, iconRight, disabled, onclick, onfocus, onblur, config = configListControl }, children) {
  return (<Control layout={ layout } iconLeft={ iconLeft } iconRight={ iconRight } config={ config }>
    <fieldset
      id={ $id }
      role={ (layout.role === true && config.role) || layout.role }
      onclick={ onclick }
      onblur={ onblur }
      onfocus={ onfocus }
      required={ schema.required }
      readonly={ schema.readOnly }
      disabled={ disabled }>
      <span
        class={
          [
            config.listControlClass,
            parseColorModifier(layout.color),
            parseStyleModifier(layout.styles),
            parseSizeModifier(layout.size),
            layout.fullwidth && displayModifier.fullwidth,
            (layout.vertical || config.listVertical) && listModifier.vertical,
          ] }>
          { children }
      </span>
    </fieldset>
  </Control>);
}

export function ListControl(
  {
    $id,
    $name,
    schema = {},
    layout,
    options,
    optionLayout,
    groups,
    groupLayout,
    selected,
    iconLeft,
    iconRight,
    disabled,
    onchange,
    onfocus,
    onblur,
    config = configListControl }) {

  const RenderOptions = config.renderer;
  const name = $name || Symbol(random()).toString();

  return (<ListControlEx
      $id={ $id }
      schema={ schema }
      layout={ layout }
      optionLayout={ optionLayout }
      groupLayout={ groupLayout }
      iconLeft={ iconLeft }
      iconRight={ iconRight }
      disabled={ disabled }
      onchange={ onchange }
      onfocus={ onfocus }
      onblur={ onblur }
      config={ config }>
      <RenderOptions
        $name={ name }
        schema={ schema }
        layout={ layout }
        options={ options }
        optionLayout={ optionLayout }
        groups={ groups }
        groupLayout={ groupLayout }
        selected={ selected }
        disabled={ disabled }
        onchange={ onchange }
        onfocus={ onfocus }
        onblur={ onblur }
        config={ config }>
      </RenderOptions>
    </ListControlEx>);
}
ListControl.config = configListControl;
ListControl.colors = colorModifier;
ListControl.sizes = sizeModifier;
ListControl.styles = styleModifier;
