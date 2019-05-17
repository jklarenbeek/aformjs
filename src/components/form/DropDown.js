/* eslint-disable import/prefer-default-export */
/* eslint-disable padded-blocks */
/* eslint-disable object-shorthand */
/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
/* eslint-disable object-curly-newline */
/* @jsx h */
import { h, int32_random as int_random, collapseToString } from '__futilsjs';

import {
  parseColorModifier,
  parseSizeModifier,
  parseStyleModifier,
  displayModifier,
  stateModifier,
  alignModifier,
} from 'aformjs/components/modifiers';

import { IconBox, Icon } from 'aformjs/components/elements/Icon';

import { Control, resolveControlIconSize } from './_Control';

import { ListControl, ListGroup, resolveCommonItemProperties } from './List';
import { helperModifier } from '../modifiers';


const configDropDown = {
  ...ListControl.config,
  ListItem: DropDownItem,
  ListGroup: DropDownGroup,
  listControlClass: ['dropdown-content'],
  controlClass: 'control',
  listItemClass: 'dropdown-item',
};

export function DropDownItem({ $id, $name, key, data, selected = [], layout = {}, readonly, disabled, onchange, onfocus, onblur, config = configDropDown }) {
  const { key: k, label: l, selected: s, readonly: r, disabled: d } = resolveCommonItemProperties(key, data, selected, readonly, disabled, config);
  const cls = [
    parseColorModifier(layout.itemColor),
    parseStyleModifier(layout.styles),
    parseSizeModifier(layout.size),
    layout.itemFullWidth && displayModifier.itemFullwidth,
    s && stateModifier.active,
  ];

  return (<a role='button'
    class={ [config.listItemClass, cls] }
    disabled={ d }
    readonly={ r }
    value={ k }
    onfocus={ onfocus }
    onblur={ onblur }
    onclick={ function (ev) {
      if (r || d) ev.preventDefault();
      else onchange(ev, k);
    } }>
      <span class={ config.contentItemClass }>
        { l }
      </span>
    </a>);
}

export function DropDownGroup({ key, data = {}, layout = {}, config }, children) {
  return (<ListGroup
    key = { key }
    data={ data }
    layout={ layout }
    config={ config }>
    { children }
    </ListGroup>);
}

export function DropDown({
  $id, $name, schema = {},
  options, selected, groups,
  layout = {}, iconLeft, iconRight, disabled,
  onchange, onfocus, onblur,
  config = configDropDown }) {

  $id = $id || Symbol(int_random()).toString();

  const hiddenid = Symbol(int_random()).toString();

  const name = $name || hiddenid;
  const menu = Symbol(int_random()).toString();

  const button = [
    config.hasIconRightClass,
    helperModifier.unselectedable,
  ];

  const input = [
    parseColorModifier(layout.color),
    parseStyleModifier(layout.styles),
    parseSizeModifier(layout.size),
    layout.fullwidth && displayModifier.fullwidth,
  ];

  const iconsize = resolveControlIconSize(layout.size);
  const iconId = Symbol(int_random()).toString();
  iconRight = iconRight || { name: 'chevron-circle-down', size: Icon.sizes.large, rotate: Icon.rotates.deg90 };

  const RenderOptions = config.renderer;
  let selectedItem = null;
  return (<Control layout={ layout } iconLeft={ iconLeft } config={ config }>
    <div id={ $id }
      class="dropdown"
      oncreate={ function (el) {
        const active = el.getElementsByClassName(stateModifier.active);
        if (active.length > 0) selectedItem = active[0];

      } }>
      <input type="hidden" name={ name } id={ hiddenid } value={ collapseToString(selected) } />
      <div class="dropdown-trigger">
        <a type="button"
          class={ [config.controlClass, button] }
          aria-haspopup="true"
          aria-controls={ menu }
          onclick={ function (ev) {
            const ctrl = document.getElementById($id);
            ctrl.classList.toggle(stateModifier.active);
            const cl = ev.currentTarget.classList;
            cl.toggle(stateModifier.active);
            const icon = document.getElementById(iconId);
            if (cl.contains(stateModifier.active)) {
              icon.classList.remove(Icon.rotates.deg90);
            }
            else {
              icon.classList.add(Icon.rotates.deg90);
            }
          } }>
          <span class={ ['input', input] }>{ schema.placeholder }</span>
          { iconRight
            && (<IconBox align={ alignModifier.right } size={ iconsize }>
              <Icon { ...iconRight } id={ iconId } />
            </IconBox>) }
          </a>
      </div>
      <div class="dropdown-menu" id={ menu } role="menu">
        <div class={ config.listControlClass }>
        <RenderOptions
          $name={ name }
          options={ options }
          groups={ groups }
          selected={ selected }
          layout={ layout }
          readonly={ schema.readOnly }
          disabled={ disabled }
          onchange={ function (ev, k) {
            const cl = ev.currentTarget.classList;
            cl.toggle(stateModifier.active);
            if (cl.contains(stateModifier.active)) {
              document.getElementById(hiddenid).value = k;
              if (selectedItem) selectedItem.classList.remove(stateModifier.active);
              selectedItem = ev.currentTarget;
            }
            else {
              document.getElementById(hiddenid).value = '';
              selectedItem.classList.remove(stateModifier.active);
              selectedItem = null;
            }
            if (onchange) onchange(ev);
          } }
          onfocus={ onfocus }
          onblur={ onblur }
          config={ config }>
        </RenderOptions>
        </div>
      </div>
    </div>
  </Control>);
}
DropDown.config = configDropDown;
